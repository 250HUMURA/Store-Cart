const productsArray = [
    {
      id: "1",
      name: "iPhone 14 Pro",
      price: 1229.99
      
    },
    {
        id: "2",
        name: "Galaxy S22",
        price: 1529.99
    },
    {
        id: "3",
        name: "lenovo",
        price: 1999.99

    },
];

function getProductData(id){
    
    let productData = productsArray.find(product => product.id === id )
    if (productData === undefined){
        console.log("product data doesn't exst for ID", + id);
    }
    return productData;
}
    export {productsArray, getProductData};