import AccountHeader from "../../components/pages/account/acc-header";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import Status from "../../components/pages/account/status";
import UploadList from "../../components/pages/account/upload-list";


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