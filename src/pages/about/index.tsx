import Footer from "../../components/common/footer";
import Navigation from "../../components/common/navigation";
import pagetitle from "../.scripts/pagetitle";
import splashMission from '../../assets/about splash.png'
import Loader from "../../components/common/loader";
import Campaign from "../../components/widgets/campaign";
import './about.scss';
import Divider from "../../components/common/divider";


function About() {
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
                        <img width="100%" src={splashMission} alt="mission splash" />
                    </div>
                </div>

                <div className="card">
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
                </div>

                <div className="f-contact">
                    <div className="card">
                        <span>
                            <b>Feel like contacting us? </b>
                            Sumbit your queries here and we'll get back to you as soon as possible.
                        </span>

                        <form action="">
                            <input type="text" name="" id="" placeholder="Email Title" />
                            <input type="email" name="" id="" placeholder="yourmail@mail.com"/>

                            <textarea name="" id="" cols={90} rows={100} placeholder="Hello! I have a feedback..."></textarea>
                            <input type="submit" value="submit" className="f-btn primary"/>
                        </form>
                    </div>
                </div>

                <Campaign />
            </div>

            <Footer />
        </>
    );
}

export default About;