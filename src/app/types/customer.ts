export interface Customer {
    id?: string,
    name: {
        first: string,
        last: string,
    },
    email: string,
}

export interface CustomerUpdate {
    id: string,
    name?: {
        first?: string,
        last?: string,
    },
    email?: string,
}