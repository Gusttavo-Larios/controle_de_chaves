import { createContext, ReactNode, useState } from "react";

type TData = {
  data: {
    title: string;
    actions?: {
      confirm: (file: File) => {};
      refuse: () => {};
    };
  };
}
type TContextValue = {
  openUploadFileModal: (newContext: TData["data"]) => void;
  closeUploadFileModal: () => void;
};

export const UploadFileModalContext = createContext<TContextValue & TData>({
  data: {
    title: "",
  },
  openUploadFileModal: () => { },
  closeUploadFileModal: () => { },
});

const INITIAL_STATE = {
  title: "",
}

export function UploadFileModalContextProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(INITIAL_STATE);

  function openUploadFileModal(newContext: TData["data"]): void {
    console.log(newContext)
    setData(newContext)
  };

  function closeUploadFileModal(): void {
    setData(INITIAL_STATE)
  }

  return (
    <UploadFileModalContext.Provider
      value={{
        data,
        openUploadFileModal,
        closeUploadFileModal
      }}
    >
      {children}
    </UploadFileModalContext.Provider>
  );
}
