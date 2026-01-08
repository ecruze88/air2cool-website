export default function CTA() {
  return (
    <div className="my-8 rounded-lg border border-gray-200 p-6 text-center">
      <h2 className="text-xl font-semibold mb-2">
        Need Fast, Friendly Service?
      </h2>
      <p className="mb-4">
        Serving North Jersey. Quick response. Honest pricing.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="tel:+19735551234"
          className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Call Now
        </a>

        <a
          href="/contact"
          className="rounded border border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-50"
        >
          Request Estimate
        </a>
      </div>
    </div>
  );
}
