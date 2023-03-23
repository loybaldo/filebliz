import AccountHeader from "../../components/pages/account/acc-header";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import Status from "../../components/pages/account/status";
import UploadList from "../../components/pages/account/upload-list";
import Alert from "../../components/common/alert";


function AccountPage() {
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