import React, { useContext, useState } from "react";

export const AppContext = React.createContext<any>("");

export function useAppContext() {
    const appContext = useContext(AppContext);
    if (!appContext) {
        throw new Error("useModalContext must be used within a AuthProvider");
    }
    return appContext;
}

export const AppContextProvider: React.FC<{ children: any }> = ({
    children,
}) => {
    const [parameters, setParameters] = useState({
        films: [],
    });

    const handleChangeParameters = (params: any) => {
        setParameters(params);
    };

    return (
        <AppContext.Provider
            value={{
                isAuth: false,
                handleChangeParameters: handleChangeParameters,
                parameters: parameters,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
