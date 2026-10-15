"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SharedQuote from "@/components/crm/SharedQuote";

function QuoteContent() {
  const params = useSearchParams();
  return <SharedQuote id={params.get("id") ?? ""} />;
}

export default function QuotePage() {
  return (
    <Suspense fallback={<p className="p-8 text-center">Loading quote…</p>}>
      <QuoteContent />
    </Suspense>
  );
}
