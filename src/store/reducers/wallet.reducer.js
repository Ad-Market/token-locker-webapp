import { CONNECT_SET } from "../actions/type";

const status = {
    walletAddress: '',
    balance: 0,
    chainId: '',
}
export default function(state = status, action) {
    switch (action.type) {
        case CONNECT_SET:
            return {...state, ...action.payload}
        default:
            return state;
    }
}