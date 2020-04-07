import React from 'react';
import styles from './Wedding1.module.css';

const IMAGES = [
  'Jenzack0017.jpg',
  'Jenzack0082.jpg',
  'Jenzack0115.jpg',
  'Jenzack0125.jpg',
  'Jenzack0175.jpg',
  'Jenzack0177.jpg',
  'Jenzack0189.jpg',
  'Jenzack0191.jpg',
  'Jenzack0216.jpg',
  'Jenzack0268.jpg',
  'Jenzack0272.jpg',
  'Jenzack0274.jpg',
  'Jenzack0294.jpg',
  'Jenzack0412.jpg',
  'Jenzack0420.jpg',
  'Jenzack0424.jpg',
  'Jenzack0431.jpg',
  'Jenzack0432.jpg',
  'Jenzack0500.jpg',
  'Jenzack0549.jpg',
  'Jenzack0562.jpg',
  'Jenzack0563.jpg',
  'Jenzack0568.jpg',
  'Jenzack0574.jpg',
  'Jenzack0612.jpg',
  'Jenzack0627.jpg',
  'Jenzack0793.jpg',
  'Jenzack0795.jpg',
  'Jenzack0809.jpg',
];

export default function Wedding1() {
  return (
       <div>
         {IMAGES.map(function(image) {
           return <img className={styles.img} src={require(`./gallery30/${image}`)} />
         })}
       </div>
   );
}
