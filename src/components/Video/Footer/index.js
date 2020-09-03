import React from 'react';
import style from './footer.module.scss';

const Footer = () => {
  return (
    <div className={style.video__footer}>
      <div className={style.video__footer__text}>
        <h3>@tag</h3>
        <p>Description goes here</p>
      </div>
    </div>
  )
}

export default Footer;
