import { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/auth-provider";
import AccountHeader from "../../components/pages/account/acc-header";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import Status from "../../components/pages/account/status";
import UploadList from "../../components/pages/account/upload-list";
import Alert from "../../components/common/alert";
import { useLocation } from "react-router-dom";


function AccountPage() {
    const location = useLocation();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const APP_NAME = process.env.REACT_APP_NAME;
        if (location.pathname === "/account") {
            document.title = `${currentUser?.displayName} - ${APP_NAME}`;
        }

        return () => {
            document.title = APP_NAME!;
        };
    },);
    
    return(
        <>
            <Navigation/>
            <AccountHeader/>
            <Status/>
            <div style={{width: "100%", maxWidth: 1320, padding: "0 20px", margin: "0 auto"}}>
                <Alert
                    type="info"
                    title="Subscription will expire in 3 days"
                    message="Lorem ipsum dolor sit amet orem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit amet"
                />
            </div>
            <UploadList/>
            <Footer/>
        </>
    );
}

export default AccountPage;