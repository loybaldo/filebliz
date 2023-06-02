import Advert from "../../components/widgets/advert";
import Footer from "../../components/common/footer";
import Landing from "../../components/widgets/landing";
import Navigation from "../../components/common/navigation";
import Services from "../../components/widgets/services";
import Feedbacks from "../../components/widgets/feedbacks";
import Campaign from "../../components/widgets/campaign";
import "./home.scss";


function HomePage() {
    return (
        <>
            <Navigation />
            <div className="mainView">
                <Landing />
                <Advert />
                <Services />
                <Feedbacks />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2476657885581568" crossOrigin="anonymous"></script>
                <ins className="adsbygoogle"
                    style={{display: "block"}}
                    data-ad-format="fluid"
                    data-ad-layout-key="-f1+5r+5a-db+57"
                    data-ad-client="ca-pub-2476657885581568"
                    data-ad-slot="6610420358">

                </ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                <Campaign />
            </div>
            <Footer />
            <div className="f-footer-spacer"></div>
        </>
    );
}

export default HomePage;