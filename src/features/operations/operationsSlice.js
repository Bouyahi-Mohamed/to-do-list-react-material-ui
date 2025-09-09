import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : '',
    result : '' 
};

export const operationsSlice = createSlice({
    name: 'operations',
    initialState,
    reducers:{
         calc0: (state) => {
      return { ...state, value: state.value + '0' };
        },
        calc1: (state) => { 
      return { ...state, value: state.value + '1' };
        },
        calc2: (state) => {
      return { ...state, value: state.value + '2' };
        },
        calc3: (state) => {
      return { ...state, value: state.value + '3' };
        },
        calc4: (state) => {
      return { ...state, value: state.value + '4' };
        },
        calc5: (state) => {
      return { ...state, value: state.value + '5' };
        },
        calc6: (state) => {
      return { ...state, value: state.value + '6' };
        },
        calc7: (state) => {
      return { ...state, value: state.value + '7' };
        },
        calc8: (state) => {
      return { ...state, value: state.value + '8' };
        },
        calc9: (state) => {
      return { ...state, value: state.value + '9' };
        },
        calcMultiplication: (state) => {
      return { ...state, value: state.value + '*' };
        },
        calcDivision: (state) => {
      return { ...state, value: state.value + '/' };
        },
        calcAddition: (state) => {
      return { ...state, value: state.value + '+' };
        },
        calcSubstraction: (state) => {
      return { ...state, value: state.value + '-' };
        },
        calcDote: (state) => {
      return { ...state, value: state.value + '.' };
        },
        calcEqual: (state) => {
      try {
        return { ...state, result: eval(state.value) };
      } catch (error) {
        return { ...state, value: '', result: 'Error' };
      }
    },
    calcAC: (state) => {
      return { ...state, value: '', result: '' };
    },
    calcNegate: (state) => {
      return { ...state, value: state.value.startsWith('-') ?
        state.value.slice(1) :
        '-' + state.value };
    },
    calcBackspace: (state) => {
      return { ...state, value: state.value.slice(0, -1) };
    },
    calcPercent: (state) => {
      return { ...state, value: state.value + '%' };
    }
  }
})



export const { calc0, calc1, calc2, calc3, calc4, calc5, calc6, calc7, calc8, calc9, calcMultiplication, calcDivision, calcAddition, calcSubstraction, calcDote, calcEqual, calcAC, calcNegate, calcBackspace, calcPercent } = operationsSlice.actions;

export default operationsSlice.reducer;