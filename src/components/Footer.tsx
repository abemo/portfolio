import React from 'react'
import '../styles/Footer.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <GitHubIcon />
            <LinkedInIcon />
            <EmailIcon />
        </div>
        <p> &copy; 2023 abemo.com</p>
    </div>
  )
}

export default Footer