// import store from "../store/createStore";
// import AppConnector from "../../connectors/AppConnector";

// export const connectUser = loginInfo => {
//     return (dispatch) => {
//         return AuthConnector.post(`/api/login`, JSON.stringify(loginInfo))
//             .then((res) => {
//                 if (res.status === 200) {
//                     dispatch(connectUserSuccess(res.data.user));
//                 } else {
//                     throw new Error(res.error);
//                 }
//             })
//             .catch((err) => {
//                 console.error(err);
//                 alert('Error logging in please try again');
//             });
//
//     };
// };