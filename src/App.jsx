import { RevenueCard } from './RevenueCard'

function App() {

  return (
    <div className='gird grid-cols-3'>
      <RevenueCard title={"Amount pending"} amount = {"92,312.20"} orderCount={13} />
    </div>
   )
}

export default App
