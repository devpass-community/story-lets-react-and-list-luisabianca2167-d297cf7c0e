import Container from './components/Container';
import { dataProduct } from '../src/products.json'

const Item = ({ item }) => {
  return (
    <li className='item' data-testid='product-item'>
      { /* TODO */ }
      <img src="thumbnail here"></img>
      <h4> title here </h4>
      <p> description here </p>
      <span> brand here </span>
      <span> price here </span>
    </li>
  )
}

function App() {
  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        {dataProduct.map((item) => {
          return <li>{item.category.filter("smartphones")}</li>
        })}
        <Item />
      </ul>
    </Container>
  );
}

export default App;
