import { useContext, useState } from "react";
import validator from "email-validator";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/auth-provider";
import GoogleLogo from "../../assets/google.svg";
import FacebookLogo from "../../assets/facebook.svg";
import Button from "../../components/common/button";
import pagetitle from "../.scripts/pagetitle";
import Loader from "../../components/common/loader";
import "./signin.scss";




function SigninPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

	pagetitle.SigninTitle()

	const { signUpWithEmail, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
	const appFirstPublished = parseInt(process.env.REACT_APP_FIRST_PUBLISHED!);

	const handleEmailSignIn = async () => {
		const isEmail = validator.validate(email);
		if (!isEmail) {
			alert("Email is not valid!");
			return;
		}
		if (password !== password2) {
			alert("Password not confirmed!");
			return;
		}
		const data = await signUpWithEmail(email, password);
		if (!data) {
			alert("Email already used by other user!\nOr email address does not exist!")
		}
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
			        <Link to="/">
						<button className="f-home-btn">
				 			<i className="fa-solid fa-arrow-left"></i>
						</button>
					</Link>

				<div className="f-s-background"></div>
			

				<div className="f-s-container">
				
					<div className="card">
            
						<div className="form-s">
							<h3>Sign Up with email</h3>
							<input type="email" placeholder="sample@mail.com" onChange={ (e) => setEmail(e.target.value) }/>
							<div style={{ marginTop: 20 }}></div>
                            <div className="password-input">
							<input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
							{/* eye icon below */}
							<div className="password-toggle">
    						{password && ( <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}   onClick={() => setShowPassword(!showPassword)} title={showPassword ? "Hide password" : "Show password"}/>)}
							</div>
							</div>
							<div className="password-input">
							<input type={showPassword2 ? "text" : "password"} placeholder="Confirm Password" value={password2} onChange={(e) => setPassword2(e.target.value) }/>
							{/* eye icon 2 below */}
							<div className="password-toggle">
    						{password2 && ( <i className={`fa-regular ${showPassword2 ? "fa-eye-slash" : "fa-eye"}`}   onClick={() => setShowPassword2(!showPassword2)} title={showPassword2 ? "Hide password" : "Show password"}/>)}
							</div>
							</div>
							<div className="item-under">Already have an account? <Link to={"/login"}>Log in</Link></div>


							<span className="f-submit-container">
								<button className="f-btn primary" onClick={handleEmailSignIn}>Sign Up</button>
							</span>
						</div>

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
					</span>
				</div>
			</div>
		</>
	);
}

export default SigninPage;
