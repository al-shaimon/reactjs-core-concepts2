import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {
        users.map(user => <Users name={user.name} email={user.email} userName={user.username}></Users>)
      }
    </div>
  );
}

function Users(props){
  return (
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <h4>Username: {props.userName}</h4>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(33);

  const increaseCount = () => setCount(count + 1);

  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <br />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

function Product(props) {
  return (
    <div class="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

/* 
const products = [
    { name: 'laptop', price: 153000 },
    { name: 'phone', price: 93000 },
    { name: 'watch', price: 33000 },
    { name: 'tablet', price: 5000 },
  ];
*/

/*    {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="laptop" price="47000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="3500"></Product>
*/

export default App;
