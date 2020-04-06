import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

export default function App({children}) {
  return (
       <div>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/wedding1">Wedding 1</Link>
         </li>
         <li>
           <Link to="/wedding2">Wedding 2</Link>
         </li>
       </ul>
         {children}
       </div>
   );
}
