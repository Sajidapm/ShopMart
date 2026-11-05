import {createContext} from "react";
export const AuthContext = createContext();
import axios from 'axios'

const authProvider = ({children})=>{
    async function loginUser(username,password){
        try{
            const response = await axios.post("http://localhost:3000/api/auth/login",{
                username,
                password,
                token
        
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default authProvider;