import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <footer className="App-footer flex-row px-1">
      <ul>
        <li>
          <a href="https://github.com/kyledaviswx" title="Kyle's GitHub"><GitHubIcon /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kyleldavis/" title="Kyle's LinkedIn"><LinkedInIcon /></a>
        </li>
        <li>
          <a href="https://twitter.com/wxKyleD" title="Kyle's Twitter"><TwitterIcon /></a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;