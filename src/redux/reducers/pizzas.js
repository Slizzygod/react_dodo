const initialState = {
  items: [],
  isLoaded: false
};

//принимает обязательные 2 параметра от redux
const pizzas = (state = initialState, action) => {
  if(action.type === 'SET_PIZZAS'){
    return {
      ...state,
      items: action.payload,
      isLoaded: true
    }
  }
  return state; // верни старые данные если условие не сраболтает и не нужно обновлять редьюсер
}

export default pizzas;