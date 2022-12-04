import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router'

export default function Book(){
    const router = useRouter()
	const { id } = router.query

    return <>
    <Navbar/>
    <Container>
        <Grid item xs="10">
            <Typography variant="h3" gutterBottom>
                Book Detail for {id}
            </Typography>
        </Grid>
    </Container>

    
    </>
}