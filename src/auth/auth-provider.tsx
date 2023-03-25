import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { User, signOut, signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider, facebookAuthProvider } from '../config/firebase';


interface Props {
  	children: ReactNode;
}

interface AuthContextProps {
	currentUser: User | null;
	logout: () => void;
	signInWithGoogle: () => Promise<User | null>;
	signInWithFacebook: () => Promise<User | null>;
}

export const AuthContext = createContext<AuthContextProps>({ 
	currentUser: null,
	logout: () => null,
	signInWithGoogle: () => Promise.resolve(null),
	signInWithFacebook: () => Promise.resolve(null),
});

export const AuthProvider = ({ children }: Props) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => { setCurrentUser(user) });

		return () => {
		unsubscribe();
		};
	}, []);

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
		<AuthContext.Provider value={{ currentUser, logout, signInWithGoogle, signInWithFacebook }}>
			{children}
		</AuthContext.Provider>
	);
};
