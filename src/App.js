import './App.css';
import HookUseCallBack from './hooks/HookUseCallBack';
import HookUseReducer from './hooks/HookUseReducer';
import { HookUseRef } from './hooks/HookUseRef';


function App() {
  return (
    <div className="App">
      <HookUseReducer/>
      <hr></hr>
      <HookUseCallBack />
      <hr></hr>
      <HookUseRef />
    </div>
  );
}

export default App;
