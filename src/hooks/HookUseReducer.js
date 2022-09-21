import { useReducer, useEffect, useRef } from 'react';

// The initial state is the value the state is initialized with
const initialState = {
    isRunning: false,
    time: 0
  };

const HookUseReducer = () => {
    // The dispatch is a special function that dispatches an action object.
    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef(0);
    useEffect(() => {
      if (!state.isRunning) { 
        return; 
      }
      idRef.current = setInterval(() => dispatch({type: 'tick'}), 1000);
      return () => {
        clearInterval(idRef.current);
        idRef.current = 0;
      };
    }, [state.isRunning]);
    

  return (
    <div>
    <b>UseReducer</b> <br/><br/>
    {state.time}s
    <button onClick={() => dispatch({ type: 'start' })}>
      Start
    </button>
    <button onClick={() => dispatch({ type: 'stop' })}>
      Stop
    </button>
    <button onClick={() => dispatch({ type: 'reset' })}>
      Reset
    </button>
  </div>
  )
}

// The reducer is a pure function that accepts 2 parameters: the current state and an action object.
function reducer(state, action) {
    switch (action.type) {
      case "start":
        return { ...state, isRunning: true };
      case "stop":
        return { ...state, isRunning: false };
      case "reset":
        return { isRunning: false, time: 0 };
      case "tick":
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  }

export default HookUseReducer