
class Action { }


Action.prototype.add = function(e){
    return { type: "add", data:e }
}

let action = new Action()
export default action

// export function test(dispatch: Dispatch) {
//     return dispatch({ type: "SET_MOBILE_PAGE", data });
// }

// export function setBorrowOffers() {
//     return async (dispatch: Dispatch) => {
//       await getBorrowList().then(data => {
//         dispatch({ type: "SET_BORROW_OFFERS", data: data });
//       });
//     };
//   }