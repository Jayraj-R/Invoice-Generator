import { Typography, Button, Grid,Divider } from '@material-ui/core'
import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import AddInvoice from './AddInvoice';
import TableComp from './TableComp';

const useStyles = makeStyles({
    root:{
        margin:0,
        padding:0
    },
    header:{
        textAlign:"left"
    },
    list:{
    }
})

const InvoiceItems = () => {
    const classes = useStyles()

    const [isAdding, setIsAdding] = useState(false);

    const headers = ["Invoice Item","Rate (Rs/hr)", "Working hours", "Total Cost"]

    return (
        <Grid xs={12} className={classes.root}>

            <Typography variant="h2" className={classes.header} gutterBottom>
                Invoice Items
            </Typography>
            <Divider style={{marginBottom:40}} gutterBottom/>
            
            <Grid container justify="left">
                <Button variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<CreateIcon />}
                    onClick={()=>setIsAdding(true)}
                    gutterBottom
                >
                    Add new invoice item
                </Button>
            </Grid>

            <Grid container>
                
                {
                    isAdding && (
                        <section>
                            <AddInvoice/>
                            <Button variant="contained" color="primary" className={classes.button} onClick={() => setIsAdding(false)}>
                                Done
                            </Button>
                        </section>
                    )
                }

            </Grid>


            <div xs={12} className={classes.list}>
                <Typography paragraph>

                    <TableComp label="invoiceItems" invoices={window.$invoiceItems} headers={headers}/>
                </Typography>
            </div>



            
            
        </Grid>
    )
}

export default InvoiceItems
