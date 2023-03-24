import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import "./signin.scss";
import GoogleLogo from "../../assets/google.svg";
import FacebookLogo from "../../assets/facebook.svg";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/auth-provider";
import { useLocation } from "react-router-dom";

function SigninPage() {
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

  const { signInWithGoogle, signInWithFacebook } = useContext(AuthContext);

  const handleGoogleSignIn = async () => {
    const user = await signInWithGoogle();
    console.log("User: " + user);
  };

  const handleFacebookSignIn = async () => {
    const user = await signInWithFacebook();
    console.log("User: " + user);
  };

  return (
    <>
      <Navigation />
      <div>
        <div className="f-signin-container">
          <h1>Sign In Using:</h1>
          <button onClick={handleGoogleSignIn}>
            <img src={GoogleLogo} alt="Google Logo" />
          </button>
          <button onClick={handleFacebookSignIn}>
            <img src={FacebookLogo} alt="Facebook Logo" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SigninPage;
