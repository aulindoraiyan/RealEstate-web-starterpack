import React from 'react';
import MenuList from "../utils/MenuList.json";
import MenuItem from '../utils/MenuItem';
import BannerImage from '../assets/pixelGalaxy.jpg';
import '../styles/Menu.css';

function Laptops() {
  const accItems = MenuList.filter(menuItem => menuItem.type === 'Accessory');
  return (
    <div className="menu" style={{ backgroundImage: `url(${BannerImage})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <h1 className="menuTitle">Accessories</h1>

      <div className="menuList">
        {accItems.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              price={menuItem.price}
              name={menuItem.name}
              detail={menuItem.detail}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Laptops;
