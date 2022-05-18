import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookkeeper React Router 6</h1>
        <nav style={{paddingBottom: '1rem', borderBottom: 'solid 1px'}}>
          <Link to={`/invoices`}>Invoices</Link> | {' '}
          <Link to={`/expenses`}>Expenses</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default App
