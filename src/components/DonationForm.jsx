import React from "react";

export default function App() {
  function Submit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycby4cfrF2gMM0PS1JDpWotN0uz_UpsRJj_xB93qKbObCU92b0rx8SPq9CI7Pxf5pKNYciA/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("Form submitted successfully!");
          alert("Your message was successfully sent to the Google Sheet!");
        } else {
          console.error("Error:", data.message);
          alert(
            "An error occurred while submitting your form. Please try again."
          );
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        alert(
          "An error occurred while connecting to the server. Please check your connection."
        );
      });
  }

  return (
    <div className="App bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Donation Form
        </h1>
        
        <form className="space-y-4" onSubmit={(e) => Submit(e)}>
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              name="Name"
              type="text"
              required
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              name="Email"
              type="email"
              required
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Phone"
              name="Phone"
              type="tel"
              required
            />
          </div>
          <div>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="DonationType"
              required
            >
              <option value="">Select an option</option>
              <option value="oneDayMeal">One Day Meal</option>
              <option value="virtualAdoption">Virtual Adoption</option>
              <option value="sponsorYearly">Sponsor Yearly</option>
              <option value="sponsorTreatment">Sponsor Treatment</option>
            </select>
          </div>
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Donation Amount (in INR)"
              name="Amount"
              type="Number"
              required
            />
          </div>
          <div>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Message (Optional)"
              name="Message"
              rows="4"
            ></textarea>
          </div>
          <div>
            <button
              className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

