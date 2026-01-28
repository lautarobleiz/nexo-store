import { Navbar } from './components/navbar'
import './styles/App.css'

function App() {
  return (
    <>
      <div className="app-main-container">    
        <Navbar />
        <div className="app-main-grid-container">
          <div className="grid grid-cols-3 gap-4 w-full p-4">
            {/* Elemento 1 */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold">Resistencia 10k</h3>
              <p className="text-sm text-gray-500">$0.50</p>
            </div>
            
            {/* Elemento 2 */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-sm border">

              <h3 className="font-bold">Arduino Uno R3</h3>
              <p className="text-sm text-gray-500">$25.00</p>
            </div>

            {/* Elemento 3 */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold">Sensor Ultrasonido</h3>
              <p className="text-sm text-gray-500">$3.20</p>
            </div>

            {/* Elemento 3 */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold">Sensor Ultrasonido</h3>
              <p className="text-sm text-gray-500">$3.20</p>
            </div>

            {/* Elemento 3 */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold">Sensor Ultrasonido</h3>
              <p className="text-sm text-gray-500">$3.20</p>
            </div>

            {/* Elemento 3 */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold">Sensor Ultrasonido</h3>
              <p className="text-sm text-gray-500">$3.20</p>
            </div>

            {/* La siguiente fila se crea automáticamente */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
