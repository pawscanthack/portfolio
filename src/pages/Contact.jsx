import emailjs from "emailjs-com";
import "../css/contact.css";

export const Contact = () => {
  const SERVICE_ID = "service_la59841";
  const TEMPLATE_ID = "template_wun2qak";
  const PUBLIC_KEY = "16vsghIyBDtJqM3_a";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };
  return (
    <div>
      <form class="form-container" onSubmit={handleOnSubmit}>
        <h2>Send me a message. Let's have a chat!</h2>
        <div class="form-element">
          <label for="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your name.."
            required
          />
        </div>

        <div class="form-element">
          <label>E-mail</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Your email.."
            required
          />
        </div>

        <div class="form-element">
          <label for="message">Message</label>
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
  );
};
