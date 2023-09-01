import { createContext, useState } from "react";

const Authcontext = createContext({});

export const AuthProvider = ({ Children }) => {

    const [auth, setAuth] = useState({});

    return (

        <Authcontext.Provider value={{auth, setAuth }}>
            {Children}
        </Authcontext.Provider>
    )
}

export default Authcontext;