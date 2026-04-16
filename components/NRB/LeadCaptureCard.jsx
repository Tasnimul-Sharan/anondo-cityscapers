// import LeadForm from "@/components/forms/LeadForm";

import LeadForm from "./LeadForm";

export default function LeadCaptureCard() {
  return (
    <section className="py-20 bg-white flex justify-center">
      <div className="bg-gray-50 p-8 rounded-2xl shadow-xl w-full max-w-lg border">
        <h3 className="text-xl font-bold text-center">Book Your Site Visit</h3>

        <p className="text-center text-gray-500 mt-2">
          Limited plots available — reserve your slot now
        </p>

        <div className="mt-6">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
