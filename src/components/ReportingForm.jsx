import React, { useState } from "react";

const ReportingForm = () => {
  const [formData, setFormData] = useState({
    reporterName: "",
    mobileNumber: "",
    patientName: "",
    patientAddress: "",
    landmark: "",
    animalType: "",
    color: "",
    gender: "",
    age: "",
    weight: "",
    sterilized: "",
    transporter: "",
    contact: "",
    releaseDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyM2ayBv3uFqIb602goITF2jnuSMHtQ7sno0Z9xziD11VIwajYJqOkFB1h3pueMFziXHQ/exec", // Replace with your Apps Script URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
        setFormData({
          reporterName: "",
          mobileNumber: "",
          patientName: "",
          patientAddress: "",
          landmark: "",
          animalType: "",
          color: "",
          gender: "",
          age: "",
          weight: "",
          sterilized: "",
          transporter: "",
          contact: "",
          releaseDate: "",
        });
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Animal Admission Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            id="reporterName"
            value={formData.reporterName}
            onChange={handleChange}
            placeholder="Reporter Name"
            className="w-full rounded-lg border px-4 py-2"
            required
          />
          <input
            type="text"
            id="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="w-full rounded-lg border px-4 py-2"
            required
          />
          <input
            type="text"
            id="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Patient Name"
            className="w-full rounded-lg border px-4 py-2"
            required
          />
          <input
            type="text"
            id="patientAddress"
            value={formData.patientAddress}
            onChange={handleChange}
            placeholder="Patient Address"
            className="w-full rounded-lg border px-4 py-2"
            required
          />
          <input
            type="text"
            id="landmark"
            value={formData.landmark}
            onChange={handleChange}
            placeholder="Landmark"
            className="w-full rounded-lg border px-4 py-2"
          />
          <input
            type="text"
            id="animalType"
            value={formData.animalType}
            onChange={handleChange}
            placeholder="Animal Type (e.g., Dog, Cat)"
            className="w-full rounded-lg border px-4 py-2"
            required
          />
          <input
            type="text"
            id="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Color"
            className="w-full rounded-lg border px-4 py-2"
          />
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age (in years)"
            className="w-full rounded-lg border px-4 py-2"
          />
          <input
            type="number"
            id="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Weight (in kg)"
            className="w-full rounded-lg border px-4 py-2"
          />
          <select
            id="sterilized"
            value={formData.sterilized}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2"
            required
          >
            <option value="">Sterilized?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <input
            type="text"
            id="transporter"
            value={formData.transporter}
            onChange={handleChange}
            placeholder="Transporter Name"
            className="w-full rounded-lg border px-4 py-2"
          />
          <input
            type="text"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Transporter Contact"
            className="w-full rounded-lg border px-4 py-2"
          />
          <input
            type="date"
            id="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2"
            required
          />
           <div>
             <p className="mb-2 text-sm font-medium text-gray-700">
               Terms and Conditions
             </p>
             <p className="mb-4 text-sm text-gray-600">
               I agree and consent to all treatment, medication, sedation,
               anesthesia, surgical procedure as will be deemed necessary by the
               vets of MH 14 for the animal I am admitting. I understand that
               there is an inherent risk up to and including death on admission
               and I agree to the same. I agree to not hold MH 14, its staff, or
               its doctors responsible for any and all eventualities (up to and
               including fatal outcomes) concerning the animal I am admitting. In
               case of death, I agree that MH14 will send the animal for
               cremation without my express consent. If deemed so by 2 or more
               vets, I understand that MH14 and its vets may advise and perform
               euthanasia for an admitted animal without additional consent. I
               agree to not hold MH14 Animal Hospital (Earth Charitable
               Foundation) responsible for the death or loss of the reported
               animal.
            </p>
             <label className="flex items-center">
               <input
                 type="checkbox"
                 className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                 required
              />
              <span className="ml-2 text-sm text-gray-700">
                 I agree to the terms and conditions.
               </span>
             </label>
           </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportingForm;
