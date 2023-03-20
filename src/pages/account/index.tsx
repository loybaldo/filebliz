import AccountHeader from "../../components/custom/acc-header";
import Footer from "../../components/custom/footer";
import Navigation from "../../components/custom/navigation";
import Status from "../../components/custom/status";
import UploadList from "../../components/custom/upload-list";
import "./account.scss";


function AccountPage() {
    return(
        <>
            <Navigation/>
            <AccountHeader/>
            <Status/>
            <UploadList/>
            <Footer/>
        </>
    );
}

export default AccountPage;