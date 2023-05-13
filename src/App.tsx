import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './auth/auth-provider';
import NotFoundPage from './pages/404';
import About from './pages/about';
import AccountPage from './pages/account';
import HomePage from './pages/home';
import PricingPage from './pages/pricing';
import SigninPage from './pages/signin';
import Dashboard from './pages/dashboard';
import ScrollToTop from './components/widgets/scroll-to-top';
import Login from './pages/login';


function App() {
	const { currentUser } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/premium" element={<PricingPage />} />
				<Route path="/account" element={(currentUser) ? <AccountPage /> : <Navigate to="/signin" />} />
				<Route path="/about" element={<About />} />
				<Route path="/signin" element={(!currentUser) ? <SigninPage /> : <Navigate to="/account" />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<Login/>} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
