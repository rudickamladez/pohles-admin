import { Time } from "./time";
import { Year } from "./year";

enum ticketStatus {
    unpaid = "unpaid",
    paid = "paid",
    cancelled = "cancelled",
}

interface TicketStatusChangeSchema {
    date: Date;
    status: ticketStatus;
}

export interface Ticket {
    id?: string;
    status: ticketStatus;
    statusChanges: TicketStatusChangeSchema[];
    name: {
        first: string;
        last: string;
    };
    email: string;
    year: Year;
    time: Time;
    date: Date;
}

export interface TicketUpdate {
    status?: ticketStatus;
    name?: {
        first?: string;
        last?: string;
    };
    email?: string;
    year?: Year | string;
    time?: Time | string;
  }
  
  export interface TicketEasy {
    name: {
        first: string;
        last: string;
    };
    email: string;
    time: string | Time;
  }