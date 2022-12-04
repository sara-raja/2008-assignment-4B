import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Button from '@mui/material/Button';

import { useRouter } from 'next/router'

export default function BooksTable(props) {
  const router = useRouter()

  const navigateToBookDetails = () => {
    router.push(`/book/${props.id}`)
  }
    return <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Books in all Languages</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.books.map((book,index)=> {
          // console.log(book.key)
            return <TableRow
              key={index}
              id={book.key}
            >
               <TableCell>
                  {book.title}
              </TableCell>
              <TableCell>
                <Button onClick={navigateToBookDetails}>
                  Details
                </Button>
              </TableCell>
              
            </TableRow>
          })}
      </TableBody>
    </Table>
  </TableContainer>
}