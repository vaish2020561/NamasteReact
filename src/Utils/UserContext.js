import { createContext } from "react/cjs/react.production.min";

const UserContext = createContext({
    loggedIn:"default User",
});

export default UserContext;