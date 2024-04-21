// import { createContext, useEffect, useReducer, useState } from "react";

// export const AuthContext = createContext();

// export const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { user: action.payload };
//     case "LOGOUT":
//       return { user: null };
//     default:
//       return state;
//   }
// };

// const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//   });

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       dispatch({ type: "LOGIN", payload: user });
//     }
//   }, []);

//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     // Validate token with the server and set isAuthenticated accordingly
//     setIsAuthenticated(!!token);
//   }, []);

//   // console.log('AuthContext State: ', state);

//   return (
//     <AuthContext.Provider value={{ ...state, isAuthenticated, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;


import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) =>{
    switch(action.type){
        case 'LOGIN':
            return{ user: action.payload};
        case 'LOGOUT':
            return{user: null} ;
            default:
                return state   
    }
};

const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });
    
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch({type: "LOGIN", payload: user});
        }
    }, [])
    
    // console.log('AuthContext State: ', state);

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
