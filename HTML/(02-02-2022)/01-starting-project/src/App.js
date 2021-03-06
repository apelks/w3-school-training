import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { uiActions } from "./components/store/ui-slice";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from 'react';
import Notification from "./components/UI/Notification";


let isInitial = true;


function App() {

  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const cart = useSelector((state) => state.cart);

  const notification = useSelector((state => state.ui.notification))

  useEffect(() => {

    const sendCartData = async () => {

      dispatch(uiActions.showNotification({
        status : 'pending',
        title : 'sending...',
        message : 'Sending Cart Data'
      }))


     const response = await fetch('https://neww-60c91-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if (!response.ok){
        throw new Error('Sending Cart Data Failed');
      }
    }


    dispatch(uiActions.showNotification({
      status : 'Success',
      title : 'Success!',
      message : 'Sent Cart Data Successfully',
    }))


    if (isInitial){
      isInitial = false;
      return
    }
   
    sendCartData().catch(error => {

      dispatch(uiActions.showNotification({
        status : 'error',
        title : 'Error!',
        message : 'Sending Cart Data Failed',
      }))
  

    });

  }, [cart, dispatch]);

  return (

    <Fragment>
     {notification && <Notification status = {notification.status} title = {notification.title} message = {notification.message}/>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>

    </Fragment>
  );
}

export default App;
