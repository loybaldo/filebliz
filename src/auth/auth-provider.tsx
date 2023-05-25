import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { User, signOut, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleAuthProvider, facebookAuthProvider, db } from '../config/firebase';
import { collection, deleteDoc, DocumentData, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';

interface Props {
  	children: ReactNode;
}

// ============================================
//     Authentication Properties
// ============================================
interface AuthContextProps {
	totalUsedStorage: number;
	currentUser: User | null;
	memberships: DocumentData[];
	files: DocumentData[];
	logout: () => void;
	signUpWithEmail: (email: string, password: string) => Promise<User | null>;
	signInWithEmail: (email: string, password: string) => Promise<User | null>;
	signInWithGoogle: () => Promise<User | null>;
	signInWithFacebook: () => Promise<User | null>;
	getMembership: () => () => void;
	getFiles: () => () => void;
}

export const AuthContext = createContext<AuthContextProps>({
	totalUsedStorage: 0,
	currentUser: null,
	memberships: [],
	files: [],
	logout: () => null,
	signUpWithEmail: () => Promise.resolve(null),
	signInWithEmail: () => Promise.resolve(null),
	signInWithGoogle: () => Promise.resolve(null),
	signInWithFacebook: () => Promise.resolve(null),
	getMembership: () => () => null,
	getFiles: () => () => null,
});

export const AuthProvider = ({ children }: Props) => {
	const [totalUsedStorage, setTotalUsedStorage] = useState(0);
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [memberships, setMemberships] = useState<DocumentData[]>([]);
	const [files, setFiles] = useState<DocumentData[]>([]);

	// ============================================
	//     Get the membership of the user
	// ============================================
	const getMembership = () => {
		const filesRef = collection(db, process.env.REACT_APP_PURCHASE_TABLE!);
		const q = query(
			filesRef,
			where('userId', '==', currentUser?.uid),
			orderBy('datePurchased', 'desc')
		);
		const unsubscribe = onSnapshot<DocumentData>(q, (snapshot) => {
			const membershipList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
			setMemberships(membershipList);
		});
		return unsubscribe;
	};
	  

	// ============================================
	//     Get the files uploaded by the user
	// ============================================
	const getFiles = useCallback(() => {
		const filesRef = collection(db, process.env.REACT_APP_UPLOAD_FIRESTORE_PATH!);
		const q = query(filesRef, where("uploader", "==", currentUser?.uid), orderBy("dateUploaded", "desc"));
		let storage = 0;
		const unsubscribe = onSnapshot<DocumentData>(q, (snapshot) => {
			const filesList = snapshot.docs.map((doc) => {
				storage = storage + doc.data().size;
				return ({ ...doc.data(), docId: doc.id })
			});
			setTotalUsedStorage(storage);
			setFiles(filesList);
		});
		return () => unsubscribe();
	}, [currentUser?.uid]);
  

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

	// ============================================
	//     Logout the user
	// ============================================
	const logout = () => {
		signOut(auth).catch((err) => {
			console.error(err);
		});
	};

	// ============================================
	//     Signup using Email account
	// ============================================
	const signUpWithEmail = async (email: string, password: string) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    		return userCredential.user;
			
		} catch (err) {
			console.error(err);
			return null;
		}
		
	};

	// ============================================
	//     Signin using Email account
	// ============================================
	const signInWithEmail = async (email: string, password: string) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
    		return userCredential.user;
			
		} catch (err) {
			console.error(err);
			alert("Invalid email or password!");
			return null;
		}
		
	};

	// ============================================
	//     Signin using Google account
	// ============================================
	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, googleAuthProvider);
			return result.user;
		} catch (err) {
			console.error(err);
			return null;
		}
	};

	// ============================================
	//     Signin using Facebook account
	// ============================================
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
		<AuthContext.Provider value={{
			totalUsedStorage,
			currentUser,
			memberships,
			files,
			logout,
			signUpWithEmail,
			signInWithEmail,
			signInWithGoogle,
			signInWithFacebook,
			getMembership,
			getFiles,
		}}>
			{children}
		</AuthContext.Provider>
  	);
};
