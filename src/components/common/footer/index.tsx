import "./footer.scss";


function Footer() {
    return (
        <footer className="f-footer">
            <div className="f-container">
                <div>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook" style={{fontSize: 24}}></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-square-instagram" style={{fontSize: 24}}></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-twitter" style={{fontSize: 24}}></i>
                    </a>
                </div>
                <div>
                    <span>Filebliz, Copyright 2023</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;