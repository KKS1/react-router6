import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Expenses from './routes/expenses'
import Invoice from './routes/invoice'
import Invoices from './routes/invoices'

const PageNotFound = () => (
  <main style={{padding: '1rem'}}>
    <p>Page Not Found.</p>
  </main>
)

const SelectInvoice = () => (
  <main style={{padding: '1rem'}}>
    <p>Select an invoice</p>
  </main>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<App />}>
          <Route path={`invoices`} element={<Invoices />}>
            <Route index element={<SelectInvoice />}/>
            <Route path={`:invoiceId`} element={<Invoice />}/>
          </Route>
          <Route path={`expenses`} element={<Expenses />}/>
          <Route path={`*`} element={<PageNotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
