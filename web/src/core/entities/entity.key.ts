import { HistoricEntity } from "./entity.historic";

export type KeyEntity = {
    id: number;
    key_status_id: number;
    room_name: string;
    historics?: Array<HistoricEntity>;
    key_status?: {
        id: number;
        status: "Disponível" | "Indisponível";
    }
}