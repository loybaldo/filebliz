import { useEffect } from "react";


declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}


function AdsenseView() {

    useEffect(() => {
        //  (adsbygoogle = window.adsbygoogle || []).push({});
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err)
        }
        console.log("Adsense here!")
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{display: "block"}}
            data-ad-format="fluid"
            data-ad-layout-key="-f1+5r+5a-db+57"
            data-ad-client="ca-pub-2476657885581568"
            data-ad-slot="6610420358">
        </ins>
    );
}

export default AdsenseView;