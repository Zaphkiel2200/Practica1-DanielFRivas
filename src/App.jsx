import './App.css'
import Card from './components/Card/Card'

const App = () => {
  const products = [
    {
      id: 1,
      name: "Auriculares Galaxy",
      price: 89.99
    },
    {
      id: 2,
      name: "Smartwatch Horizon",
      price: 149.50
    },
    {
      id: 3,
      name: "Cámara Pro-Snapshot",
      price: 499.00
    }
  ];

  return (
    <div className="app-container">
      <h1>Catálogo de Productos</h1>
      <div className="cards-grid">
        {products.map(product => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default App
