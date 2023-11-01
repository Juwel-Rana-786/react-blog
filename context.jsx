import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";


// ^ create a context 
const AppContext = createContext();



//! initialState
const initialState = {
    name: "",
    image: "",
    services: []
}











// ^ provider 
/* eslint-disable react/prop-types */
const AppProvider = ({ children }) => {
    // !reducer hook 
    const [state, dispatch] = useReducer(reducer, initialState)

    // !dispatch

    //home
    const ChangeHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Home Page",
                image: "./image/hero.svg"
            }

        })
    }
    //about
    const ChangeAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "About Page",
                image: "./image/about1.svg"
            }

        })
    }
    // api 
    const API = "http://localhost:3000/service";

    const getServices = async (url) => {
        try {
            const res = await axios.get(url)
            const data = await res.data;
            dispatch({ type: "GET_SERVICES", payload: data })


        } catch (error) {
            console.log(error.message)
        }
    }

    // @ api call 



    useEffect(() => {
        getServices(API)
    }, [])




    return <AppContext.Provider value={{ ...state, ChangeHomePage, ChangeAboutPage }}>{children}</AppContext.Provider>
}



// @use context with custom hook

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {
    // eslint-disable-next-line react-refresh/only-export-components
    AppContext, AppProvider, useGlobalContext
};



// got to main.js input <AppProvider><App/></AppProvider>
// create reducer
// use context as custom hook  -- use values in component   const anyName = useAnyNameContext();