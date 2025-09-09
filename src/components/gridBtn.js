import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { 
  calcAC, calcNegate, calcPercent, calcDivision,
  calc7, calc8, calc9, calcMultiplication,
  calc4, calc5, calc6, calcSubstraction,
  calc3, calc2, calc1, calcAddition,
  calcBackspace, calc0, calcDote, calcEqual
} from "../features/operations/operationsSlice"; // <-- import your actions

function Item({ namefunction, itemColor, nameBtn }) {
  const dispatch = useDispatch();
  return (
    <Button
      sx={{
        textAlign: "center",
        p: 2,
        color: 'white',
        bgcolor: itemColor,
        fontSize: '1.2rem',
        cursor: 'pointer',
        borderRadius: 50,
        ml: 1
      }}
      onClick={() => dispatch(namefunction())} // namefunction is now a function
    >
      {nameBtn}
    </Button>
  );
}

export default function CalculatorGrid() {
  return (
    <Box sx={{ backgroundColor: "black", width: "30%", m: "0 auto", p: 1, height: '72vh' }}>
      <Grid container spacing={2} columns={12}>
        <Grid size={3}><Item itemColor={"grey"} namefunction={calcAC} nameBtn={"AC"} /></Grid>
        <Grid size={3}><Item itemColor={"grey"} namefunction={calcNegate} nameBtn={"-/+"} /></Grid>
        <Grid size={3}><Item itemColor={"grey"} namefunction={calcPercent} nameBtn={"%"} /></Grid>
        <Grid size={3}><Item itemColor={"orange"} namefunction={calcDivision} nameBtn={"/"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calc7} nameBtn={"7"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calc8} nameBtn={"8"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calc9} nameBtn={"9"} /></Grid>
        <Grid size={3}><Item itemColor={"orange"} namefunction={calcMultiplication} nameBtn={"x"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calc4} nameBtn={"4"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calc5} nameBtn={"5"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calc6} nameBtn={"6"} /></Grid>
        <Grid size={3}><Item itemColor={"orange"} namefunction={calcSubstraction} nameBtn={"-"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calc3} nameBtn={"3"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calc2} nameBtn={"2"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calc1} nameBtn={"1"} /></Grid>
        <Grid size={3}><Item itemColor={"orange"} namefunction={calcAddition} nameBtn={"+"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calcBackspace} nameBtn={"C"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calc0} nameBtn={"0"} /></Grid>
        <Grid size={3}><Item itemColor={"#424242"} namefunction={calcDote} nameBtn={"."} /></Grid>
        <Grid size={3}><Item itemColor={"orange"} namefunction={calcEqual} nameBtn={"="} /></Grid>
      </Grid>
    </Box>
  );
}

