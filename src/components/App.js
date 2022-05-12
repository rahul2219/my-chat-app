
import { useState } from 'react';
import '../styles/App.css';
import { ChatBar } from './ChatBar';
import { ChatMembers } from './ChatMembers';
import { Conversation } from './Conversation';
import records from '../records.json';
import { Context } from '../Context';
import { useContext } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";


function App() {
  // We use useContext here so we can access the variables from the context api that we have set
  const userContext=useContext(Context);
  const [userName,setuserName] = useState('');
  
  // Initially we set the state for showContacts as false but when the user clicks on add button we show the additional contacts 
  const[showContacts,setshowContacts] = useState(false);

  const handleClick=()=>{
    // When showContacts is true it will be set as false and vice-versa that's how show and unshow the popup contatcs
    setshowContacts(!showContacts);
  }
  const handleOnChange = (e)=>{
    // When the user types on the search input it will store the value the user has been typing.
    setuserName(e.target.value);
  }

  return (
    <div className="App">
      <div className='left-div'>
        <div className='conversations'>
          <div className='top-div'>
            <div className='search'>
              <div className='search-image'>
                <span className='search-icon'><BsSearch/></span>
              </div>
              <div className='input-classs'>
                  <input type="text" placeholder = "Search for Conversation" onChange={handleOnChange}/>
              </div>
            </div>
          </div>
          
          <div className='conversation-div'>
            <span className='chats'>
              <span>Conversations</span>
            </span>
            {/* we decide whether to show + button or - button based on whether showContacts is false or true */}
            {showContacts ? <span className='add-contacts second-remove' onClick={handleClick}><AiOutlineCloseCircle/></span>:<span className='add-contacts second-add' onClick={handleClick}><GrAddCircle/></span>}
            
          </div>
          {/* We send userName as props to chatMembers */}
          <ChatMembers userName={userName}/>
        </div>
      </div>
      <div className='right-div'>
        <ChatBar/>
        <Conversation/>
      </div>
      {/* If the showContacts is true we show the contacts as a popup by mapping through the records in the json file */}
      {showContacts && <div className='show-contacts'>
        {/* The moment the user clicks on any contact in the popup we set the name,url and id of that particular contact so we can conversation of that particular contact on right side */}
        {records.map((record)=>(<div className='contact contact-details' onClick={()=>{userContext.setName(record.name);userContext.setUrl(record.img);userContext.setId(record.id);record.read='true';}}><img src={record.img}/>{record.name}</div>))}

  </div>}
    </div>
    
  );
}

export default App;
