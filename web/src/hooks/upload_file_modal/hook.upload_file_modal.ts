import { useContext } from "react"

import { UploadFileModalContext } from 'app/contexts/upload_file_modal/context.upload_file_modal'

export function useUploadFileModal() {

    const context = useContext(UploadFileModalContext)

    return {
        ...context
    }
}