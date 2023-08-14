const {prettyPrintCupcake, jaredsFunExtraFunction} = require('./cupcake-printer.cjs')

const cupcakes = [
    {
      flavor: 'vanilla',
      price: 2.0,
    },
    {
      flavor: 'chocolate',
      price: 2.5,
    },
    {
      flavor: 'red velvet',
      price: 3.0,
    },
  ];
  
  for (const cupcake of cupcakes) {
    console.log(prettyPrintCupcake(cupcake));
  }

  console.log(jaredsFunExtraFunction())