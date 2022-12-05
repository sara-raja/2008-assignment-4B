import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import LoadingCircle from '../../components/LoadingCircle';
import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getBookDetails } from '../../utils/api/books';

export default function Book(){
    const [bookDetails, setBookDetails] = useState()

    const router = useRouter()
	const { id } = router.query

    useEffect(()=>{
        getBookDetails(id).then((data)=>{
            console.log("First")
            console.log(data)

            setBookDetails(data)
            
            console.log("Second")
            console.log(data)
        })
    }, [id])

    return <>
    <Navbar/>
    {!bookDetails?
        <LoadingCircle/>
    :
        <Container>
            <Grid item xs="10">
                <Typography variant="h3" gutterBottom>
                {`${bookDetails.title}`}
                </Typography>
                <Typography variant="h5">Covers</Typography>
            </Grid>
            <Grid item xs="4">
                cycle through covers here..
            </Grid>
        </Container>  
    }
    </>
    
}