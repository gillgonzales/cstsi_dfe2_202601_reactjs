/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import { detectThemeChanges, getTheme } from "../utils/themeWindow";


export const changeContext = createContext({
  isThemeLight:true,
  changeTheme:()=>{}
})

export function ChangeThemeProvider({children}){

  const [isThemeLight, setIsThemeLight] = useState(getTheme);
     
  const changeTheme = ()=>setIsThemeLight(!isThemeLight)

  useEffect(()=>{
    detectThemeChanges(setIsThemeLight)
  },[])
  
  return <changeContext.Provider value={{
      changeTheme,
      isThemeLight
    }}>
      {children}
  </changeContext.Provider>;
}