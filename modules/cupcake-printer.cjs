const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  const prettyPrintCupcake = (cupcake) => {
    return `${cupcake.flavor} cupcakes cost ${priceFormatter.format(cupcake.price)} each`;
  };
  
  const simplePrintCupcake = (cupcake) => {
    return `${cupcake.flavor}: ${priceFormatter.format(cupcake.price)}`;
  };

  const jaredsFunExtraFunction = () => {
    return 'fun'
  }

  module.exports = {
    prettyPrintCupcake,
    simplePrintCupcake,
    jaredsFunExtraFunction
  }