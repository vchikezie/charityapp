import { createContext,useState } from "react";

const AppContext = createContext()

function AppProvider({children}) {
    const [firstName,setFirstName] = useState('');
    const [uid,setUid] = useState('reddg');

    return(
        <AppContext.Provider value={{firstName,setFirstName,uid,setUid}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}