"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { emptyData } from "./seed";
import { CRMData } from "./types";

type Store = { data: CRMData; setData: React.Dispatch<React.SetStateAction<CRMData>>; reset: () => void };
const CRMContext = createContext<Store | null>(null);
export function CRMProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(() => { if (typeof window === "undefined") return emptyData; const saved = localStorage.getItem("freedom-crm-live-v1"); if (saved) try { return JSON.parse(saved) as CRMData; } catch {} return emptyData; });
  useEffect(() => { localStorage.setItem("freedom-crm-live-v1", JSON.stringify(data)); }, [data]);
  return <CRMContext.Provider value={{ data, setData, reset: () => setData(emptyData) }}>{children}</CRMContext.Provider>;
}
export function useCRM() { const value = useContext(CRMContext); if (!value) throw new Error("useCRM requires CRMProvider"); return value; }
