import React, { useState, useEffect } from 'react';
import Product from '../product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import db from '../firebaseConfig'

const Products = ({setSelectedProducts}) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const data = await db.collection('products').get()
        setProducts(data.docs)

        // const usersRes = await db.collection('users').get() 
        // console.log(usersRes);
        // const usersData = usersRes.docs.map(user => user.data())
        // console.log(usersData);
        // setUsers(usersData)
    }
    const [productName,setProdcutName]=useState();
    const [productPrice,setProdcutPrice]=useState();

    useEffect(() => {
        fetchProducts()
    }, [products])
 
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(productPrice)
        db.collection("products").add({
            name: productName,
            price: productPrice,
            category:"watch"
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        setProdcutName("");
        setProdcutPrice("");
    }
    
  
    return (
        <Container >
            <Row className="card-deck justify-content-center">
                <div>
                    <form onSubmit={handleSubmit}>
                        <label for="product-name">Product name:</label>
                        <input id="product-name" name="product-name" type="text" onChange={(e)=>setProdcutName(e.target.value)} value={productName} ></input>
                        <label for="product-price">Product price:</label>
                        <input id="product-price" name="product-price" onChange={(e)=> setProdcutPrice(e.target.value)} value={productPrice} type="number" ></input>
                        <input type="submit" value="Add"></input>
                    </form>
                </div>
            </Row>
            <Row className="card-deck justify-content-center">
                {products.map(product => <Product setSelectedProducts={setSelectedProducts} product={product.data()} key={product.id} />)}
            </Row>
        </Container>
    )
}
export default Products