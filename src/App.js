
//объект с описанием товара
const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

//Компонент с описанием товара
function ShopItemClass(item) {
  return (
    <div className="main-content">
      <h2> {item.item.brand} </h2>
      <h1> {item.item.title} </h1>
      <h3> {item.item.description} </h3>
      <div className = "description"> {item.item.descriptionFull} </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{item.item.currency} {item.item.price.toFixed(2)} </div>
        <button>Добавить в корзину</button>
      </div>     
    </div>
  )  
}

//Основной компонент
function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item={item} />
    </div>
  </div>
  );
}

export default App;
