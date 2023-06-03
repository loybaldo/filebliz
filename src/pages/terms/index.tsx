import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import "./terms.scss"

function TermsOfUse() {
    return (
        <>
            <Navigation/>
            <div  className="f-wrapper-info" style={{paddingTop: 100}}>
                <h1 style={{textAlign: "center"}}>Terms Of Use</h1>
                <br />
                <p>These Terms of Use govern your use of the website Filebliz. Please read these terms carefully before accessing or using the website. By accessing or using Filebliz, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not access or use Filebliz.</p>
                <br />

                <h2>Use of the Website:</h2>
                <ol>
                    <li>You may use Filebliz solely for lawful purposes and in accordance with these Terms of Use.</li>
                    <li>You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.</li>
                    <li>You agree not to:</li>
                    <br />
                    <ul>
                        <li>Use Filebliz in any way that violates applicable laws or regulations.</li>
                        <li>Interfere with or disrupt the security or functionality of Filebliz.</li>
                        <li>Attempt to gain unauthorized access to any portion of Filebliz or any other systems or networks connected to Filebliz.</li>
                        <li>Use any automated means or form of scraping or data extraction to access, monitor, or copy any content from Filebliz without our prior written consent.</li>
                    </ul>
                </ol>
                <br />

                <h2>Intellectual Property Rights:</h2>
                <ol>
                    <li>Filebliz and its original content, features, and functionality are owned by us and are protected by intellectual property laws.</li>
                    <li>You may not modify, reproduce, distribute, create derivative works, publicly display, or otherwise use any content from Filebliz without our prior written consent.</li>
                </ol>
                <br />

                <h2>Third-Party Content and Links:</h2>
                <ol>
                    <li>Filebliz may contain links to third-party websites or services that are not owned or controlled by us.</li>
                    <li>We do not endorse or assume any responsibility for any third-party content or websites. You access third-party websites at your own risk and subject to the terms and privacy policies of those websites.</li>
                </ol>
                <br />

                <h2>Limitation of Liability:</h2>
                <ol>
                    <li>Filebliz is provided on an "as is" and "as available" basis without any warranties, express or implied.</li>
                    <li>We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access or use of Filebliz.</li>
                </ol>
                <br />

                <h2>Indemnification:</h2>
                <p>You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, costs, and expenses arising out of or in any way related to your use of Filebliz or your violation of these Terms of Use.</p>
                <br />

                <h2>Changes to the Terms of Use:</h2>
                <p>We reserve the right to modify or update these Terms of Use at any time. Any changes will be effective immediately upon posting the updated Terms of Use on Filebliz. Your continued use of Filebliz after any such changes constitutes your acceptance of the modified Terms of Use.</p>
                <br />

                <h2>Severability:</h2>
                <p>If any provision of these Terms of Use is deemed invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.</p>
                <br />

                <h2>Entire Agreement:</h2>
                <p>These Terms of Use constitute the entire agreement between you and us regarding your use of Filebliz and supersede any prior or contemporaneous agreements, communications, or understandings, whether written or oral.</p>





            </div>
            <Footer/>
        </>
    );
}

export default TermsOfUse;