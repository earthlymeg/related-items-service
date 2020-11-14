import React from "react";
import ProductCard from "./ProductCard.jsx"

class App extends React.Component {

  constructor(props) {
    super(props);    
  }

  render() {
    return(

        <div>
        <ProductCard />
        </div>
    )
  }  
    
}

export default App;