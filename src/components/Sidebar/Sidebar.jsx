import React, { useContext, useState } from 'react';
import './Sidebar.css'
import { assets } from '../../assets/assets';
import { context } from '../../context/Context';

function Sidebar() {

    const[extended,setExtended] = useState(false);
    const{onSent,prevPrompt,setRecentPrompt,newChat} = useContext(context);
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt);
    }

  return (
    <div className='sidebar'>
        <div className='top'>
            <img onClick={() =>setExtended(prevState => !prevState)} className='menu' src={assets.menu_icon} alt="" />
            <div onClick={() => newChat()} className='new-chat'>
                <img  src={assets.plus_icon} alt="" />
                {
                    extended ? <p>New chat</p>: <></>
                }
                
            </div>
            <div className='recent'>
                <p className="recent-title">Recent</p>
                {
                    prevPrompt.map((item,index) => {
                        return (
                            <div onClick={() => loadPrompt(item)} className='recent-entry'>
                                <img src={assets.message_icon} alt="" />
                                {
                                   extended ? <p>{item.slice(0,18)}...</p>: <></>
                                }                    
                             </div>

                        )
                    })
                }
                
            </div>
        </div>
        <div className='bottom'>
            <div className='bottom-item recent-entry'>
                <img src={assets.question_icon} alt="" />
                {
                    extended ? <p>Help</p>: <></>
                }  
            </div>
            <div className='bottom-item recent-entry'>
                <img src={assets.history_icon} alt="" />
                {
                    extended ? <p>Activity</p>: <></>
                } 
            </div>
            <div className='bottom-item recent-entry'>
                <img src={assets.setting_icon} alt="" />
                {
                    extended ? <p>Setting</p>: <></>
                }
            </div>
        </div>
    </div>
  )
}

export default Sidebar