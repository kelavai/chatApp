import React, { useState } from "react";

export const AppContext = React.createContext("test");

export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
    const [ username, setUsername ] = useState('');
    const [ avatarIndex, setAvatarIndex ] = useState(0)

    return (
        <AppContext.Provider value={{
            username: username, 
            setUsername: setUsername,
            avatarIndex: avatarIndex,
            setAvatarIndex: setAvatarIndex,
        }}>
            {props.children}
        </AppContext.Provider>

    )
} 

