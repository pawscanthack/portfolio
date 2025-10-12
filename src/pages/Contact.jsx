import emailjs from "emailjs-com";
import "../css/contact.css";
/*import contactImage from "../img/scott-and-dogs-cropped.jpeg";*/
import { usePostHog } from "posthog-js/react";

export const Contact = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  // console.log(SERVICE_ID, typeof SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
  const posthog = usePostHog();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent Successfully");
        posthog.capture("Form Submitted Successfully", {
          user_name: "Testing Testing 123",
        });

        e.target.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Something went wrong!");
      });
  };
  return (
    <section className="contact-section" id="contactme">
      <div className="contact-section-container">
        <div className="contact-image-container">
{/*           <img
            src={contactImage}
            alt="contact target"
            className="contact-section-image"
          /> */}
        </div>
        <div>
          <form className="form-container" onSubmit={handleOnSubmit}>
            <h2>Send me a message. Let's have a chat!</h2>
            <div className="form-element">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Your name.."
                required
              />
            </div>

            <div className="form-element">
              <label>E-mail</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="Your email.."
                required
              />
            </div>

            <div className="form-element">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                rows="8"
                cols="30"
                placeholder="Your message.."
                required
              />
            </div>
            <button
              type="submit"
              className="form-button"
              onClick={() => {
                posthog.capture("Attempted to Submit Form", {
                  user_name: "Testing Testing 123",
                });
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
