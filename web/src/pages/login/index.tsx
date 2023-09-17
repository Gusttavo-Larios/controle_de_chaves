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
      <Form style={{ width: '90%'}}>
        <Form.Groups>
          <Form.Group style={{ width: '100%'}}>
            <Label>E-mail</Label>
            <Input type="email" placeholder="ex: nome.sobrenome@ifmt.edu.br" style={{ width: '100%'}}/>
          </Form.Group>
          <Form.Group style={{ width: '100%'}}>
            <Label>Senha</Label>
            <Input type="password" placeholder="******" style={{ width: '100%'}}/>
          </Form.Group>
        </Form.Groups>

        <Button type="submit" style={{ marginTop: "4rem" }}>
          Realizar Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
