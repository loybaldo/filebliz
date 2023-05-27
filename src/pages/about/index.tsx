import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import validator from "email-validator";
import { v4 as uuidv4 } from "uuid";
import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import pagetitle from "../.scripts/pagetitle";
import splashMission from '../../assets/about splash.png'
import Loader from "../../components/common/loader";
import Campaign from "../../components/widgets/campaign";
import './about.scss';


function About() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleSubmit = async () => {
        if ((name == "") || (email == "") || (feedback == "")) {
            alert("Please write something!");
			return;
        }
        const isEmail = validator.validate(email);
        if (!isEmail) {
			alert("Email is not valid!");
			return;
		}

        const feedInfo = {
            id: uuidv4(),
            name,
            email,
            feedback,
            dateCreated: new Date().getTime(),
        };
        await addDoc(collection(db, process.env.REACT_APP_FEEDBACK_TABLE!), feedInfo);
        alert("Feedback submitted!");
    }

    pagetitle.AboutTitle()

    return (
        <>
            <Navigation />
            <div style={{ marginTop: 60 }}></div>

            <div className="f-wrapper">
                <div className="card">
                    <div>
                        <h1>About Filebliz</h1>
                        <span>Filebliz is a filesharing service blah blah blah consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    </div>
                </div>

                <div className="card f-mv-w">

                    <div className="f-mv">
                        <span>
                            <h1>Our Mission</h1>
                            MMmmmmmm vision mission statement... We are an institution committed to provide knowledge through the development and delivery of superior learning systems.
                            We strive to provide optimum value to all our stakeholders — our students, our faculty members, our employees, our partners, our shareholders, and our community.
                            We will pursue this mission with utmost integrity, dedication, transparency, and creativity.
                            Vision: To be the leader in innovative and relevant education that nurtures individuals to become competent and responsible members of society.

                        </span>
                        <img src={splashMission} alt="mission splash" />
                    </div>
                </div>

                {/* <div className="card">
                    <div>

                        <h1>Meet The Team</h1>
                        <div>
                            <span>
                                <Loader />
                            </span>
                            <span>
                                <Loader />
                            </span>
                            <span>
                                <Loader />
                            </span>
                            <span>
                                <Loader />
                            </span>
                        </div>
                    </div>
                </div> */}

                <div className="f-contact">
                    <div className="card">
                        <span>
                            <b>Feel like contacting us? </b>
                            Sumbit your queries here and we'll get back to you as soon as possible.
                        </span>

                        <div className="f-about-form">
                            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                            <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>

                            <textarea cols={90} rows={100} placeholder="Write your feedback..." onChange={(e) => setFeedback(e.target.value)}></textarea>
                            <button className="f-btn primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>

                <Campaign />
            </div>

            <Footer />
        </>
    );
}

export default About;