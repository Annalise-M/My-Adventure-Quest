// add find by id function

export function findById(productData, productId){
    for (let i = 0; i < productData.length; i++) {  
        const singleObject = productData[i];

        if (singleObject.id === productId) {
            return singleObject;
        }
    }
}