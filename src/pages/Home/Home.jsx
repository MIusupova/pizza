import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Sort from '../../components/Sort/Sort';

import Skeleton from '../../components/PizzaBlock/Skeleton';




const Home = () => {
const [isLoading, setIsLoading] = useState(true)
const [items, setItems] = useState([])
const [categoryId, setCategoryId] = useState(0)
const [sortType, setSortType] = useState(0)

  
  React.useEffect(() => {
    fetch('https://67a694d1510789ef0dfbbe5d.mockapi.io/items') 
    .then((res) => res.json())
    .then((arr) => { //arr это массив res преобразованный в json формат
      setItems(arr);
      setIsLoading(false)
    })
    window.scrollTo(0,0)
  }, []);

  return (
    <>
    <div className="container">
    <div className="content__top">
           <Categories categoryId={categoryId} clickCategoryId={(i) => setCategoryId(i)} />
            {/* <Sort/> */}
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading 
            ? [... Array(10)].map((_, index) => <Skeleton key={index}/>)
            : items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)}
          </div>

    </div>
     
    
    </>
          
  );
}

export default Home;
