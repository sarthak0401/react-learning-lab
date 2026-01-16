import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";

import "./styles.css";

// We can directly destructure the argument in the parameter list only
const initialState = false;

function ProductList({ name, age, listOfProducts }) {
  // Destructuring props based on the key names passed through the parent component

  // const {name, age } = props;
  // console.log(props)



  const [flag, setFlag] = useState(initialState);
  let [count, setCount] = useState(0);
  const [countFlag, setCountFlag] = useState(false);



  function handleToggleText() {
    setFlag(!flag);
  }
  
  function handleIncreaseCount(){
    setCount(++count);
  }

  useEffect(() => {
    if(count===10){
      setCountFlag(true);
    }
  }, [count]);  // Whenever some change is there in the count, this useEffect will run

  useEffect(() => {
    console.log("Flag val changed");
    setFlag(!flag);
  }, []); // This will run only once on page load, empty array as dependency


  /*
  function renderTextBlock(getFlag) {
    return getFlag ? (
      <h1>
        Name: {name} and Age: {age}
      </h1>
    ) : (
      <h1>Hello world!</h1>
    );
  }
*/

  const renderTextBlock = flag ? (
    <h1>
      Name: {name} and Age: {age}
    </h1>
  ) : (
    <h1>Hello world!</h1>
  );

  return (
    <div>
      <h3 className="title">ECommerce Project</h3>
      <button onClick={handleToggleText}>Show text</button>
      {/* <ProductItem/> */}

      {/* {}  -> Whenever we are writing some dynamic data (it can be es6) it has to be within {}  */}

      {/* {renderTextBlock(flag)} */}

      {renderTextBlock}

      {/* Imp we need to write the ternary operators in {}, we use {} when whatever we are writing inside it is an expression*/}


      <div>
        <button onClick={handleIncreaseCount}>Increase Count</button>
        <p style={{color : countFlag ? 'green' : '', fontSize : countFlag ? '20px': ''}}>Count is : {count}</p>
      </div>

      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}

        {/* NOTE : These index must NOT be kept as the Keys  */}
      </ul>
    </div>
  );
}

export default ProductList;
