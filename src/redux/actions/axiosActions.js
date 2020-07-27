import store from "../store/createStore";
import AppConnector from "../../connectors/AppConnector";

// export const fetchAllThings = () => {
//     return (dispatch) => {
//         // dispatch(startLoading());
//
//         return AppConnector.get(`/api/allThings`)
//             .then((res) => {
//                 if (res.status === 200) {
//
//                     dispatch(fetchAllThingsSuccess(res.data.things));
//                     // dispatch(endLoading());
//                 } else {
//                     throw new Error(res.error);
//                 }
//             })
//             .catch((err) => {
//                 console.error(err);
//                 alert('Error fetching things please try again');
//             });
//
//     };
// };