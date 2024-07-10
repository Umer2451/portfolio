import React from 'react';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import vector from '../images/Vector.png';
import '../styles/footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-div">
                <div className="footer-icons">
                    <img src={email} alt="Email icon" />
                    <img src={linkedin} alt="LinkedIn Icon" />
                </div>
                <p>© Umer Naeem</p>
                <div className="footer-image">
                    <img src={vector} alt="Yellow Splash" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
