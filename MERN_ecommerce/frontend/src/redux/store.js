import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cartreducer} from './reducers/CartReducer';
import {getProductDetailsReducer,getProductReducer} from './reducers/Productreducer';

const reducer=combineReducers({
    cart:cartreducer,
    getProducts:getProductReducer,
    getProductDetail:getProductDetailsReducer  
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const Initial_state={
    cart:{
        cartItems: cartFromLocalStorage
    }
}

const store=createStore(
    reducer,
    Initial_state,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;