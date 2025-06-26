const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-center bg-dot-pattern">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-gray-800">Get In Touch</h2>
        <form
          action="https://formspree.io/f/mwpbwgbo"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
