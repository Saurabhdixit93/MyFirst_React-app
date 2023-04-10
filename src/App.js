import React from "react";
import Cart from "./Cart";
import HeaderOfCart from "./Header";
import { firestore } from "./firebase";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      products: [],
      loading: true
    }
  }

  // firebase connection
  componentDidMount () {
    // firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) =>{
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     });
    //   this.setState({
    //     products:products,
    //     loading: false
    //   });
    // });

    // using listener to update without refreshing
    firestore()
    .collection('products')
    // .where('price','==',65000)
    // .where('title','==','Sony Led Tv')
    // .orderBy('price')
    .orderBy('price','desc')
    .onSnapshot((snapshot) =>{
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      this.setState({
        products:products,
        loading: false
      });
    })
  }

  // handeling increase event
  HandleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //     products : products
    // });
    const docRef = firestore().collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() =>{
        console.log('Updated Successfully');
      })
      .catch((error) =>{
        console.log('Error in Update' , error);
      });
  }

  // handle decrease event
  HandleDecreaseQuantity = ( product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    // products[index].qty -= 1;

    // this.setState({
    //     products : products
    // });
    const docRef = firestore().collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() =>{
        console.log('Updated Successfully');
      })
      .catch((error) =>{
        console.log('Error in Update' , error);
      });
  }

  // handle delete event
  HandleDeleteProduct = (id) =>{
    // const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products : items
    // })
    const docRef = firestore().collection('products').doc(id);
    docRef
      .delete()
      .then(() =>{
        console.log('Deleted Successfully');
      })
      .catch((error) =>{
        console.log('Error in Update' , error);
      });
  }

  // handle navbar count update
  getCartCount = () =>{
    const { products } = this.state;
    let counting = 0;
    products.forEach((product) => {
      counting += product.qty;
    });
    return counting;
  }

  // handle total price count

  getTotalCartPrice = () =>{
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) =>{
      return cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  }

  // handle add product

  addProduct = () => {
    firestore()
      .collection('products')
      .add({
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJi6XJ_7M6sspVKWI5rI4ZIY73sADnHIbCcQ&usqp=CAU',
        title: 'Smart watch',
        price: 500,
        qty: 5
      })
      .then((docRef) =>{
        console.log(`Product Added Successfully` ,docRef);
      })
      .catch((error) =>{
        console.log(`Error In Product Adding ` ,error);
      });
  }

  render(){
    const { products , loading } = this.state;

    return (
      <div className="App">

        <HeaderOfCart
          count={this.getCartCount()}
        />

        {/* product add  
          <button onClick={this.addProduct} style={{padding:30 , fontSize:20 ,color:'red' , cursor:"pointer"}}> 
            Add New Product
          </button>
        */}

        <Cart
          products={products}
          onIncreaseQuantity ={ this.HandleIncreaseQuantity} 
          onDecreaseQuantity = {this.HandleDecreaseQuantity}
          onDeleteProduct = {this.HandleDeleteProduct}
        />
        {/* for loader */}
        {
        loading && 
          <div className="loading">
            <div className="loader"></div>
          </div> 
        }

        <div className="Total-Price" 
          style={Styles.Total} > 
          TOTAL PRICE: {this.getTotalCartPrice()} 
        </div>

      </div>
    );
  }
}

const Styles = {
  Total: {
    fontSize:24,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  }
}

export default App;
