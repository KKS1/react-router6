import { Link, NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

const QueryNavLink = ({to, ...rest}) => {
  const location = useLocation()
  return (
    <NavLink to={to + location.search} {...rest}/>
  )
}

export default function Invoices() {
  const invoices = getInvoices()
  const [searchParams, setSearchParams] = useSearchParams({replace: true})

  return (
    <div style={{display: 'flex'}}>
      <nav style={{borderRight: 'solid 1px', padding : '1rem'}}>
        <input 
          value={searchParams.get('filter') || ''}  
          onChange={e => {
            const filter = e.target.value
            setSearchParams({filter}, {replace: true})
          }}
        />
        {invoices
          .filter(invoice => {
            let filter = searchParams.get('filter')
            if (!filter) return true
            return invoice.name.toLowerCase().startsWith(filter.toLowerCase())
          }).map((invoice) => (
            <QueryNavLink 
              key={invoice.number} 
              style={({isActive}) => ({
                  display: 'block', 
                  margin: '1rem 0', 
                  color: isActive ? 'red' : ''
                }
              )}
              to={invoice.number}>
                {invoice.name}
            </QueryNavLink>
          )
        )}
      </nav>
      <Outlet />
    </div>
  )
}