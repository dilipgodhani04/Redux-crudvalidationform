import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  UPDATE_USER,
} from "../Action/Constant";
const intialState = {
  userData: [],
};
const newNumber = (state = intialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        userData: [
          ...state.userData.filter((item) => item.id != action.payload),
        ],
      };

    case EDIT_USER:
      return {
        ...state,
      };

    case UPDATE_USER:
      let  userCopy = [...state.userData];
      const objNew = userCopy.findIndex((ele) => ele.id == action.payload.id);
      if (objNew !== -1) {
        let newData = userCopy.splice(objNew, 1, action.paylaod);
      }

      return {
        ...state,
        userData: userCopy,
      };
    // case UPDATE_USER:
  
    //   let userCopy = [...state.userData];
    
    //   const findObj = userCopy.findIndex((ele) => ele.id == action.payload.id);
    //   if (findObj !== -1) {
    //     let replacedItem = userCopy.splice(findObj, 1, action.payload);
        
    //   }
    //   return {
    //     ...state,
    //     userData: userCopy,
    //   };
    default:
      return state;
  }
};
export default newNumber;
