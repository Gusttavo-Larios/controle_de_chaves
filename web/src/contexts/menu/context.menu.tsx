import { createContext, ReactNode, useState } from "react";

type IContext = {
    isVisible: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

export const MenuContext = createContext<IContext>({
    isVisible: false,
    openMenu: () => { },
    closeMenu: () => { }
});


export function MenuContextProvider({ children }: { children: ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);

    function openMenu(): void {
        setIsVisible(true)
    };

    function closeMenu(): void {
        setIsVisible(false)
    }

    return (
        <MenuContext.Provider
            value={{
                isVisible,
                openMenu,
                closeMenu
            }}
        >
            {children}
        </MenuContext.Provider>
    );
}
