import React from 'react'
import s from './HomePage.css'

import { useEffect, useState } from "react";

export default function HomePage() {

  const [categories, setCategories] = useState([]);

  useEffect( () => {

    fetch('http://localhost:3333/categories/all')
      .then( resp => resp.json())
      .then(data => setCategories(data));
  })
  

  return (
    <div className='homepage'>
        <div className='banner'>
          <h1 class="text" className='t1'>Распродажа</h1>
          <h2 class="text" className='t2'>в честь нового сезона</h2>
          <ul class="link" className='buttons'>
            <a href='/Home' className='sales'>Все акции</a>
            <a className='about'>Подробнее</a>
          </ul>
          <img className='bannerpng' src='assets/png.png'/>
        </div>
        <h1 className='pagenm'>Категории</h1>
        <div className='category'>
          {categories.map((item) => (
            <li key={item.name}>
              {item.title}
              <img width="150" height= "150" src={item.image}/>
            </li>
          ))}
        </div>
        
        <div className='salesp'>
          <h1>Акции</h1>
        </div>
    </div>
    
  )
}
