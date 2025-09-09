  import Box from "@mui/material/Box";
  import Grid from "@mui/material/Grid";
  import Button from "@mui/material/Button";

  function Item({ children , itemColor, dispatch}) {
    return (
      <Button sx={{ textAlign: "center", p: 2, color:'white',bgcolor:itemColor, fontSize: '1.2rem', cursor: 'pointer' , borderRadius:50, ml: 1}} onClick={() => dispatch({ type: children })}>
        {children}
      </Button>
    );
  }

  export default function CalculatorGrid({ dispatch}) {
    return (
      <Box sx={{ backgroundColor: "black", width: "30%", m: "0 auto", p: 1, height:'72vh' }}>
        <Grid container spacing={2} columns={12}>
          {/* Row 1 */}
          <Grid size={3} ><Item itemColor={"grey"} dispatch={dispatch}>AC</Item></Grid>
          <Grid size={3} ><Item itemColor={"grey"} dispatch={dispatch}>-/+</Item></Grid>
          <Grid size={3} ><Item itemColor={"grey"} dispatch={dispatch}>%</Item></Grid>
          <Grid size={3} ><Item itemColor={"orange"} dispatch={dispatch}>/</Item></Grid>

          {/* Row 2 */}
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>7</Item></Grid>
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>8</Item></Grid>
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>9</Item></Grid>
          <Grid size={3} ><Item itemColor={"orange"} dispatch={dispatch}>x</Item></Grid>

          {/* Row 3 */}
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>4</Item></Grid>
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>5</Item></Grid>
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>6</Item></Grid>
          <Grid size={3} ><Item itemColor={"orange"} dispatch={dispatch}>-</Item></Grid>
          {/* Row 4 */}

          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>3</Item></Grid>
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>2</Item></Grid>
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>1</Item></Grid>
          <Grid size={3} ><Item itemColor={"orange"} dispatch={dispatch}>+</Item></Grid>

          {/* Row 3 */}
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>c</Item></Grid>
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>0</Item></Grid>
          <Grid size={3} ><Item itemColor={"#424242"} dispatch={dispatch}>.</Item></Grid>
          <Grid size={3} ><Item itemColor={"orange"} dispatch={dispatch}>=</Item></Grid>
</Grid>
</Box>
    )};