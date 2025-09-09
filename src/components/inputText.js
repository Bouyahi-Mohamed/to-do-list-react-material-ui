import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import redux state adn slice

import { useSelector } from 'react-redux';



const DemoBtn = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  width: '30%',
  height: 'auto',
  borderRadius:'none',
  paddingRight: '20px',
  marginTop: '13px',
  paddingTop: '30px',
  backgroundColor: 'black',
}));

export default function InputText() {
  const state = useSelector((state)=> state.operations)
  return (
    <Stack direction="row" alignItems="flex-end" justifyContent="center" >
      <DemoBtn  variant="elevation">
        <label style={{ color: 'grey', fontSize: '24px' }}>{state.value||'0'}</label>
        <label style={{ color: 'lightgray', fontSize: '48px' }}>{state.result||"0"}</label>
      </DemoBtn>
    </Stack>
  );
}
