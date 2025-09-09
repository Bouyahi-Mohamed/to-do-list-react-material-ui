import SimpleContainer from "./components/container"
import InputText from "./components/inputText"
import CalculatorGrid from "./components/gridBtn";
import { useReducer, useState} from "react";
import reducer from "./reducer/resulteReducer";





function App() {
  const [state, dispatch] = useReducer(reducer, { value: '', result: '' });



  return (
      <SimpleContainer>
        <InputText value={state.value} dispatch={dispatch} result={state.result} />
        <CalculatorGrid dispatch={dispatch}  />
      </SimpleContainer>
  );
}

export default App;
