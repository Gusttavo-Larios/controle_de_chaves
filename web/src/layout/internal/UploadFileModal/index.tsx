import { useState } from "react";
import Dropzone from "react-dropzone";

import { useUploadFileModal } from "app/hooks/upload_file_modal/hook.upload_file_modal";

import { Modal } from "app/components/Modal";
import { Title } from "app/components/Title";
import { Flex } from "app/components/Flex";
import { Button } from "app/components/Button";
import { StyledDropzoneArea } from "./styled";

export function UploadFileModal() {

    const [file, setFile] = useState<File | null>(null)

    const {
        data,
        closeUploadFileModal
    } = useUploadFileModal()

    const isVisible = data.title !== ""
    const hasFile = file !== null

    const submitButtonIsDisabled = file === null

    function confirm(): void {
        data.actions?.confirm(file as File)
        setFile(null)
        closeUploadFileModal()
    }

    function refuse(): void {
        if (data.actions && data.actions.refuse) {
            data.actions?.refuse()
        }
        setFile(null)
        closeUploadFileModal()
    }

    return <Modal isVisible={isVisible}>
        <Title.H2>
            {data.title}
        </Title.H2>
        <StyledDropzoneArea hasFile={hasFile}>
            {hasFile ?
                <button variant="RED_100" onClick={() => setFile(null)}>
                    Remover arquivo
                </button>
                :
                <Dropzone onDrop={acceptedFiles => setFile(acceptedFiles[0])}>
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()} hasFile={hasFile}>
                            <input {...getInputProps()} />
                            Clique ou arraste até aqui
                        </div>
                    )}
                </Dropzone>
            }
        </StyledDropzoneArea>
        <Flex.Row
            style={{
                width: "100%",
                justifyContent: "space-between"
            }}
        >
            <Button
                type="button"
                variant="BLUE_300"
                style={{
                    width: "48%",
                }}
                disabled={submitButtonIsDisabled}
                onClick={confirm}
            >
                Enviar
            </Button>
            <Button
                type="button"
                variant="RED_100"
                style={{
                    width: "48%",
                }}
                onClick={refuse}
            >
                Fechar
            </Button>
        </Flex.Row>
    </Modal >
}