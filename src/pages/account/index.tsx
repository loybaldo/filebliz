import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../auth/auth-provider";
import AccountHeader from "../../components/widgets/acc-header";
import Navigation from "../../components/common/navigation";
import Status from "../../components/widgets/status";
import UploadList from "../../components/widgets/upload-list";
import Alert from "../../components/common/alert";


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
            <div style={{width: "100%", maxWidth: 1320, padding: "0 20px", margin: "0 auto"}}>
                <Alert
                    type="info"
                    title="Subscription will expire in 3 days"
                    message="Lorem ipsum dolor sit amet orem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit ametorem ipsum dolor sit amet"
                />
            </div>
            <Status/>
            <UploadList/>
            <div style={{height: 100}}></div>
        </>
    );
}

export default AccountPage;