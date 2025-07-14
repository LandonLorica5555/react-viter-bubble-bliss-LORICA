import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-purple-200/80 py-20">
        <div className="container justify-items-center">
          <div className="text-center">
            <h2 className="text-4xl text-black font-bold mb-4">
              Get Your{" "}
              <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Milk Tea
              </span>{" "}
              Fix
            </h2>
            <p className="mb-6">
              Have questions or want to share your favorite flavor? We'd love to
              hear from you!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg max-w-5xl w-full">
            <form action="" className="space-y-4">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1">
                  <label htmlFor="name" className="block font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="name"
                    className="w-full px-4 py-2 bg-white border border-gray-400 rounded-lg"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="subject" className="block mb-1 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white border border-gray-400 rounded-lg"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Your Message
                </label>
                <textarea
                  name=""
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 bg-white border border-gray-400 rounded-lg overflow-hidden resize-none"
                  placeholder="Tell us about your favorite milk tea..."
                ></textarea>
              </div>
              <button className="bg-pink-500 w-full px-4 py-2 text-white font-bold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
