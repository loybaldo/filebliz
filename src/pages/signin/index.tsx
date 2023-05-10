import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../auth/auth-provider";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import GoogleLogo from "../../assets/google.svg";
import FacebookLogo from "../../assets/facebook.svg";
import Button from "../../components/common/button";
import "./signin.scss";


function SigninPage() {
	const { signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
	const location = useLocation();

	useEffect(() => {
		const APP_NAME = process.env.REACT_APP_NAME;
		if (location.pathname === "/signin") {
			document.title = `Sign In - ${APP_NAME}`;
		}

		return () => {
			document.title = APP_NAME!;
		};
	}, [location]);

	const handleGoogleSignIn = async () => {
		await signInWithGoogle();
	};

	const handleFacebookSignIn = async () => {
		await signInWithFacebook();
	};


	return (
		<>
			<Navigation />
			<div>
				<div className="f-signin-container">
					<h1>Sign In Using:</h1>

					<Button onclick={handleGoogleSignIn} classItem={"btn-mini"}>
						<img draggable="false" src={GoogleLogo} alt="Google Logo" />
					</Button>
					<Button onclick={handleFacebookSignIn} classItem={"btn-mini"} >
						<img draggable="false" src={FacebookLogo} alt="Facebook Logo" />
					</Button>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default SigninPage;
