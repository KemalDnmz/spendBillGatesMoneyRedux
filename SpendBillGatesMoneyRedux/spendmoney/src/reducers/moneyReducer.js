// import { allTypes } from "../actionTypes";
// import cardItems from "../cardItems";

// const initialState = {
//     shopItems: cardItems,
//     remain: 100000000000,
//   };

//   export const moneyChange = (state = initialState, action) => {
//     switch (action.type) {
//       case allTypes.moneyTypes.MONEY_CHANGE:
//         return
              
//               state.shopItems.forEach((item) => {
//                 if (item.id === action.payload.id) {
//                   // console.log(action.payload);
//                   item.quantity = parseInt(action.payload.value);
//                 }
                
//               });
                
//               let total = 0;
//               state.shopItems.forEach((item) => {
//                 total += Number(item.price) * Number(item.quantity);
//               });
//               state.total = total;
//               state.remain=100000000000 - Number(state.total)

              
    
//       default:
//         return state
        
//     }

//   }

import { allTypes } from "../actionTypes";
import cardItems from "../cardItems";

const initialState = {
  shopItems: cardItems,
  remain: 100000000000,
};

export const moneyChange = (state = initialState, action) => {
  switch (action.type) {
    case allTypes.moneyTypes.MONEY_CHANGE:
      const updatedShopItems = state.shopItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: parseInt(action.payload.value) };
        }
        return item;
      });

      let total = 0;
      updatedShopItems.forEach((item) => {
        total += Number(item.price) * Number(item.quantity);
      });
      
      const remain = 100000000000 - total;

      return {
        ...state,
        shopItems: updatedShopItems,
        total,
        remain,
      };

    default:
      return state;
  }
};
