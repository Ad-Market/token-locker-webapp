import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middleware = [thunk];
const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            ...middleware
        )
    )
);

export default store;