import React from 'react';
import styles from './App.module.scss';
import { Link } from "react-router-dom";

export default function App({children}) {
  return (
       <div>
       <nav className={styles.nav}>
           <Link className={styles.link} to="/">Home</Link>
           <Link className={styles.link} to="/wedding1">Wedding 1</Link>
           <Link className={styles.link} to="/wedding2">Wedding 2</Link>
       </nav>
         {children}
       </div>
   );
}
