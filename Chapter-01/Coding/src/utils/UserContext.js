import {createContext} from 'react'


const UserContext = createContext({
    user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
    }
});

UserContext.displayName= "UserContext__Custom__Name";

export default UserContext;