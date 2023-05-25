import { collection, query, onSnapshot, DocumentData, getDocs } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import DefaultProfilePic from "../../../assets/default-profile.svg";
import { db } from "../../../config/firebase";
import "./feedbacks.scss";


function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState<DocumentData[]>([])

    const getFeed = () => {
        const feedRef = collection(db, process.env.REACT_APP_FEEDBACK_TABLE!);
        const q = query(feedRef);
      
        const unsubscribe = onSnapshot<DocumentData>(q, (snapshot) => {
          const feedList = snapshot.docs.map((doc) => {
            return { ...doc.data(), docId: doc.id };
          });
          setFeedbacks(feedList);
        });
        
        return () => unsubscribe();
    };
      
    useEffect(() => {
        const unsubscribe = getFeed();
        return () => unsubscribe();
    }, []);
      
      

    return (
        <>{console.log(feedbacks)}
            <div className="f-feed-container" style={{}}>
                <span className="f-feed-label">Feedbacks</span>
                <div className="f-feed">

                    {(feedbacks.length > 0) ? feedbacks.map((feed) => (
                        <div className="f-feed-item" key={Math.random()}>
                            <div className="f-feed-info">
                                <img draggable="false" src={DefaultProfilePic} alt="Zentex" />
                                <div>
                                    <span>{feed.name}</span>
                                    <span>{new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(feed.dateCreated)}</span>
                                </div>
                            </div>
                            <p>{feed.feedback}</p>
                        </div>
                    )) : (<><p></p><p style={{textAlign: "center"}}>No feedbacks</p><p></p></>)}
                </div>
            </div>
        </>
    );
}

export default Feedbacks;