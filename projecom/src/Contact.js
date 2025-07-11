import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
  <h2 className="common-heading">Contact Us</h2>
    <iframe title="Collector Ganj Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1470.9102322665624!2d77.7764205943265!3d28.736461606721587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c85ba4ce62333%3A0x7190401a0681f1c7!2sCollector%20Ganj!5e0!3m2!1sen!2sin!4v1751203479129!5m2!1sen!2sin" width="800" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xzzgoppl" method="POST" className="contact-inputs">
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <input type="email" name="email" placeholder="Enter Your Email" required />
            <textarea name="message" rows="10" placeholder="Enter Your Message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
    </div>
  </Wrapper>;
};

export default Contact;