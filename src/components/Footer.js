import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Oh پہیان Happy Barthday is The BEST!
        </p>
        <p className='footer-subscription-text'>
          Eat the Chicken
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Credit Card Number'
            />
            <Button buttonStyle='btn--outline'>Send Money</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Croissant</h2>
            <Link to='/sign-up'>Disney World</Link>
            <Link to='/'>is the</Link>
            <Link to='/'>nira fraud</Link>
            <Link to='/'>unless you have</Link>
            <Link to='/'>the Genie Pass</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Nutella</h2>
            <Link to='/'>Beta Does</Link>
            <Link to='/'>you know</Link>
            <Link to='/'>what is the</Link>
            <Link to='/'>Jugt?</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Honey</h2>
            <Link to='/'>Oh پہیان</Link>
            <Link to='/'>Midwest che te</Link>
            <Link to='/'>smart band NAJAR</Link>
            <Link to='/'>EE NAYI ANDA</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Coke</h2>
            <Link to='/'>America barrayi</Link>
            <Link to='/'>menga higai</Link>
            <Link to='/'>(Unless you have)</Link>
            <Link to='/'>(a rich پہیان)</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            پہیان.com
            <img src='/logo52.png' alt="Logo" className="navbar-logo-image" />
            </Link>
          </div>
          <small class='website-rights'>پہیان © 2024.com</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
