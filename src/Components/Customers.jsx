import { Typography, Button, Grid,Divider } from '@material-ui/core'
import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import AddCustomer from './AddCustomer';
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

const Customers = () => {
    const classes = useStyles()

    const [isAdding, setIsAdding] = useState(false);

    const headers = ["Company Name","Contact Name", "Email", "Contact", "Address"]

    return (
        <Grid xs={12} className={classes.root}>

            <Typography variant="h2" className={classes.header} gutterBottom>
                Customers
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
                    Add new customer
                </Button>
            </Grid>

            <Grid container>
                
                {
                    isAdding && (
                        <section>
                            <AddCustomer/>
                            <Button variant="contained" color="primary" className={classes.button} onClick={() => setIsAdding(false)}>
                                Done
                            </Button>
                        </section>
                    )
                }

            </Grid>


            <div xs={12} className={classes.list}>
                <Typography paragraph>

                    <TableComp label="addCustomers" customers={window.$customers} headers={headers}/>
                </Typography>
            </div>



            
            
        </Grid>
    )
}

export default Customers
