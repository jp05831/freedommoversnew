# Freedom Moving CRM

## Run the CRM

```bash
npm install
npm run dev
```

Open `http://localhost:3000/crm`. The CRM starts as a clean workspace and persists records entered through the UI in browser local storage. Start with **New lead**, build and accept a quote, then schedule the job on the calendar. The public lead form is at `/estimate`, and quote share pages use `/quote/:id`.

## Connect Supabase Postgres

1. Create a Supabase project and copy `.env.example` to `.env.local`.
2. Add the pooled `DATABASE_URL`, direct `DIRECT_URL`, project URL, and anon key.
3. Run `npm run db:generate`, `npm run db:migrate`, and `npm run db:seed`.
4. In Supabase Auth, enable email/password and create the initial owner matching the seeded/user profile UUID (or replace that profile ID).
5. Replace the demo store in `src/lib/crm/store.tsx` with server actions backed by Prisma before production use. The organization-scoped schema and Supabase client factories are already provided for that boundary.

## Production integrations

- Configure the environment variables in Vercel and deploy as a normal Next.js server app.
- Create a private Supabase Storage bucket for job photos.
- Complete the explicit TODOs in `src/lib/twilio.ts`, then expose signature-validated inbound webhook routes for calls and messages.
- Add a Vercel Cron route to create/send reminders and review requests; the demo currently creates the review task when an invoice is marked paid.
