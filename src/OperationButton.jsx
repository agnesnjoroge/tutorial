import {ACTIONS} from "./App"
export function OperationButton({dispatch,operation}){
  
return(
  <button onClick={() => dispatch({type:ACTIONS.CHOOSEOPERATION,payload:{operation}})}>{operation}</button>
  )
}