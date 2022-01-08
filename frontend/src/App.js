import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

function App() {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/order/:id' component={OrderScreen} />
                    <Route path='/register' component={RegisterScreen} />
                    <Route path='/payment' component={PaymentScreen} />
                    <Route path='/place-order' component={PlaceOrderScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/shipping' component={ShippingScreen} />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/cart/:id?' component={CartScreen} />
                    <Route path='/admin/user-list' component={UserListScreen} />
                    <Route path='/admin/user-edit' component={UserEditScreen} />
                    <Route
                        path='/admin/product-list'
                        component={ProductListScreen}
                        exact
                    />
                    <Route
                        path='/admin/product-list/:pageNum'
                        component={ProductListScreen}
                        exact
                    />
                    <Route
                        path='/admin/product/:id/edit'
                        component={ProductEditScreen}
                    />
                    <Route
                        path='/admin/order-list'
                        component={OrderListScreen}
                    />
                    <Route
                        path='/search/:keyword'
                        component={HomeScreen}
                        exact
                    />
                    <Route
                        path='/sear/:keyword/page/:pageNum'
                        component={HomeScreen}
                        exact
                    />
                    <Route path='/page/:pageNum' component={HomeScreen} exact />
                    <Route path='/' component={HomeScreen} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
