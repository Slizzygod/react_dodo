import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";

const categoriesNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  {name: "популярности", type: "popular"}, 
  {name: "цена", type: "price"}, 
  {name: "алфавит", type: "alphabet"}
];

export default function Home() {
  const dispatch = useDispatch();

  const state = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  const onSelectCategory = index => {
    dispatch(setCategory(index));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoriesNames}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {state.items && state.items.map((obj) => (
          <PizzaBlock 
            key={obj.id} 
            {...obj} 
          />
        ))}
      </div>
    </div>
  );
}
