import { createContext,useEffect,useState } from "react";
import  axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children }) =>{
    const [user , setUser ]= useState(null);

    useEffect(()=>{
        axios.get('http://localhost:3000/auth/user',{withCredentials:true})
        .then((res)=>{
            setUser(res.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    return(
        <>
            <AuthContext.Provider value={{user,setUser}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}