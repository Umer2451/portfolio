import React, { useEffect } from 'react';
import email from '../../images/email.png';
import linkedin from '../../images/linkedin.png';
import vector from '../../images/Vector.png';
import '../portfolio/styles/footer.css';

function Footer() {
  useEffect(() => {
    const emailIcon = document.getElementById('email-icon');
    const encodedEmail = "dW1lcm5hZWVtNDRAZ21haWwuY29t"; // base64 encoded email
    const decodedEmail = atob(encodedEmail);

    if (emailIcon) {
      emailIcon.addEventListener('click', () => {
        window.location.href = `mailto:${decodedEmail}`;
      });
    }

    return () => {
      if (emailIcon) {
        emailIcon.removeEventListener('click', () => {
          window.location.href = `mailto:${decodedEmail}`;
        });
      }
    };
  }, []);

  return (
    <footer>
      <div className="footer-div">
        <div className="footer-icons">
          <img id="email-icon" src={email} alt="Email icon" style={{ cursor: 'pointer' }} />
          <a href="https://www.linkedin.com/in/umernaeem2451/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn Icon" />
          </a>
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
