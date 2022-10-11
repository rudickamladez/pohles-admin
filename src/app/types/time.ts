export interface Time {
    id?: string;
    name: string;
    maxCountOfTickets: number;
}

export interface TimeUpdate {
    name?: string;
    maxCountOfTickets?: number;
}

export interface TimeForFrontend {
    id?: string;
    name: string;
    maxCountOfTickets: number;
    occupiedPositions: number;
    freePositions: number;
}

export interface TimeSum {
  free: number;
  occupied: number;
  total: number;
}