function Contact() {
  return (
    <section className="bg-[#f2edf5] py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Have questions or need support? We&apos;re here to help.
        </p>

        <form className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-4">
            <label className="mb-2 block font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
