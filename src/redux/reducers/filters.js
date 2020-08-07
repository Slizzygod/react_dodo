const initialState = {
  sortBy: 'popular', //сортировка
  category: 0 //категории
};

//принимает обязательные 2 параметра от redux
const filters = (state = initialState, action) => {
  if(action.type === 'SET_SORT_BY'){
    return {
      ...state,
      sortBy: action.payload
    }
  }

  if(action.type === 'SET_CATEGORY'){
    return {
      ...state,
      category: action.payload
    }
  }
  return state; // верни старые данные если условие не сраболтает и не нужно обновлять редьюсер
}

export default filters;