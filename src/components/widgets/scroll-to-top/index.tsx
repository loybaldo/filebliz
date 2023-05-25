// import { useLocation, } from 'react-router-dom';
// import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    // const [isLoaded, setIsLoaded] = useState(false);
    // const location = useLocation();

    // // check if the current route is the one that needs to be refreshed
    // // Needed since there's a bit of a styling issue (the drag and drop styling does not get applied when the user returns to the homepage.)
    // const refreshRoute = location.pathname === "/";

    // function reload() {
    //     if (isLoaded && refreshRoute) {
    //         window.location.reload();
    //         setIsLoaded(false); // y'know the values are flipped in this case xd
    //     }
    // }

    // useEffect(() => {
    //     document.documentElement.style.scrollBehavior = 'unset';
    //     window.scrollTo({
    //         top: 0
    //     });
    //     document.documentElement.style.scrollBehavior = 'smooth';

    //     setIsLoaded(true);
    //     reload()
    // }, [location]);

    return null;
}

// I didn't know what I was doing here but it worked, just a lil unsure if it's gonna cause a reloading loop lmao