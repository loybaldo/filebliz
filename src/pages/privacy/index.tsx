import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import "./privacy.scss";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
    return (
        <>
            <Navigation/>
            <div className="f-wrapper-info" style={{paddingTop: 100}}>
                <h1 style={{textAlign: "center"}}>Privacy Policy</h1>
                <br/>
                <br/>
                <p>This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website Filebliz, which is built using ReactJS and TypeScript and utilizes Firebase for storage and analytics. By accessing or using our website, you agree to the terms of this Privacy Policy.</p>
                <br/>

                <h2>Information We Collect:</h2>
                <p>We may collect personal information from you when you voluntarily provide it to us. This includes information such as your name, email address, phone number, and any other information you choose to provide. In addition, Firebase may collect certain information automatically, such as your device information, IP address, and usage data. Please refer to Firebase's Privacy Policy for more details on the information collected by Firebase.</p>
                <br/>

                <h2>Use of Firebase:</h2>
                <p>Our website, Filebliz, utilizes Firebase services, including Firebase Storage and Firebase Analytics. Firebase may collect and process personal information as described in their Privacy Policy. We encourage you to review Firebase's Privacy Policy to understand how they handle your personal information.</p>
                <br/>

                <h2>Cookies and Tracking Technologies:</h2>
                <p>Filebliz may use cookies and other tracking technologies to enhance your browsing experience. Cookies are small files that are placed on your computer or device to collect information about your activities on our website. Firebase may also use cookies and similar technologies as part of its services. You can choose to disable cookies through your browser settings, but this may limit certain features or functionality of Filebliz.</p>
                <br/>

                <h2>How We Use Your Information:</h2>
                <p>We may use the personal information we collect from you for the following purposes:</p>
                <br/>
                <ol>
                    <li>To provide and improve our services on Filebliz.</li>
                    <li>To respond to your inquiries or requests.</li>
                    <li>To send you promotional emails or newsletters.</li>
                    <li>To analyze website usage and trends.</li>
                    <li>To comply with applicable laws and regulations.</li>
                </ol>
                <br/>

                <h2>Information Sharing:</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
                <br/>
                <ul>
                    <li>We may share your information with Firebase, as necessary, to utilize their services for storage and analytics.</li>
                    <li>Firebase is contractually obligated to handle your information in accordance with their Privacy Policy. We may disclose your information if required to do so by law or in response to a valid legal request.</li>
                </ul>
                <br/>

                <h2>Data Security:</h2>
                <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure. Firebase also implements security measures to protect the data it processes. Please refer to Firebase's Security and Privacy documentation for more details.</p>
                <br/>

                <h2>Third-Party Websites and Services:</h2>
                <p>Filebliz may contain links to third-party websites or use third-party services. We are not responsible for the privacy practices or the content of those websites or services. We encourage you to review the privacy policies of any third-party websites or services you visit or utilize.</p>
                <br />

                <h2>Changes to This Privacy Policy:</h2>
                <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on Filebliz.</p>
                <br />

                <h2>Contact Us:</h2>
                <p>If you have any questions or concerns about this Privacy Policy or the handling of your personal information, please contact us at <a href="mailto: expomawd@gmail.com">expomawd@gmail.com</a>.</p>
                <br />

            </div>
            <Footer/>
        </>
    );
}

export default PrivacyPolicy;