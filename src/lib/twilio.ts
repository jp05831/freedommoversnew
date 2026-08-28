/** Twilio integration boundary. Safe no-op stubs until credentials are configured. */
export const SMS_TEMPLATES = {
  quoteSent: (name: string, url: string) => `Hi ${name}, your Freedom Moving quote is ready: ${url}`,
  jobReminder: (name: string, date: string) => `Hi ${name}, a reminder that Freedom Moving is scheduled for ${date}. Reply with any questions.`,
  reviewRequest: (name: string, url: string) => `Thanks for choosing us, ${name}! Would you share your experience? ${url}`,
};
export async function sendSMS(_to: string, _body: string) {
  // TODO: Install twilio and use TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER.
  return { sid: `stub-${Date.now()}`, status: "stubbed" as const };
}
export async function startCall(_to: string) {
  // TODO: Create a TwiML call from TWILIO_PHONE_NUMBER and persist its SID.
  return { sid: `stub-${Date.now()}`, status: "stubbed" as const };
}
export function validateTwilioSignature() {
  // TODO: Validate X-Twilio-Signature before processing inbound webhooks.
  return false;
}
