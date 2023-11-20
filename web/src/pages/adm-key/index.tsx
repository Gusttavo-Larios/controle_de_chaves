import { useForm, SubmitHandler } from "react-hook-form";
// import { useNavigate } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod";

import { useAdmKey } from './hook'
import { admKeyFormRules } from './form_validator'

import { Results } from './styles';

import Logo from 'app/assets/logo_small.svg';
import Menu from 'app/assets/menu.svg';
import Plus from 'app/assets/plus.svg';

import { Body } from 'app/layout/internal/Body'

import { Form } from 'app/components/FormGroup';
import { Button } from 'app/components/Button';
import { Label } from 'app/components/Label';
import { Input } from 'app/components/Input';

import { Key } from './components/Key'

function mainAdmKeys() {
    const { keyList, enableKey, disableKey, onSubmit } = useAdmKey()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IConsultKeysForm>({
        resolver: zodResolver(admKeyFormRules),
    });

    return (
        <Body.Internal>

            <Form
                style={{ width: '90%', marginTop: '1rem' }}
                onSubmit={handleSubmit(onSubmit)}>
                <Label style={{ fontSize: '22px', marginTop: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Chaves</Label>
                <Form.Groups>
                    <Form.Group style={{ width: '100%' }}>
                        <Input type="text" placeholder="Ex: SL001" style={{ width: '100%' }} {...register('room_name')} />
                    </Form.Group>
                </Form.Groups>
                <Button type="submit" style={{ marginTop: "1rem" }}>
                    Buscar chave
                </Button>
            </Form>

            <Results>
                <Label style={{ textAlign: 'right', fontSize: '22px' }}>Chaves encontradas</Label>

                {
                    keyList.map(item => <Key
                        key={item.id}
                        enableKey={enableKey}
                        disableKey={disableKey}
                        {...item}
                    />
                    )
                }
            </Results>
        </Body.Internal>
    );
}

export default mainAdmKeys;