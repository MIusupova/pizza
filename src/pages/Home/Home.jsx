import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Sort from '../../components/Sort/Sort';

import Skeleton from '../../components/PizzaBlock/Skeleton';




const Home = () => {
const [isLoading, setIsLoading] = useState(true)
const [items, setItems] = useState([])
console.log(items);
const [categoryId, setCategoryId] = useState(0)
const [sortType, setSortType] = useState(0)
console.log({categoryId, sortType});

  
  React.useEffect(() => {
    setIsLoading(true)
    const sortFields = ["rating", "price", "price", "title", "title"]; //→ по какому полю сортировать (rating, price, title).
    const sortOrders = ["desc", "asc", "desc", "asc", "desc"]; // в каком порядке сортировать (asc – по возрастанию, desc – по убыванию).
  
  const sortBy = sortFields[sortType]; //пример Если sortType = 2, то: const sortBy = sortFields[2]; // "price"
  const order = sortOrders[sortType]; //Если sortType = 2, то: const order = sortOrders[2];  // "desc"

  const url = `https://67a694d1510789ef0dfbbe5d.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}&` : ''}sortBy=${sortBy}&order=${order}`;//Добавляем параметры сортировки sortBy и order:

    fetch(url) 
    .then((res) => res.json())
    .then((arr) => { //arr это массив res преобразованный в json формат
      setItems(arr);
      setIsLoading(false)
    })
    window.scrollTo(0,0)
  }, [categoryId, sortType]);

  return (
    <>
    <div className="container">
    <div className="content__top">
           <Categories categoryId={categoryId} clickCategoryId={(i) => setCategoryId(i)} /> {/* передаем через i индекс категории чтобы при клике выявить в компоненте categories.jsx */}
             <Sort sortType={sortType} clicSortId={(i) => setSortType(i)}/> 
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
