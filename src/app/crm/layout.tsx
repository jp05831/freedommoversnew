import { CRMProvider } from "@/lib/crm/store";
export const metadata = { title: "CRM | Freedom Moving", robots: { index: false, follow: false } };
export default function CRMLayout({ children }: { children: React.ReactNode }) { return <CRMProvider>{children}</CRMProvider>; }
