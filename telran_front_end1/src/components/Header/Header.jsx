import React from 'react';
import s from "./Header.css";

export default function Header() {
  return (
    <header className='header'>
      <div class="link" className='home'>
        <a href='/Home' className='logo'></a>
        <a href="/Catalog"className='Catalog'>Catalog</a>
        <ul class="link" className='navigation'>
          <a href='/Home'>Main Page</a>
          <a href='/Catalog'>All Products</a>
          <a href='/Sales'>All sales</a>
          <a></a>
        </ul>
        <a href='Cart' className='cart'></a>
      </div>
    </header>    
  )
}