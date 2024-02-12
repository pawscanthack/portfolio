// import emailjs from "emailjs-com";
import "../css/contact.css";

export const Contact = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
  console.log(process.env.REACT_APP_SERVICE_ID);
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
  //     (result) => {
  //       alert("Message Sent Successfully");
  //     },
  //     (error) => {
  //       console.log(error.text);
  //       alert("Something went wrong!");
  //     }
  //   );
  //   e.target.reset();
  // };
  return (
    <section className="contact-section">
      <div className="contact-section-container">
        <div></div>
        <div>
          <form className="form-container">
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
            <button type="submit" className="formButton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
