import { useLocation, useNavigate, useParams } from "react-router-dom"
import { deleteInvoice, getInvoice } from "../data"

export default function Invoice () {
  const navigate = useNavigate()
  const location = useLocation()
  const {invoiceId} = useParams()
  const {number, name, amount, due} = getInvoice(parseInt(invoiceId, 10))
  return (
    <main style={{padding: '1rem 0'}}>
      <h2>Total Due: {amount}</h2>
      <p>
        {name}: {number}
      </p>
      <p>Due Date: {due}</p>
      <p>
        <button onClick={e => {
          deleteInvoice(number);
          navigate(`/invoices${location.search}`)
        }}>Delete</button>
      </p>
    </main>
  )
}