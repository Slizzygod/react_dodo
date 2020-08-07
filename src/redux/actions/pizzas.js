import axios from "axios";

export const fetchPizzas = () => {
  axios.get("http://localhost:3000/pizzas").then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export default setPizzas;
