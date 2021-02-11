import React, {useState} from 'react'

export const Chat = () => {
    // Handle user's message
    const [message, setMessage] = useState(''); 
    const handleClick = async (e) => {
        const code = e.keyCode || e.which; 

        if(code===13){
            console.log(message)
            setMessage(""); 
        }
    }
    return (
        <div className="chat">
            <h1>Neumann the Chatbot</h1>
            <div>Messages go here</div>
            <input id="chatBox" onChange={(e)=>setMessage(e.target.value)} onKeyPress={handleClick} value={message}></input>
        </div>
    )
}
export default Chat