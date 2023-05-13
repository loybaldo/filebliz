function DashboardTitle() {
    const APP_NAME = process.env.REACT_APP_NAME;
    document.title = `Dashboard - ${APP_NAME}`;
    
    return () => {
        document.title = APP_NAME!;
    };
}

function Page404() {
    const APP_NAME = process.env.REACT_APP_NAME;
    document.title = "404 - Page Not Found";
    
    return () => {
        document.title = APP_NAME!;
    };
}

function SigninTitle() {
    const APP_NAME = process.env.REACT_APP_NAME;
    document.title = `Sign In - ${APP_NAME}`;
    
    return () => {
        document.title = APP_NAME!;
    };
}

function PricingTitle() {
    const APP_NAME = process.env.REACT_APP_NAME;
    document.title = `Premium - ${APP_NAME}`;
    
    return () => {
        document.title = APP_NAME!;
    };
}

function AboutTitle() {
    const APP_NAME = process.env.REACT_APP_NAME;    
    document.title = `About - ${APP_NAME}`;
    
    return () => {
        document.title = APP_NAME!;
    };
}

export default { PremiumTitle: PricingTitle, DashboardTitle, Page404, SigninTitle, AboutTitle }