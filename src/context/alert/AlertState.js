import React, { useReducer } from "react"
import AlertContext from "./AlertContext"
import AlerReducer from "./AlertReducer"
import { SET_ALERT, REMOVE_ALERT } from "../types"

const AlertState = props => {
  const initialState = null

  const [state, dispatch] = useReducer(AlerReducer, initialState)

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    })
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
