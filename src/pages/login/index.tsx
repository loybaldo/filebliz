import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/auth-provider";
import GoogleLogo from "../../assets/google.svg";
import FacebookLogo from "../../assets/facebook.svg";
import Button from "../../components/common/button";
import pagetitle from "../.scripts/pagetitle";
import "./login.scss";
import Loader from "../../components/common/loader";


function SigninPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	pagetitle.SigninTitle()

	const { signInWithEmail, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
	const appFirstPublished = parseInt(process.env.REACT_APP_FIRST_PUBLISHED!);

	const handleEmailSignin = async () => {
		await signInWithEmail(email, password);
	}

	const handleGoogleSignIn = async () => {
		await signInWithGoogle();
	};

	const handleFacebookSignIn = async () => {
		await signInWithFacebook();
	};


	return (
		<>
			<div className="f-loader-cover">
				<Loader />
			</div>

			<div className="f-signin-container">

				<div className="f-s-background"></div>

				<div className="f-s-container">
					<div className="card">
						<div>
							{/* <Link to={"/"} style={{ textDecoration: "none" }}>&lt; Back</Link> */}
							<h3> Login with email</h3>
							<input type="email" placeholder="sample@mail.com" onChange={ (e) => setEmail(e.target.value) }/>
							<input type="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value) }/>
							<div className="item-under">Don't have an account? <Link to={"/signin"}>Sign Up</Link></div>

							<span className="f-submit-container">
								<button className="f-btn primary" onClick={handleEmailSignin}>Log In</button>
							</span>
						</div>

						<div className="f-thirid-party">
							<span>- or Log in using -</span>

							<div>
								<Button onclick={handleGoogleSignIn} classItem={"btn-mini"}>
									<img draggable="false" src={GoogleLogo} alt="Google Logo" />
								</Button>
								<Button onclick={handleFacebookSignIn} classItem={"btn-mini"} >
									<img draggable="false" src={FacebookLogo} alt="Facebook Logo" />
								</Button>
							</div>
						</div>
					</div>

					<span style={{
						display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
					}}>
						Filebliz, &copy; Copyright {appFirstPublished} {((new Date().getFullYear()) > appFirstPublished) ? ` - ${new Date().getFullYear()}` : null}- All Rights Reserved.
						<Link to={"/"}>Back to Home</Link>
					</span>
				</div>
			</div>
		</>
	);
}

export default SigninPage;