import React from 'react';
import './Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFolder, faTrashCan} from '@fortawesome/free-regular-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom';
function Welcome_page() {
    return(
        <div className='container-fluid'>
            <header className='header-class'>
                <div className='menu'>
                <h5 classsName='logo-text'>TEN Market</h5>
                <Link to="/QnA_page"><button className='new-btn  mt-4'><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>Add Blueprint</button></Link>
                
                <p className='draft mt-3'>DRAFTS</p>
                <div className='divider'></div>
                <p className='draft mt-3'>GENERATED BLUEPRINTS</p>
                
                <button type='button' className='new-btn mt-3'><FontAwesomeIcon icon={faFolder} ></FontAwesomeIcon>Standard</button>
                <button type='button' className='new-btn mt-3'><FontAwesomeIcon icon={faFolder} ></FontAwesomeIcon>Upgraded</button>
                </div>
                <div className='del-position'>
                <button type='button' className='delete mt-3'><FontAwesomeIcon icon={faTrashCan} ></FontAwesomeIcon>Clear drafts</button>
                </div>
            </header>
           
                 <div className='day-algin'>
                    <div className='version mt-3'>
                     <span className='free'>Free</span>
                     <span className='pro'>Pro</span>
                     <span className='pro'>Premium</span>
                    </div>
                    <h1 className='title mt-3'>Welcome to TEN Market</h1>
                    <h3 className='subtitle mt-3'>BLUEPRINT TO BRILLIANCE</h3>
                    <div className='content mt-5'>
                        <p className='para1'>We are here for you if, you’re planning to start a company, need any marketing, tech or production services or
                         need an exhaustive scope of work for niche services such as SEO, Ads, Branding etc.</p>
                         <p className='para2 mt-2'><b>Disclaimer : We’re only your planners NOT your implementers. Make sure that your creative execution is done right</b></p>
                    </div>
                    <Link to="/QnA_page"><button className='create-btn mt-4'>Create Free Blueprint</button></Link>
                    {/* <link type="button" href="/Main_Page" className='create-btn mt-4'>Create Free Blueprint</link> */}
                  </div>
               </div>

             
    
    );

}
export default Welcome_page;