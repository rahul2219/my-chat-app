import records from '../records.json';
import '../styles/Conversation.css'
import { Context } from '../Context';
import { useContext, useEffect, useState} from 'react';
import { TypeMessage } from './TypeMessage';


export function Conversation(){
    // We store all the messages the contact has sent in this messages state using array.
    const[messages,setMessages] = useState([]);
    const userContext = useContext(Context);
    const [mytext,setMyText] = useState('');
    // This useEffect will be called if the userContext.Id changes.
    useEffect(()=>{
        if(userContext.Id !== '0'){
            // console.log(records[userContext.Id-1].messages);
            console.log(records[userContext.Id-1]);
            // we store the messages of that particular userId in the messages1 array
            let messages1=[];
            records[userContext.Id-1].messages.map(message=>(messages1.push(message)));
            // we set the messages state with the messages1 array
            setMessages(messages1);
            console.log(messages.length);
        }
        else{
            console.log("ok");
        }
    },[userContext.Id]);

    const pushMessage=(message)=>{
        // This will basically push the message to the sent messages array when the user clicks on send button
       records[userContext.Id-1].sentMessages.push(message); 
       setMyText(message);
    }

    return(
        <div>
            {/* If any contact is being selected by the user we display the conversation which means the userContext.Id is not 0 */}
            {userContext.Id !== '0'? <div className="wallpaper">
                <div className='messages'>
                    {messages.map((message)=>(
                        <div className='message-div'><img src={userContext.url} alt="user-profile"/><div className='message'><div>{message}</div></div><br /></div>
                    ))}
                </div>
                {/* This will display all the messages that i have sent to that userId which is present in sent messages array  */}
                {records[userContext.Id-1].sentMessages.map((message)=>(<div className='my-messagediv'><div className='my-message'><span>{message}</span></div></div>))}
            </div>:
            // Below div will be valid when the user didnot select any contact 
            <div>
                <span className='home' >Tap on a particular contact to see the Conversation. </span>
            </div>}
            {/* We also show the TypeMessage component when the userContext.id is not 0 and we send pushMessage function as props */}
            {userContext.Id !== '0'&& <TypeMessage pushMessage={pushMessage}/>}
            

        </div>
        
        
    )
}