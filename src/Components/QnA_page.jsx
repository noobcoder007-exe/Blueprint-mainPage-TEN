import React from 'react';
import './QnA_page.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFolder, faTrashCan} from '@fortawesome/free-regular-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom';

 
function QnA_page(){
    const [count, setCount] = useState(0)
    const [idea, setIdea] = useState(false);
	const [startup, setStartup] = useState(false);
    const [brand, setBrand] = useState(false);
    const [digital, setDigital] = useState(false);
    const [technology, setTechnology] = useState(false);
    const [branding, setBranding] = useState(false);
    const [influencer, setInfluencer] = useState(false);
    const [public_relations, setPublic_relation] = useState(false);
    const [content, setContent] = useState(false);
    function counter() {
        setCount(prevCount => prevCount+1);
    }
	const ideaHandler = () => {
		setIdea(true);
		setStartup(false);
        setBrand(false);
	};
	const startupHandler = () => {
		setIdea(false);
		setStartup(true);
        setBrand(false);
	};
    const brandHandler = () => {
		setIdea(false);
		setStartup(false);
        setBrand(true);
	};
    const digitalHandler = () => {
		setDigital(true);
		setTechnology(false);
        setBranding(false);
        setInfluencer(false);
		setPublic_relation(false);
        setContent(false);
	};
    const technologyHandler = () => {
		setDigital(false);
		setTechnology(true);
        setBranding(false);
        setInfluencer(false);
		setPublic_relation(false);
        setContent(false);
	};

    
    return(
        
        
        <div className='container'>
             <header className='q-header-class'>
                <div className='menu'>
                <h5 classsName='logo-text'>TEN Market</h5>
                <Link to="/QnA_page"><button onClick={counter} className='new-btn  mt-4'><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>Add Blueprint</button></Link>
                
               <div> <p className='draft mt-3'>DRAFTS</p>
               <div className="blueprint--container">
                <button className="main-btn">
                    <img src="" alt="" />
                    BluePrint {count}
                </button>
               </div>
                <div className='divider'></div>
                <p className='draft mt-3'>GENERATED BLUEPRINTS</p>
                
                <button type='button' className='new-btn mt-3'><FontAwesomeIcon icon={faFolder} ></FontAwesomeIcon>Standard</button>
                <button type='button' className='new-btn mt-3'><FontAwesomeIcon icon={faFolder} ></FontAwesomeIcon>Upgraded</button>
                </div></div>
                <div className='del-position'>
                <button type='button' className='q-delete mt-3'><FontAwesomeIcon icon={faTrashCan} ></FontAwesomeIcon>Clear drafts</button></div>
                
            </header>
            <div className='row mt-3'>
                <div className=''>
                {/* <div className="nav--count">
                        Blueprint {count}        // yahi cheez navbar me kahi to aaegi chk kar lena 
                    </div> */}
                  <div className='pro-algin'>
                   
                     <span className='qna-free'>Free</span>
                     <span className='qna-pro'>Pro</span>
                     <span className='qna-pro'>Premium</span>
                  </div>
                  <div className='mydivider mt-5'></div>
                  <div className='bussiness' >
                    <div className='logo'>
                    <img src='./images/logo.png' ></img>
                    </div>
                 <span> <TypeAnimation 
                  
                   sequence={[
                   // Same substring at the start will only be typed out once, initially
                  
                    'What is the stage of your business ?',
                     1000, 
        
                  ]}
                 wrapper="span"
                 speed={50}
                 style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
                   
                  /></span></div>
                </div>
               
		
                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'onClick={ideaHandler}>
                        <div className='qna-border'>
                            <img src='./images/stage_idea.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Idea / Vision</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={startupHandler}>
                    <div className='qna-border'>
                            <img src='./images/stage_startup.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Startup / Growth</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'onClick={brandHandler}>
                    <div className='qna-border'>
                            <img src='./images/stage_brand.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Brand / Enterprise</p>
                        </div>

                        
                    </div>
                </div>

                {/* Idea / Vision */}
                {idea && (
                    <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'What are you looking for (choose ONLY one)?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/market_strategy.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Go to Market Strategy</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/launch_plan.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Launch Plan of Action</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/traditional_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Traditional Marketing</p>
                        </div>

                        
                    </div>
                </div>

                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                        <div className='qna-border'>
                            <img src='./images/digital.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Digital Marketing</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'onClick={technologyHandler}>
                    <div className='qna-border'>
                            <img src='./images/technology.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Technology & Innovation</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/branding.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Branding & Design</p>
                        </div>

                        
                    </div>
                </div>
                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/public_relations.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Public Realations</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/influencer_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Influencer Marketing</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/content.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Content Production</p>
                        </div>

                        
                    </div>
                </div>
                </div>

			)}

            {/* Startup / Growth */}
			{startup && (
				<div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'What are you looking for (choose ONLY one)?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/market_strategy.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Go to Market Strategy</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/launch_plan.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Launch Plan of Action</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/traditional_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Traditional Marketing</p>
                        </div>

                        
                    </div>
                </div>

                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/digital.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Digital Marketing</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/technology.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Technology & Innovation</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/branding.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Branding & Design</p>
                        </div>

                        
                    </div>
                </div>
                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/public_relations.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Public Realations</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/influencer_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Influencer Marketing</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/content.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Content Production</p>
                        </div>

                        
                    </div>
                </div>
                </div>
			)}

           {/* Brand / Enterprise */}
            {brand && (
				<div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'What are you looking for (choose ONLY one)?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/market_strategy.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Go to Market Strategy</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/launch_plan.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Launch Plan of Action</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/traditional_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Traditional Marketing</p>
                        </div>

                        
                    </div>
                </div>

                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/digital.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Digital Marketing</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/technology.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Technology & Innovation</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/branding.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Branding & Design</p>
                        </div>

                        
                    </div>
                </div>
                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/public_relations.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Public Realations</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/influencer_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Influencer Marketing</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/content.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Content Production</p>
                        </div>

                        
                    </div>
                </div>
                </div>
			)}
           
           {/* Digital Marketing */}
            {digital &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'Anything specific in the digital marketing?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Social Media Marketing</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>Performance marketing</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>SEO, ASO & SEM</p>
                        </div>

                        
                    </div>
                </div>

                
                </div>
            )}

           {/* Technology and innovation */}
            {technology &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'Anything specific in the technology and innovation?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Website Development</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>App development</p>
                        </div>
                    </div>
                </div>
                </div>
            )}
            </div>

            {/* Right accordion */}
            <div className='qna-header'>
                <div className='divider mt-5'></div>
                <div className='cards-group'>
                    <p className='stp-title'>Steps</p>
                    <div className='step-group'>
                        <span className='line'></span>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Stage Selection</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Service Requirements</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Service Spefication</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Business bio</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Vendor partership</p>
                        </div>
                    </div>

                    <div className='company-group'>
                        <p>Privacy policies</p>
                        <p>Terms and conditions</p>
                        <p>© 2023 TEN Inc.</p>
                        <p>Contact us</p>
                    </div>

                </div>
            </div>
        </div>
       

    );
}
export default QnA_page;