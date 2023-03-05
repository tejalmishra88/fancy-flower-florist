
import './App.css';
import ProductPrice from './ProductPrice/ProductPrice';

function App() {
  return (
    <div>
  <h1>Fancy Florist</h1>
  <ProductPrice 
    name="Congratulations Bouquet"
    description="The perfect bouquet for a celebration such as a birthday or graduation."
    price={70} 
    img="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    sale={true}
  />
  <ProductPrice
    name="Apology Bouquet"
    description="You need something extra when you know you messed up."
    price={150}
    img="https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
    sale={false}
   />
  <ProductPrice
    name="Wedding Bouquet"
    description="Beautiful collection of flowers to turn heads on your special day!"
    price={200} 
    img="https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    sale={true}
    />
</div>
  );
}

export default App;
