export type LeadStatus = "New" | "Contacted" | "Quoted" | "Won" | "Lost";
export type JobStatus = "Scheduled" | "In Progress" | "Completed" | "Cancelled";
export type QuoteStatus = "Draft" | "Sent" | "Accepted" | "Declined";
export type InvoiceStatus = "Unpaid" | "Partial" | "Paid";

export interface Customer { id: string; name: string; phone: string; email: string; addresses: string[]; source: string; notes: string; createdAt: string }
export interface Lead { id: string; customerId: string; status: LeadStatus; moveDate: string; originAddress: string; destinationAddress: string; estimatedRooms: number; estimatedSqft?: number; notes: string; source: string }
export interface Quote { id: string; leadId: string; quoteType: "Hourly" | "Flat" | "Weight-based"; hourlyRate: number; estimatedHours: number; mileageFee: number; estimatedTotal: number; crewSizeRecommended: number; truckSize: string; sentAt?: string; status: QuoteStatus }
export interface Job { id: string; quoteId: string; scheduledDate: string; startTime: string; crewAssigned: string[]; truckAssigned: string; status: JobStatus; actualHours?: number; inventoryNotes: string; damageNotes: string; checkpoints: string[]; photos: string[] }
export interface LineItem { id: string; description: string; type: "Labor" | "Mileage" | "Materials" | "Tips" | "Travel fee"; amount: number }
export interface Invoice { id: string; jobId: string; lineItems: LineItem[]; subtotal: number; tax: number; total: number; amountPaid: number; paymentMethod: string; status: InvoiceStatus }
export interface CrewMember { id: string; name: string; phone: string; role: "Lead" | "Mover"; active: boolean }
export interface Task { id: string; title: string; dueAt: string; customerId: string; completed: boolean }
export interface CRMData { customers: Customer[]; leads: Lead[]; quotes: Quote[]; jobs: Job[]; invoices: Invoice[]; crew: CrewMember[]; tasks: Task[] }
