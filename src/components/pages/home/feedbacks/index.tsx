import "./feedbacks.scss";
import DefaultProfilePic from "../../../../assets/default-profile.svg";


function Feedbacks() {
    return (
        <>
            <div style={{width: "100%", padding: "40px 20px", margin: "20px auto 0 auto", backgroundColor: "#efefef"}}>
                <span className="f-feed-label">Feedbacks</span>
                <div className="f-feed">
                    
                    <div className="f-feed-item">
                        <div className="f-feed-info">
                            <img src={DefaultProfilePic} alt="Zentex" />
                            <div>
                                <span>Julio Amolato</span>
                                <span>{new Intl.DateTimeFormat("en-US", {month: "long", day: "numeric", year: "numeric"}).format(new Date("2023-02-18"))}</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, tempore. Inventore excepturi aspernatur sed quidem culpa repudiandae nisi minima, vitae perspiciatis non debitis sequi corrupti ipsa! Aut, quae. Recusandae, consequuntur.</p>
                    </div>

                    <div className="f-feed-item">
                        <div className="f-feed-info">
                            <img src={DefaultProfilePic} alt="Bot sa ML" />
                            <div>
                                <span>Juanito Baldo</span>
                                <span>{new Intl.DateTimeFormat("en-US", {month: "long", day: "numeric", year: "numeric"}).format(new Date("2023-01-03"))}</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, tempore. Inventore excepturi aspernatur sed quidem culpa repudiandae nisi minima, vitae perspiciatis non debitis sequi corrupti ipsa! Aut, quae. Recusandae, consequuntur.</p>
                    </div>

                    <div className="f-feed-item">
                        <div className="f-feed-info">
                            <img src={DefaultProfilePic} alt="Gravity" />
                            <div>
                                <span>Deobert Abiso</span>
                                <span>{new Intl.DateTimeFormat("en-US", {month: "long", day: "numeric", year: "numeric"}).format(new Date("2023-02-27"))}</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, tempore. Inventore excepturi aspernatur sed quidem culpa repudiandae nisi minima, vitae perspiciatis non debitis sequi corrupti ipsa! Aut, quae. Recusandae, consequuntur.</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Feedbacks;