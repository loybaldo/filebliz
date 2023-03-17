import Footer from "../../components/custom/footer";
import Navigation from "../../components/custom/navigation";
import "./account.scss"
import Image from '../../assets/logo-full192.png'
import Divider from "../../components/custom/divider";

interface AccountInterface {
    accountName: string
    memberInfo: string
    expiryDay: number
    expiryRange: string
    itemCount: number
}

function Account({ accountName, memberInfo, expiryDay, expiryRange, itemCount } : AccountInterface) {
    return (
        <>
            <Navigation />
            <div style={{ marginTop: 60 }}></div>

            <div className="f-account-container">
            
                <div className="f-account-overview">


                    <div className="f-account-header">
                        <div className="f-account-photo">
                            {/* jQuery loader? */}
                            <img src={Image}/>
                            <div className="f-account-name">
                                <h1>{accountName}</h1>
                            </div>
                        </div>

                        <div className="f-account-status">

                            <div className="f-member-info">
                                <h3>{memberInfo} member</h3>
                                <span>Expires in {expiryDay} {expiryRange}</span>
                            </div>
                        </div>

                    </div>


                    <Divider/>


                    <div className="f-account-content">
                        {/* json parser n loaders? */}
                        <div className="f-account-content-header">
                            Uploaded ({itemCount})
                        </div>

                        {/* sample json constructed content format */}
                        <div className="f-account-tray">
                            <div className="f-account-item">
                                <div className="f-account-item-availability">_availability-icon_</div>
                                <div className="f-account-item-name">_var-name_</div>
                                <div className="f-account-item-size">_var-size_</div>
                                <div className="f-account-item-share">_share_</div>
                                <div className="f-account-item-delete">_trashcan_</div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

            <Footer />
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default Account;