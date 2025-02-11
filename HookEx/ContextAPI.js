import React, { createContext } from 'react'

export const GlobalDataProvider = createContext();

const ContextAPI = (props) => {
  return <GlobalDataProvider value="MRU">
    {props.children}
  </GlobalDataProvider>
}

export default ContextAPI