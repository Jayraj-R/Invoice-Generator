import React from 'react'

const ManageInvoices = () => {
    return (
        <div>
            Manage Invoice
            {
            window.$customers.map(customer => {
              return(
                <div key={customer.compName}>
                  <div align="right" component="th" scope="row">
                    {customer.compName}
                  </div>
                  <div align="right">{customer.contFname} {customer.contLname}</div>
                  <div align="right">{customer.emailAdd}</div>
                  <div align="right">{customer.contNum}</div>
                  <div align="right">{customer.addr},{customer.town}-{customer.post}</div>
                </div>
              )
            })
          }

        {
            window.$invoiceItems.map(invoice => {
              return(
                <div key={invoice.item}>
                  <div align="right" component="th" scope="row">
                    {invoice.item}
                  </div>
                  <div align="right">{invoice.rate} {invoice.contLname}</div>
                  <div align="right">{invoice.timeSpent}</div>
                  <div align="right">{invoice.total}</div>
                </div>
              )
            })
          }
        </div>
    )
}

export default ManageInvoices


