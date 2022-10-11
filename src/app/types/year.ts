import { Time } from "./time";

enum yearStatus {
    active = "active",
    prepared = "prepared",
    archived = "archived",
}

export interface Year {
    id?: string;
    name: string;
    status: yearStatus;
    endOfReservations: Date;
}

export interface YearUpdate {
    name: string;
    status: yearStatus;
    times: string[] | Time[];
    endOfReservations: Date;
}