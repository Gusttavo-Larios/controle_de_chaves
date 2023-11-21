export type ServerEntity = {
    id: number;
    name: string;
    email: string;
    identification_number: string;
    password: string;
    role_id: number,
    server_status_id: number,
    server_status?: ServerStatusEntity;
    role?: {
        id: number,
        role: "Administrador" | "Pedagogo"
    }
}

type ServerStatusEntity = {
    id: number,
    status: "Ativo" | "Desativado"
}