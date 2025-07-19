import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteName: "",
    websiteType: "",
    cardNumber: "",
    expiry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted!");
    setFormData({
      name: "",
      email: "",
      websiteName: "",
      websiteType: "",
      cardNumber: "",
      expiry: "",
    });
    setStep(1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Step {step} of 3</h2>

        {/* Step 1: User Details */}
        {step === 1 && (
          <>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
          </>
        )}

        {/* Step 2: Website Info */}
        {step === 2 && (
          <>
            <label className="block mb-2">Website Name</label>
            <input
              type="text"
              name="websiteName"
              value={formData.websiteName}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <label className="block mb-2">Website Type</label>
            <input
              type="text"
              name="websiteType"
              value={formData.websiteType}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
          </>
        )}

        {/* Step 3: Payment Info */}
        {step === 3 && (
          <>
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <label className="block mb-2">Expiry</label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
              placeholder="MM/YY"
              required
            />
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}