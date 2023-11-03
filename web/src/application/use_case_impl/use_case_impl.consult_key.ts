import { KeyEntity } from "app/core/entities/entity.key";
import { ConsultKeysUseCase } from "app/core/use_cases/use_case.consult_keys";

export const keys: KeyEntity[] = [
  {
    id: 1,
    roomName: "#SL001",
    status: "Disponível",
  },
  {
    id: 2,
    roomName: "#SL002",
    status: "Indisponível",
  },
  {
    id: 3,
    roomName: "#SL003",
    status: "Indisponível",
  },
  {
    id: 4,
    roomName: "#SL004",
    status: "Disponível",
  },
];

export class ConsultKeysUseCaseImpl implements ConsultKeysUseCase {
  async consult(roomName: string): KeyEntity[] | [] {
    return keys.filter(item => item.roomName.includes(roomName))
  }
}
