import {combineReducers} from "redux";
import walletReducer from "./wallet.reducer";

const reducers = combineReducers({
    wallet: walletReducer
});

export default reducers;