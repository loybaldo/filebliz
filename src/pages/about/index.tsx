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
                        <h1  style={{marginBottom: 30}}>About Filebliz</h1>
                        <span>
                        FileBliz is a versatile platform for sharing files, catering to various file types and sizes. It provides a user-friendly experience, allowing effortless uploading of files regardless of their format or dimensions. With FileBliz, file sharing becomes a hassle-free process, simplifying the task of uploading files of any type and size.
                        </span>
                    </div>
                </div>

                <div className="card f-mv-w">

                    <div className="f-mv">
                        <span>
                            <h1 style={{marginBottom: 30}}>Our Mission</h1 >
                            Our institution is committed to providing superior learning systems, while FileBliz shares a mission to deliver a secure, user-friendly, and efficient file sharing platform. With a focus on simplicity and reliability, FileBliz empowers individuals, teams, and organizations by providing a seamless solution for storing, accessing, and sharing files of any type and size. Privacy and data security are paramount, as we aim to enhance productivity, foster collaboration, and streamline file management for users worldwide. We will pursue this mission with utmost integrity, dedication, transparency, and creativity.
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