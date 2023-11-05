import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { mainFormRules, IConsultKeysForm } from "./form_validator";

import { useMain } from "./hook";

import { Results, ResultBox, ResultLabel } from "./styles";

import Logo from "app/assets/logo_small.svg";
import Menu from "app/assets/menu.svg";

import { Body } from "app/layout/internal/Body";

import { Form } from "app/components/FormGroup";
import { Button } from "app/components/Button";
import { Label } from "app/components/Label";
import { Input } from "app/components/Input";
import { Badge } from 'app/components/Badge';

function main() {
  const { keyList, onSubmit } = useMain();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IConsultKeysForm>({
    resolver: zodResolver(mainFormRules),
  });

  return (
    <Body.Internal>
      <Form
        style={{ width: "90%", marginTop: "3rem" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label
          style={{
            fontSize: "22px",
            marginTop: "2rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          ChaveReservada
        </Label>
        <Form.Groups>
          <Form.Group style={{ width: "100%" }}>
            <Input
              type="text"
              placeholder="Ex: SL001"
              style={{ width: "100%" }}
              {...register("roomName")}
            />
          </Form.Group>
        </Form.Groups>
        <Button type="submit" style={{ marginTop: "1rem" }}>
          Buscar chave
        </Button>
      </Form>

      <Results>
        <Label style={{ textAlign: "right", fontSize: "22px" }}>
          Chaves encontradas
        </Label>

        {keyList.map((item) => (
          <ResultBox key={item.id}>
            <ResultLabel>
              <Label style={{ fontSize: "20px" }}>{item.roomName}</Label>
              <Badge
                type="button"
                variant={
                  item.status === "Disponível" ? "BLUE_300" : "YELLOW_400"
                }
              >
                {item.status}
              </Badge>
            </ResultLabel>
          </ResultBox>
        ))}
      </Results>
    </Body.Internal>
  );
}

export default main;
