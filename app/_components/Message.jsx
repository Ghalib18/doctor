"use client"

import { CheckCircle } from "lucide-react"

export default function RegistrationSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 md:p-8 border border-purple-100">
        <div className="flex flex-col items-center text-center">
          <div className="bg-purple-100 p-3 rounded-full mb-4">
            <CheckCircle className="h-12 w-12 text-purple-600" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mb-2">Registration Successful!</h1>

          <p className="text-gray-600 mb-6">
            The doctor has been successfully registered in our system. You can now access all features from the
            dashboard.
          </p>

          <div className="w-full h-px bg-purple-100 my-6"></div>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full md:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
