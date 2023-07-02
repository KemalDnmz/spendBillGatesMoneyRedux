import { allTypes } from "../actionTypes";

export const moneyAction = (val) => {
  return { type: allTypes.moneyTypes.MONEY_CHANGE, 
    payload: val };
};
