
import '../styles/chatbar.css'
import { Context } from '../Context';
import { useContext } from 'react';
import { GrAddCircle } from "react-icons/gr";
export function ChatBar(){

    const userContext = useContext(Context);
    
    return(
        <div>
            {/* we show the chatbar with the username and image only if the user clicks on any contact which means then userContext.Id will not be '0'  */}
            {userContext.Id !== '0'?
            <div className='header'>
                <div  className="profile" >
                    <img src={userContext.url} alt=""/>
                </div>
                <span>{userContext.name}</span>
                <div>
                <span className='add-icon'><GrAddCircle/></span>
                </div>
            </div>:null}
        </div>
        
    )

}