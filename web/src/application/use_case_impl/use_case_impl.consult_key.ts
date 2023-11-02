import { KeyEntity } from "app/core/entities/entity.key";
import { ConsultKeysUseCase } from "app/core/use_cases/use_case.consult_keys";

export const keys: KeyEntity[] = [
  {
    id: 1,
    room_name: "#SL001",
    status: "Disponível",
  },
  {
    id: 2,
    room_name: "#SL002",
    status: "Indisponível",
  },
  {
    id: 3,
    room_name: "#SL003",
    status: "Indisponível",
  },
  {
    id: 4,
    room_name: "#SL004",
    status: "Disponível",
  },
];

export class ConsultKeysUseCaseImpl implements ConsultKeysUseCase {
  async consult(room_name: string): KeyEntity[] | [] {
    return keys.filter(item => item.room_name.includes(room_name))
  }
}
