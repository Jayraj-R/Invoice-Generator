import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    top:"5em",
    width:"60%",
    position:"relative",
    left:"50%",
    transform:"translateX(-50%)"
  },
  headers:{
    background:"orange",
  },
  cell:{
    background:"pink",
    width:"20%"
  }
});


export default function TableComp(props) {
  const classes = useStyles();

  const tableContent = () => {
    if(props.label==="addCustomers"){
      return (
        props.customers.map(customer => {
          return(
            <TableRow key={customer.compName}>
              <TableCell align="right" component="th" scope="row">
                {customer.compName}
              </TableCell>
              <TableCell align="right">{customer.contFname} {customer.contLname}</TableCell>
              <TableCell align="right">{customer.emailAdd}</TableCell>
              <TableCell align="right">{customer.contNum}</TableCell>
              <TableCell align="right">{customer.addr},{customer.town}-{customer.post}</TableCell>
            </TableRow>
          )
        })
        )
    }
    if(props.label==="invoiceItems"){
      return (
        props.invoices.map(invoice => {
          return(
            <TableRow key={invoice.item}>
              <TableCell align="right" component="th" scope="row">
                {invoice.item}
              </TableCell>
              <TableCell align="right">{invoice.rate}</TableCell>
              <TableCell align="right">{invoice.timeSpent}</TableCell>
              <TableCell align="right">{invoice.total}</TableCell>
            </TableRow>
          )
        })
      )
    }
      
    }
  
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>

          <TableRow className={classes.headers}>
            {
                props.headers.map(header => {
                  return(
                      <TableCell className={classes.cell} align="right">{header}</TableCell>
                  )
                })
              }
            </TableRow>
        </TableHead>
        <TableBody>
          {
            tableContent()
          }

        </TableBody>
      </Table>
    </TableContainer>
  );
}
