import React from 'react'
import {Link} from 'react-router-dom';
import ftrip from '../compo/img/3nights-4days-golden-triangle-tour3.webp';

export const holiday=()=>(
    <div>
       <div className="img1">    
        <img src={ftrip} alt="Golden triangle plan" width="25%" height="auto"/>
        </div>
        <div className="cont">
            
        <Link to="/gplan"><h1>Golden triangle plan</h1></Link>
        <h4>7 days plan</h4>
        <p>DELHI---JAIPUR---AGRA---DELHI</p>

        </div>
    </div>
)