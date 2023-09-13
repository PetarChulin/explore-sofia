import { useContext, forwardRef } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ConfirmContext } from '../store/confirm-context';
import { TextContext } from '../store/text-ctx';
import { SeverityContext } from '../store/severity-ctx';
import { InputContext } from '../store/input-context';


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Confirmation() {

  const {open, setOpen} = useContext(ConfirmContext);
  // const {text, setText} = useContext(TextContext);
  // const {severity, setSeverity} = useContext(SeverityContext);

  const {text, setText, severity, setSeverity} = useContext(InputContext);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setText("");
    setSeverity("");
    console.log(text);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
     
      <Snackbar open={open} autoHideDuration={4000}  onClose={handleClose} anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}>
        <Alert style={{textShadow: "1px 2px 3px black"}}  onClose={handleClose} severity={severity} sx={{ width: '100%' }}>{text}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert> */}
      {/* <Alert severity="success">You register successfully!</Alert> */}
    </Stack>
  );
}