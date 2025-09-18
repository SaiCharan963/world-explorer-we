import React from 'react'
import Footer from '../components/Footer';

const Contact = () => {
  function handleFormSubmit(formData) {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    alert("Under Construction 🛠️");
  }

  return (
    <div>
      <div className="bg-gray-900 rounded-2xl p-5 m-3">
        <div className="flex items-center justify-center max-w-2xl mx-auto">
          <form className="flex flex-col w-full" action={handleFormSubmit}>
            <h1 className="text-center text-2xl md:text-4xl font-semibold font-serif p-3">
              Contact Us
            </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="h-10 rounded-xl mb-3 bg-gray-700 pl-2 w-full"
              name="userName"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="h-10 rounded-xl mb-3 bg-gray-700 pl-2 w-full"
              required
              name="email"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              className="rounded-2xl bg-gray-700 pl-2 pt-2 mb-3 w-full h-40"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 py-3 mt-3 mb-3 rounded-lg hover:bg-green-900 transform transition duration-200 hover:scale-105 font-semibold tracking-wide"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="bg-gray-900 text-gray-300 p-6 m-3 rounded-2xl shadow-lg text-center">
          <p className="text-lg font-semibold italic tracking-wide">
            For more interesting projects visit my GitHub profile.
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
};


export default Contact