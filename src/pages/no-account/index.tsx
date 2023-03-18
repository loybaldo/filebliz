import Button from "../../components/common/button";
import Footer from "../../components/custom/footer";
import Navigation from "../../components/custom/navigation";
import "../account/account.scss"

function NoAccount() {
    return (
        <>
            <Navigation />
            <div style={{ marginTop: 60 }}></div>

            <div className="f-account-container">

                <div className="f-no-account">
                    <h1>You're not signed in*</h1>
                    <span>Sign in to view your... page to be revamped</span>
                    <Button label={"Sign In"} href={"/signin"} />
                    <Button label={"debug-go-to-account"} href={"/account"} />
                </div>

            </div>

            <Footer />
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default NoAccount;