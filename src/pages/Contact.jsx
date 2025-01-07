import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const reply = {
      name,
      email,
      message,
    };
    console.log(reply);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="min-h-screen w-full max-w-[69rem] mx-auto bg-[url(/src/assets/images/bg_1.jpg)] bg-cover bg-center relative">
      <div className="overlay absolute inset-0 bg-black/40 flex items-center justify-center  p-6">
        <div className="bg-white/70  rounded-lg shadow-xl p-8 md:p-12 w-full max-w-[50rem]">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Me</h2>
          <form>
            <div className="flex justify-between gap-2">
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                id="message"
                rows="10"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div
              onClick={(e) => {
                submitHandler(e);
              }}
              type="submit"
              className="text-center"
            >
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
