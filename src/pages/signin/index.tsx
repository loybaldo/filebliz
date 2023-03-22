import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider, facebookAuthProvider } from "../../config/firebase";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import "./signin.scss";
import GoogleLogo from "../../assets/google.svg";
import FacebookLogo from "../../assets/facebook.svg";


function SigninPage() {

    const signInWithGoogle = async () => {
        try { await signInWithPopup(auth, googleAuthProvider)}
        catch (err) { console.log(err) }
    }

    const signInWithFacebook = async () => {
        facebookAuthProvider.addScope("public_profile");
        try {
            await signInWithPopup(auth, facebookAuthProvider);
        }
        catch (err) { console.log(err) }
    }

    return (
        <>
            <Navigation/>
            <div>
                <div className="f-signin-container">
                    <h1>Sign In Using:</h1>
                    <button onClick={signInWithGoogle}><img src={GoogleLogo} alt="Google Logo"/></button>
                    <button onClick={signInWithFacebook}><img src={FacebookLogo} alt="Facebook Logo"/></button>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default SigninPage;