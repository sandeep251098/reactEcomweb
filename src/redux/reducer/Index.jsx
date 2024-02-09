import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { SignupReducer } from './signupReducer';
import { ProductListReducer } from './productListReducer';
import { LoginReducer } from './loginReducer';
import { AddToCardReducer } from './addToCardReducer';
import { AddToCardArrayIdReducer } from './addToCardArrayIdReducer';
import { StateDataReducer } from './stateDataReducer';
import { CityDataReducer } from './cityDataReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["signupData", "loginData", "productListData", "addToCardData", "addToCardArrayId", "stateData"]
}

const rootReducer = combineReducers({
    signupData: SignupReducer,
    loginData: LoginReducer,
    productListData: ProductListReducer,
    addToCardData: AddToCardReducer,
    addToCardArrayId: AddToCardArrayIdReducer,
    stateData: StateDataReducer,
    cityData: CityDataReducer,
    
})

export default persistReducer(persistConfig, rootReducer);