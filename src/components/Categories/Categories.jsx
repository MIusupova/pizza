import { useState } from "react";

const Categories = ({categoryId ,clickCategoryId}) => {
    const categories = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']
    
    return (
        <div className="categories">
        <ul>
          {categories.map((value, i) => (
            <li key={i} onClick={() => clickCategoryId(i)} className={categoryId === i ? 'active' : ''}> {value}</li>
          ))}
        </ul>
      </div>

                
    )
}
export default Categories;