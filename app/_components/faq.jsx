import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How do I book an appointment with a doctor?",
      answer:
        "Booking an appointment is simple. Search for doctors based on specialty, location, or availability. Select your preferred doctor, choose a convenient time slot, and confirm your booking. You'll receive a confirmation email with all the details.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule your appointment up to 24 hours before the scheduled time without any penalty. Simply log in to your account, go to 'My Appointments', and select the reschedule or cancel option.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and in some regions, insurance coverage. All payments are processed securely through our platform.",
    },
    {
      question: "How do video consultations work?",
      answer:
        "Video consultations take place through our secure platform. At the scheduled time, log in to your account, go to 'My Appointments', and click on the 'Join Consultation' button. Make sure your device has a working camera and microphone.",
    },
    {
      question: "Are the doctors on your platform verified?",
      answer:
        "Yes, all doctors on our platform undergo a thorough verification process. We verify their medical licenses, credentials, and professional experience to ensure you receive care from qualified healthcare professionals.",
    },
    {
      question: "What if I need to see a doctor urgently?",
      answer:
        "For urgent cases, use our 'Urgent Care' filter to find doctors with immediate availability. If you're experiencing a medical emergency, please call emergency services or go to the nearest emergency room.",
    },
    {
      question: "Can I get a prescription through this platform?",
      answer:
        "Yes, doctors can issue prescriptions during your consultation if medically necessary. Prescriptions will be sent electronically to your preferred pharmacy or made available for download in your account.",
    },
    {
      question: "How do I access my medical records?",
      answer:
        "You can access your medical records, consultation history, and prescriptions by logging into your account and navigating to 'My Health Records'. All your information is stored securely and confidentially.",
    },
    {
      question: "Is my personal and medical information secure?",
      answer:
        "Yes, we take data security and privacy very seriously. All personal and medical information is encrypted and stored securely. We comply with HIPAA and other relevant healthcare privacy regulations.",
    },
    {
      question: "What if I'm not satisfied with my consultation?",
      answer:
        "Your satisfaction is important to us. If you're not satisfied with your consultation, please contact our customer support team within 48 hours of your appointment, and we'll address your concerns promptly.",
    },
  ]

  return (

    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-700 p-4 mb-4 text-center">Most Frequent Asked Questions</h1>

      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-purple-200">
          <AccordionTrigger className="text-left font-medium text-purple-900 hover:text-purple-700">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
