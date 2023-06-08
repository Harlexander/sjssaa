import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { api } from "./axios";
import { useRouter } from "next/router";

const Context = createContext();

export const useUser = () => useContext(Context);

export const UserProvider = ({children}) => {
    const [ token, setToken ] = useState(null);
    const [ tokenExpired, setTokenExpired] = useState(false);
    const navigate = useRouter();

    const user = useQuery(`${token}`, async () => {
        const { data } = await api.get("/user", { headers : { Authorization : `Bearer ${token}`}});

        return data;
    }, { enabled : token !== null, retry : 1 });

    useEffect(() => {
        const key = window.localStorage.getItem("token");
        key && setToken(key);

        window.addEventListener('storage', (event) => {
            const token = event.currentTarget.localStorage.token;
            if(token){
                setToken(token)
            }else{
                setToken(null);
            }
        })
    }, []);

    const storeToken = (token) => {
        window.localStorage.setItem("token", token);
        window.dispatchEvent(new Event("storage"));
        navigate.push("/dashboard");
    }

    // useEffect(() => {
    //   if(user.error){
    //     if(user.error && user.error.response.data.message === "Unauthenticated."){
    //         setTokenExpired(true);
    //         user.remove();
    //     }
    //   }
    // }, [user]);

    const signOut = async (navigate) =>  {
        await api.post("/logout", {}, { headers : { Authorization : `Bearer ${token}`}});
        user.remove();
        localStorage.removeItem("token");
        navigate("/login");
    }
    
    const data = {
        user : user.data || {},
        loading : user.isLoading,
        signOut,
        token,
        tokenExpired,
        setTokenExpired,
        storeToken
    };

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}