import { createContext, ReactNode, useState } from "react";

type TData = {
  data: {
    title: string;
    message: string;
    is_dialog: boolean;
    actions?: {
      confirm?: () => {};
      refuse?: () => {};
    };
  };
}
type TContextValue = {
  openAlert: (newContext: TData["data"]) => void;
  closeAlert: () => void;
};

export const AlertContext = createContext<TContextValue & TData>({
  data: {
    title: "",
    message: "",
    is_dialog: false,
  },
  openAlert: () => { },
  closeAlert: () => { },
});

const INITIAL_STATE = {
  title: "",
  message: "",
  is_dialog: false,
}

export function AlertContextProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(INITIAL_STATE);

  function openAlert(newContext: TData["data"]): void {
    console.log(newContext)
    setData(newContext)
  };

  function closeAlert(): void {
    setData(INITIAL_STATE)
  }

  return (
    <AlertContext.Provider
      value={{
        data,
        openAlert,
        closeAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
