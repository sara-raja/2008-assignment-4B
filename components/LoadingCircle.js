/*
Docs for this loading circle.

https://mui.com/material-ui/react-progress/#circular

*/

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LoadingCircle(props) {
  return <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
      direction="row"
    >
      <CircularProgress />
      <Box>
        <Typography variant="caption" component="div" color="text.secondary">
          {`${props.loadingDescription} loading`}
        </Typography>
      </Box>
    </Box>
}
