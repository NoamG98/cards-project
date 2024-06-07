import {
    Avatar,
    Box,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  
  export default function OneCardData({ cardData }) {
  
    return (
      <Box>
        <Avatar src={cardData.image.url} alt={cardData.image.alt} />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Title:<Typography>{cardData.title}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Subtitle:<Typography>{cardData.subtitle}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Email:<Typography>{cardData.email}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Phone:<Typography>{cardData.phone}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Website:<Typography>{cardData.web}</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    );
  }