import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteName: "",
    websiteType: "",
    description: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
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
      phone: "",
      websiteName: "",
      websiteType: "",
      description: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
    setStep(1);
  };

  // Progress bar width calculation
  const progressWidths = ["33%", "66%", "100%"];
  const progressWidth = progressWidths[step - 1];

  // Animation variants for step transitions
  const stepVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-blue-50 to-gray-200 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-2 bg-blue-600 transition-all duration-300"
              style={{ width: progressWidth }}
            ></div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white/95 border border-gray-200 p-6 rounded-lg shadow-md w-full"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Step {step} of 3</h2>

          {/* Step 1: User Details */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <label className="block mb-2 text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-4 p-2 border-gray-300 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <label className="block mb-2 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-4 p-2 border-gray-300 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <label className="block mb-2 text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                className="w-full mb-4 p-2 border-gray-300 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="e.g. +91 98765 43210"
              />
            </motion.div>
          )}

          {/* Step 2: Website Info */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <label className="block mb-2 text-gray-700 font-medium">Website Name</label>
              <input
                type="text"
                name="websiteName"
                value={formData.websiteName}
                onChange={handleChange}
                className="w-full mb-4 p-2 border-gray-300 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <label className="block mb-2 text-gray-700 font-medium">Website Type</label>
              <input
                type="text"
                name="websiteType"
                value={formData.websiteType}
                onChange={handleChange}
                className="w-full mb-4 p-2 border-gray-300 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <label className="block mb-2 text-gray-700 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                className="w-full mb-4 p-2 border-gray-300 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Brief about your website"
              ></textarea>
            </motion.div>
          )}

          {/* Step 3: Payment Info */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <label className="block mb-2 text-gray-700 font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full mb-4 p-2 border-gray-300 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <label className="block mb-2 text-gray-700 font-medium">Expiry</label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                className="w-full mb-4 p-2 border-gray-300 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="MM/YY"
                required
              />
              <label className="block mb-2 text-gray-700 font-medium">CVV</label>
              <input
                type="password"
                name="cvv"
                value={formData.cvv || ""}
                onChange={handleChange}
                className="w-full mb-4 p-2 border-gray-300 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-200"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
              >
                Submit
              </button>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Your data is secure and will only be used for processing your request.
          </p>
        </form>
      </motion.div>
    </div>
  );
}