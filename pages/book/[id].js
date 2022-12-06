import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
        if(!id){
            return
        }
        getBookDetails(id).then((data)=>{
            console.log(data)
            setBookDetails(data)
        })
    }, [id])

    return <>
    <Navbar/>
    {!bookDetails?
        <LoadingCircle
        loadingDescription="Book data"
        />
    :
        <Container>
            <Grid item xs="12">
                <Typography variant="h3" gutterBottom align="center">
                {`${bookDetails.title}`}
                </Typography>
                <Typography variant="h5" align="center" gutterBottom>Covers</Typography>
            </Grid>
            <Grid>
                {!bookDetails.covers?
                <Typography variant='body1' align="center">
                    No book covers
                </Typography>
                :
                // console.log(bookDetails.covers)
                <ImageList cols={3}>
                    {bookDetails.covers.map((coverId)=>( 
                    <ImageListItem key={coverId.img}>
                    <img
                      src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
                      alt={bookDetails.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
                }
            </Grid>
        </Container>  
    }
    </>
    
}