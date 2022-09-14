import { createContext, useState } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [cart, setCart] = useState([])

    return <GlobalContext.Provider value={{ user, setUser, cart, setCart }}>
        {children}
    </GlobalContext.Provider>
}

export { GlobalContextProvider, GlobalContext }