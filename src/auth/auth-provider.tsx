import { createContext, ReactNode, useEffect, useState } from 'react';
import { User, signOut, signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider, facebookAuthProvider, db } from '../config/firebase';
import { collection, DocumentData, onSnapshot, orderBy, query, where } from 'firebase/firestore';

interface Props {
  children: ReactNode;
}

interface AuthContextProps {
  currentUser: User | null;
  memberships: DocumentData[];
  logout: () => void;
  signInWithGoogle: () => Promise<User | null>;
  signInWithFacebook: () => Promise<User | null>;
  getMembership: () => () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  memberships: [],
  logout: () => null,
  signInWithGoogle: () => Promise.resolve(null),
  signInWithFacebook: () => Promise.resolve(null),
  getMembership: () => () => null,
});

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [memberships, setMemberships] = useState<DocumentData[]>([]);

  const getMembership = () => {
    const filesRef = collection(db, process.env.REACT_APP_PURCHASE_TABLE!);
    const q = query(
      filesRef,
      where('userId', '==', currentUser?.uid),
      orderBy('datePurchased', 'desc')
    );
    const unsubscribe = onSnapshot<DocumentData>(q, (snapshot) => {
      const membershipList = snapshot.docs.map((doc) => doc.data());
      setMemberships(membershipList);
    });
    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (currentUser?.uid) {
      const unsubscribe = getMembership();
      return unsubscribe;
    }
  }, [currentUser?.uid]);

  const logout = () => {
    signOut(auth).catch((err) => {
      console.error(err);
    });
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      return result.user;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookAuthProvider);
      return result.user;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, memberships, logout, signInWithGoogle, signInWithFacebook, getMembership }}>
      {children}
    </AuthContext.Provider>
  );
};
