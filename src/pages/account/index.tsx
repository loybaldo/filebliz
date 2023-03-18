import Footer from "../../components/custom/footer";
import Navigation from "../../components/custom/navigation";
// FIXME fix image
// import Image from '../../assets/logo-full192.png'
import Divider from "../../components/custom/divider";
import "./account.scss"
import Button from "../../components/common/button";
import Icon from "../../components/custom/icon";
import Icons from "../../components/custom/icon/Icon";


// I have no absolute idea on what I am doing here
interface AccountInterface {
    accountName: string
    memberInfo: string
    expiryDay: number
    expiryRange: string
}

interface AccountStatInterface {
    itemCount: number
}

interface ChipInterface {
    itemType: string
    itemName: string
    itemByteSize: number
    itemByteType: string
}

interface DashboardInterface {
    header: string
    subHeader: string
    btnLabel: string
    href?: string
}

function AccountDashboardCard({ header, subHeader, btnLabel, href }: DashboardInterface) {
    return (
        <>
            <div className="f-flags-icon">
                <i className="fa-regular fa-crown" style={{ fontSize: 24, color: "var(--primary-color)" }}></i>
            </div>

            <div className="f-flags-content">
                <div>
                    <h2>{header}</h2>
                    <span>{subHeader}</span>
                </div>
                <div className="f-flags-button">
                    {/* TODO maybe contact section, could be under the about page */}
                    <Button label={btnLabel} href={href} />
                </div>
            </div>
        </>
    );
}

function AccountItemChips({ itemType, itemName, itemByteSize, itemByteType }: ChipInterface) {
    return (
        <>
            {/* 
                Please Confirm if this section will be converted to some kind of a button or something, thank you
            */}

            <div className="f-account-item">

                <div className="f-item-type">
                    {/* FIXME add itemType */}
                    <Icon color="#735aaf" size={30} icon={Icons.file_outline_bold} />
                </div>
                <div className="f-item-name">{itemName}</div>
                <div>
                    <span className="f-item-byte-size">{itemByteSize}</span>
                    <span className="f-item-byte-type">{itemByteType}</span>
                </div>

                <div>
                    <span className="f-item-share">
                        <Icon color="#ffffff" size={18} icon={Icons.link_outline_bold} />
                    </span>
                    <span className="f-item-delete">
                        <Icon color="#ffffff" size={18} icon={Icons.trash_outline_bold} />
                    </span>
                </div>                

            </div>
        </>
    );
}

function AccountContent({ itemCount }: AccountStatInterface) {
    return (
        <>
            <div className="f-account-content">
                {/* json parser n loaders? */}

                <div className="f-account-dashboard">

                    <div className="f-account-storage">
                        <h3>Storage</h3>
                        <div className="f-storage-progress">


                            <div className="f-storage-progress-value">
                                <span>{/* insert variable here */} _value_</span>
                            </div>


                        </div>

                        <div className="f-storage-status">
                            <div className="f-storage-info">

                                <div className="f-storage-indicator-A"></div>
                                <div>Used Storage <span>{/* insert variable here */}</span></div>

                            </div>
                            <div className="f-storage-info">

                                <div className="f-storage-indicator-B"></div>
                                <div>Available<span>{/* insert variable here */}</span></div>

                            </div>
                        </div>

                    </div>
                    
                    {/* FIXME hardcoded style display */}
                    <div className="f-account-upgradable-flags" style={{display: "none"}}>
                        
                        <AccountDashboardCard header={"Running Out of Storage?"} subHeader={"Click the button below to check our premium plans."} btnLabel={"Go Premium"} href={"/premium"} />

                    </div>

                    {/* FIXME hardcoded style display */}
                    <div className="f-account-upgradable-flags" style={{ display: "flex" }}>

                        <AccountDashboardCard header={"Still Running Out of Storage?"} subHeader={"Click the button below to contact us for special plans."} btnLabel={"Go Enterprise"} href={"/about"} />

                    </div>


                </div>

                <div className="f-account-content-header">
                    Uploaded ({itemCount})
                </div>

                <div className="f-account-tray">
                    <div className="f-tray-header">
                        <span></span>
                        <span>Name</span>
                        <span>Size</span>
                    </div>
                    
                    {/*
                        I guess <AccountItemChips/> will be added by a handler?
                    */}
                    
                    <AccountItemChips itemType={"_icon_"} itemName={"_name_"} itemByteSize={0} itemByteType={"KB"} />
                    <AccountItemChips itemType={"_icon_"} itemName={"_name_"} itemByteSize={0} itemByteType={"KB"} />
                    <AccountItemChips itemType={"_icon_"} itemName={"_name_"} itemByteSize={0} itemByteType={"KB"} />
                    <AccountItemChips itemType={"_icon_"} itemName={"_name_"} itemByteSize={0} itemByteType={"KB"} />
                    <AccountItemChips itemType={"_icon_"} itemName={"_name_"} itemByteSize={0} itemByteType={"KB"} />
                    <AccountItemChips itemType={"_icon_"} itemName={"_name_"} itemByteSize={0} itemByteType={"KB"} />
                    <AccountItemChips itemType={"_icon_"} itemName={"_name_"} itemByteSize={0} itemByteType={"KB"} />
                </div>

            </div>
        </>
    );
}

function AccountHeader({ accountName, memberInfo, expiryDay, expiryRange }: AccountInterface) {
    return (
        <>
            <div className="f-account-header">

                <div className="f-account-photo">
                    {/* jQuery loader? */}
                    {/* FIXME fix image */}
                    <img /*src={Image}*/ />
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
        </>
    );
}


export default function Account() {
    return (
        <>
            <Navigation />

            <div className="f-account-container">
                <div className="f-account-overview">

                    {/* 

                        I expect this will be a json GET so here are the definitions
                        
                        ### Under Account Overiew ###   
                        :   AccountHeader(), AccountContent()

                        - accountName   : string for username           (Will this extend to fetching premium account tags? ex: 'userName, @exampleUser')
                        - memberInfo    : string array member type      [ Unregistered | Free | Pro | Premium ]
                        - expiryDay     : int value
                        - expiryRange   : string array date type        [ Day | Days | Month | Months | Year | Years ]
                        - itemCount     : int of total file items returned

                        
                        ### Under File Chips ###        
                        :   AccountItemChips()

                        - itemType      : string array for file icons   (I'm not sure about this, please have it yourself)
                        - itemName      : string for file names
                        - itemByteSize  : int for byte numbers
                        - itemByteType  : string array for byte size    [ KB | MB | GB | TB ]


                        I may have missed some lol

                        FIXME remove this line when this feature has been implemented

                    */}

                    <AccountHeader accountName={"_SampleUserName_"} memberInfo={"_Sample Member Type_"} expiryDay={0} expiryRange={"_Sample Expiry Range_"} />

                    <Divider/>

                    <AccountContent itemCount={0} />

                </div>

            <Footer />
            <div className="f-footer-spacer"></div>
            </div>
        </>
    );
}