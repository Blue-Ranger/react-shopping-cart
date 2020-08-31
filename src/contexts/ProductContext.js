//STEP 2 - Creating ProductContext
//this folder is going to be used to hold all of `context objects` we create

import React from "react";

const ProductContext = React.createContext({
  products: [{}],
  addItem: () => {},
});
export default ProductContext;
