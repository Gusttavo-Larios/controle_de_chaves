import { Label } from "app/components/Label";
import { Container, Header } from "./styles";

import LogoMobile from "app/assets/logo_large.svg";
import { Form } from "app/components/FormGroup";
import { Input } from "app/components/Input";
import { Button } from "app/components/Button";

function Login() {
  return (
    <Container>
      <Header>
        <img className="LogoMobile" src={LogoMobile} alt="" />
      </Header>
      <Form>
        <Form.Groups>
          <Form.Group>
            <Label>E-mail</Label>
            <Input type="email" placeholder="ex: nome.sobrenome@ifmt.edu.br" />
          </Form.Group>
          <Form.Group>
            <Label>Senha</Label>
            <Input type="password" placeholder="******" />
          </Form.Group>
        </Form.Groups>

        {/* <Submit>Realizar Login</Submit> */}
        <Button type="submit" style={{ marginTop: "4rem" }}>
          Realizar Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
