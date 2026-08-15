import InteractiveBookingWizard from "@/components/interactive/InteractiveBookingWizard";

export default function BookAppointmentPage() {
  return (
    <div className="py-16 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <InteractiveBookingWizard />
      </div>
    </div>
  );
}