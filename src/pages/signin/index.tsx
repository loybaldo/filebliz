import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../auth/auth-provider";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import GoogleLogo from "../../assets/google.svg";
import FacebookLogo from "../../assets/facebook.svg";
import Button from "../../components/common/button";
import pagetitle from "../.scripts/pagetitle";
import "./signin.scss";


function SigninPage() {
	pagetitle.SigninTitle()

	const { signInWithGoogle, signInWithFacebook } = useContext(AuthContext);

	const handleGoogleSignIn = async () => {
		await signInWithGoogle();
	};

	const handleFacebookSignIn = async () => {
		await signInWithFacebook();
	};

	// const location = useLocation();

	// useEffect(() => {
	// 	const APP_NAME = process.env.REACT_APP_NAME;
	// 	if (location.pathname === "/signin") {
	// 		document.title = `Sign In - ${APP_NAME}`;
	// 	}

	// 	return () => {
	// 		document.title = APP_NAME!;
	// 	};
	// }, [location]);


	return (
		<>
			<div className="f-signin-container">

				<div className="f-s-background"></div>

				<div className="f-s-container">
					<div className="card">
						<h3>Sign In with email</h3>

						<form action="">
							<input type="email" name="" id="" />
							<input type="password" />
							<input className="f-btn" type="submit" value="Sign In" />
							<span>have an account? Login
								<Link to={"/signin"}>here</Link>
							</span>
						</form>

						<span>or Sign In using</span>

						<Button onclick={handleGoogleSignIn} classItem={"btn-mini"}>
							<img draggable="false" src={GoogleLogo} alt="Google Logo" />
						</Button>
						<Button onclick={handleFacebookSignIn} classItem={"btn-mini"} >
							<img draggable="false" src={FacebookLogo} alt="Facebook Logo" />
						</Button>

						<Link to={"/"}>go back</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default SigninPage;
