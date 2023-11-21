export type ServerEntity = {
    id: number;
    name: string;
    email: string;
    identification_number: string;
    password: string;
    role_id: number,
    server_status_id: number,
    role?: {
        id: number,
        role: "Administrador" | "Pedagogo"
    }
}