export type HistoricEntity = {
    id: number;
    key_id: number;
    returned_at: Date;
    server_id: number;
    withdrawal_at: Date;
    server: {
        id: number;
        role_id: number;
        email: string;
        identification_number: string;
        name: string;
        server_status_id: number;
    }
}