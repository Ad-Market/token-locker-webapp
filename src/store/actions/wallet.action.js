import { CONNECT_SET } from "./type.js";

export const WalletConnect = (dispatch) => payload => {
    dispatch({
        type: CONNECT_SET,
        payload: payload
    });
}