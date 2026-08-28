import { CRMData } from "./types";

/** A clean workspace for real business records. Database demo rows remain opt-in via `npm run db:seed`. */
export const emptyData: CRMData = {
  customers: [],
  leads: [],
  quotes: [],
  jobs: [],
  invoices: [],
  crew: [],
  tasks: [],
};
