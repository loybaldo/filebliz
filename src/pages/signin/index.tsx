import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider, facebookAuthProvider } from "../../config/firebase";
import Footer from "../../components/custom/footer";
import Navigation from "../../components/custom/navigation";
import "./signin.scss";
import GoogleLogo from "../../assets/google.svg";
import FacebookLogo from "../../assets/facebook.svg";


function SigninPage() {

    const signInWithGoogle = async () => {
        try { await signInWithPopup(auth, googleAuthProvider)}
        catch (err) { console.log(err) }
    }

    const signInWithFacebook = async () => {
        // try { await signInWithPopup(auth, facebookAuthProvider)}
        // catch (err) { console.log(err) }
    }

    return (
        <>
            <Navigation/>
            <div style={{maxWidth: 1320, margin: "60px auto 0 auto", padding: "50px 0", textAlign: "center"}}>
                <h1>Sign In Using:</h1>
                <div className="f-signin-container">
                    <button onClick={signInWithGoogle}><img src={GoogleLogo} alt="Google Logo"/></button>
                    <button onClick={signInWithFacebook}><img src={FacebookLogo} alt="Facebook Logo"/></button>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default SigninPage;