import { Navbar } from './components/navbar'
import { Item } from './components/item'
import './styles/App.css'

export const App = () => {
  return (
    <>
      <div className="app-main-container">    
        <Navbar />
        <div className="app-main-grid-container">
          <div className="grid grid-cols-3 gap-4 w-full p-4">
            <Item title="Item A" price={500} />
            <Item title="Item B" price={2000} />
            <Item title="Item C" price={1500} />
          </div>
        </div>
      </div>
    </>
  )
}
