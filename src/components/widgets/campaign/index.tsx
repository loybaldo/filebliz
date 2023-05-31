import { useContext } from "react";
import { AuthContext } from "../../../auth/auth-provider";
import { useNavigate } from "react-router";
import Button from "../../common/button";
import './campaign.scss'

export default function Campaign() {
    const { currentUser, logout } = useContext(AuthContext);
    const history = useNavigate();

    const handleClickA = () => {
        history('/signin');
        window.scrollTo(0, 0);
    };

    const handleClickB = () => {
        history('/account')
        window.scrollTo(0, 0);
    }

    const handleToggle = () => {
        if (currentUser) {
            return (
                <Button onclick={handleClickB} classItem={"primary special-signin"} > Go To Dashboard </Button>
            );
        } else {
            return (
                <Button onclick={handleClickA} classItem={"primary special-signin"}> Sign in </Button>
            );
        }
    };

    return (
        <>
            <div className="f-campaign">
                <h1>Start Sharing Your Files with the World</h1>
                <span>Get started with Filebliz Today for free</span>
                {handleToggle()}
            </div>
        </>
    );
}