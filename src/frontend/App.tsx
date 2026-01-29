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
            {/* Ver como obtener los datos de la db */}
            <Item title="Item A" price={500} description="primer item" />
            <Item title="Item B" price={2000} description="segundo item" />
            <Item title="Item C" price={1500} description="tercer item" />
          </div>
        </div>
      </div>
    </>
  )
}
