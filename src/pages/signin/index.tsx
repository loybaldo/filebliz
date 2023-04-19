import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import "./signin.scss";
import GoogleLogo from "../../assets/google.svg";
import FacebookLogo from "../../assets/facebook.svg";
import { AuthContext } from "../../auth/auth-provider";


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
				<button onClick={handleGoogleSignIn}>
					<img draggable="false" src={GoogleLogo} alt="Google Logo" />
				</button>
				<button onClick={handleFacebookSignIn}>
					<img draggable="false" src={FacebookLogo} alt="Facebook Logo" />
				</button>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default SigninPage;
