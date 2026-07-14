"use client";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LeadCapture({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-[340px] rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="mb-2 text-2xl font-bold">
          Free Consultation
        </h2>

        <p className="mb-5 text-gray-600">
          Leave your details and our team will contact you.
        </p>

        <div className="space-y-3">

          <input
            placeholder="Full Name"
            className="w-full rounded-xl border p-3"
          />

          <input
            placeholder="Company Name"
            className="w-full rounded-xl border p-3"
          />

          <input
            placeholder="Email Address"
            className="w-full rounded-xl border p-3"
          />

          <input
            placeholder="Phone Number"
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div className="mt-5 flex gap-3">

          <button
            onClick={onClose}
            className="flex-1 rounded-xl border py-3"
          >
            Cancel
          </button>

          <button
            className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white"
          >
            Submit
          </button>

        </div>

      </div>

    </div>
  );
}