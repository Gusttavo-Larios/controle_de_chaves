import { useForm, SubmitHandler } from "react-hook-form";
// import { useNavigate } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod";

import { useAdmKey } from './hook'
import { admKeyFormRules } from './form_validator'

import { useUploadFileModal } from "app/hooks/upload_file_modal/hook.upload_file_modal"

import { ContainerCards } from './styles';

import Logo from 'app/assets/logo_small.svg';
import Menu from 'app/assets/menu.svg';
import Plus from 'app/assets/plus.svg';

import { Body } from 'app/layout/internal/Body'

import { Form } from 'app/components/FormGroup';
import { Button } from 'app/components/Button';
import { Label } from 'app/components/Label';
import { Title } from 'app/components/Title';
import { Input } from 'app/components/Input';

import { Key } from './components/Key'

function mainAdmKeys() {
    const { openUploadFileModal } = useUploadFileModal()
    const { keyList, enableKey, disableKey, onSubmit, addKeys } = useAdmKey()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IConsultKeysForm>({
        resolver: zodResolver(admKeyFormRules),
    });

    return (
        <Body.Internal title="Chaves">

            <Form
                style={{ width: '100%', marginTop: '1rem' }}
                onSubmit={handleSubmit(onSubmit)}>
                <Form.Groups>
                    <Form.Group style={{ width: '100%' }}>
                        <Input type="text" placeholder="Ex: SL001" style={{ width: '100%' }} {...register('room_name')} />
                    </Form.Group>
                </Form.Groups>
                <Button type="submit" style={{ marginTop: "1rem" }}>
                    Buscar chave
                </Button>
            </Form>

            <div style={{
                width: "100%",

                marginTop: "5.6rem",
                marginBottom: "1.4rem",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Title.H2>Chaves encontradas</Title.H2>
                <Button type="button" variant="GREEN_400"
                    onClick={() => {
                        openUploadFileModal({
                            title: "Novas chaves",
                            actions: {
                                confirm: addKeys
                            }
                        })
                    }}
                >
                    Adicionar Chave
                    <img src={Plus} alt="Ícone de somar." />
                </Button>
            </div>

            <ContainerCards>
                {
                    keyList.map(item => <Key
                        key={item.id}
                        enableKey={enableKey}
                        disableKey={disableKey}
                        {...item}
                    />
                    )
                }
            </ContainerCards>
        </Body.Internal>
    );
}

export default mainAdmKeys;