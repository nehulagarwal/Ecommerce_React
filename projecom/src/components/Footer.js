import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {Button} from './Button';
import { FaDiscord,FaInstagram,FaYoutube } from 'react-icons/fa6';


const Footer = () => {
    return(
        <Wrapper>
            <section className="contact-short">
            <div className="grid grid-two-column">
                <div>
                    <h3>Ready to get started?</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <Button>
                        <NavLink to="/contact">Get Started</NavLink>
                    </Button>
                </div>
            </div>
            </section>

            <footer >
            <div className="container grid grid-four-column"> 
                <div className='footer-about'>
                <h3>
                    N A
                </h3>
                <p>lorem ispum dolor, sit amet consectetur adipisicng elit.</p>
            </div>

            <div className='footer-subscribe'>
                <h3>Subscribe to our important updates</h3>
                <form action="#">
                    <input type="email" name="email" placeholder='Enter your email' />
                    <input type="submit" value="Subscribe"/>
                </form>
            </div>
                
            <div className='footer-social'>
                <h3>Follow Us</h3>
                <div className="footer-social--icons">
                    <div>
                        <FaDiscord className='icons' />
                    </div>
                    <div>
                        <FaInstagram className='icons' />
                    </div>
                    <div>
                        <FaYoutube className='icons' />
                    </div>
                </div>
            </div>

            <div className='footer-contact'>
                <h3>Call Us</h3>
                <h3>+91 1234567890</h3>
            </div>
            </div>

            <div className="footer-bottom--section">
                <hr/>
                <div className="container grid grid-two-column">
                    <p>© {new Date().getFullYear()} N A. All Rights Reserved</p>
                    <div>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
            </footer>
        </Wrapper>
    );
};



const Wrapper = styled.section`
.contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  .grid div:last-child {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
  }

  footer h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 2.4rem;
  }

  footer p {
    color: ${({ theme }) => theme.colors.white};
  }

  .footer-bottom--section {
    padding-top: 9rem;
  }

  .footer-bottom--section hr {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.hr};
    height: 0.1px;
  }

  .footer-social--icons {
    display: flex;
    gap: 2rem;
  }

  .footer-social--icons div {
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
  }

  .footer-social--icons .icons {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.4rem;
    position: relative;
    cursor: pointer;
  }

  .grid div:last-child {
    justify-self: center;
  }

  footer {
    padding: 9rem 0 9rem 0;
  }

  .footer-bottom--section {
    padding-top: 4.8rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
    }

    .grid div:last-child {
      justify-self: center;
    }
  }
`;


export default Footer;