import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/auth-provider";
import GoogleLogo from "../../assets/google.svg";
import FacebookLogo from "../../assets/facebook.svg";
import Button from "../../components/common/button";
import pagetitle from "../.scripts/pagetitle";
import Loader from "../../components/common/loader";
import "./signin.scss";


function SigninPage() {
	pagetitle.SigninTitle()

	const { signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
	const appFirstPublished = parseInt(process.env.REACT_APP_FIRST_PUBLISHED!);

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

						<form action="">
							<h3>Sign Up with email</h3>
							<input type="email" name="" id="" placeholder="sample@mail.com" />
							<div style={{ marginTop: 20 }}></div>

							<input type="password" placeholder="Password" />
							<input type="password" placeholder="Confirm Password" />
							<div className="item-under">Already have an account? <Link to={"/login"}>Log in</Link></div>

							<span className="f-submit-container">
								<input className="f-btn primary" type="submit" value="Sign Up" />
							</span>
						</form>

						<div className="f-thirid-party">
							<span>- or Sign Up using -</span>

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
