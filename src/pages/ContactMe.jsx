export default function ContactMe() {
  return (
    <section id="Contact">
      <div>
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
        <p>Let's get together and make magic!</p>
      </div>
      <form>
        <div>
          <label htmlFor="first-name">
            <span>First Name</span>
            <input type="text" name="first-name" id="first-name" required />
          </label>
          <label htmlFor="last-name">
            <span>Last Name</span>
            <input type="text" name="last-name" id="last-name" required />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" name="email" id="email" required />
          </label>
          <label htmlFor="phone-number">
            <span>phone-number</span>
            <input
              type="number"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic">
          <span>Choose a topic</span>
          <select id="choose-topic">
            <option>Select One...</option>
            <option>Job Opportunity</option>
            <option>Interesting Project</option>
            <option>Other</option>
          </select>
        </label>
        <label htmlFor="message">
          <span>Message</span>
          <textarea id="message" rows="8" placeholder="Type your message..." />
        </label>
        <label htmlFor="checkboc">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span>I accept the terms</span>
        </label>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}
