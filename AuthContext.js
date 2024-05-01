import { createContext } from "react";

const AuthContext = createContext({user: null, data: null});

export { AuthContext };