

const reducer = (state,action) => {

  console.log('reducer',state,action);

  let {type,payload}=action;

  switch (type) {
    case 'ADD_ITEM':

      return {
        ...state,
        list:state.list.concat(payload)
      };
    default:
      return state
  }
};

export default  reducer;