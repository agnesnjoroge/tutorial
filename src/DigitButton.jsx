import {ACTIONS} from "./App"
export function DigitButton({dispatch,digit}){
  
return(
  <button onClick={() => dispatch({type:ACTIONS.ADDDIGIT,payload:{digit}})}>{digit}</button>
  )
}