import React from "react";
import { Icon } from '@iconify/react';
import '../styles/Footer.css'

const Footer =()=>{
    return(
        <div className='footer-container'>
            <p>Copyright © 2021</p>
            <a href='https://github.com/hychanbn1009'>hychanbn1009</a>
            <a href='https://github.com/hychanbn1009'><Icon icon="ant-design:github-filled" width="24" height="24" /></a>
        </div>
    )
}

export default Footer