export const EventState = {
  loading: true,
  data: {
    nameEvent: '',
    locationEvent: '',
    dateEvent: '',
    categoryEvent: '',
    vendorNeed: ['photography'],
  },
  category: {},
};

function ReducerEvent(state, action) {
  switch (action.type) {
    case 'START_FETCHING':
      {
        return {
          ...state,
          loading: true,
        };
      }
      break;
    case 'SUCCESS_FETCH':
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
      break;
    case 'CHANGE_DATE':
      return {
        ...state,
        data: {...state.data, dateEvent: action.payload},
      };
      break;
    case 'CHANGE_INPUT':
        const fake = {...state.data};
        fake[action.payload.key] = action.payload.value;
        return {...state, data:fake};
    case 'ADD_VENDOR':
        const vendor = [...state.data.vendorNeed]
        if(!vendor.includes(action.payload)){
            // console.log('Gak ada');
            vendor.push(action.payload)
        }else{
             vendor.filter((x) => x !== action.payload)
            // console.log(vendor.reduce());
        }
        return {...state, data:{...state.data, vendorNeed:vendor}}
        console.log('2',vendor)

    default:
      return state;
  }
}
export default ReducerEvent;
