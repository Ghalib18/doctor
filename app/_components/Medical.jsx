import { Users, Brain, Heart, Bone, Eye, Stethoscope } from "lucide-react"

export default function DoctorTypes() {
  const doctors = [
    {
      type: "Cardiologist",
      description:
        "Specializes in diagnosing and treating heart disorders, including heart disease, heart attacks, and heart failure.",
      icon: <Heart className="h-10 w-10 text-purple-600" />,
    },
    {
      type: "Neurologist",
      description:
        "Focuses on disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.",
      icon: <Brain className="h-10 w-10 text-purple-600" />,
    },
    {
      type: "Orthopedist",
      description:
        "Treats conditions affecting the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.",
      icon: <Bone className="h-10 w-10 text-purple-600" />,
    },
    {
      type: "Ophthalmologist",
      description: "Specializes in eye and vision care, from prescribing glasses to performing complex eye surgeries.",
      icon: <Eye className="h-10 w-10 text-purple-600" />,
    },
    {
      type: "General Practitioner",
      description:
        "Provides primary healthcare and treats a wide range of conditions, referring to specialists when necessary.",
      icon: <Stethoscope className="h-10 w-10 text-purple-600" />,
    },
    {
      type: "Family Physician",
      description:
        "Provides comprehensive healthcare for people of all ages, focusing on preventive care and treating various conditions.",
      icon: <Users className="h-10 w-10 text-purple-600" />,
    },
  ]

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">Medical Specialists</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 border border-purple-100"
            >
              <div className="flex flex-col items-center mb-4">
                {doctor.icon}
                <h2 className="text-xl font-semibold text-purple-700 mt-4">{doctor.type}</h2>
              </div>
              <p className="text-gray-600 text-center">{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
