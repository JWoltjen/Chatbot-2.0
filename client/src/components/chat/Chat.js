import React, {useState} from 'react'

export const Chat = () => {
    const [message, setMessage] = useState(''); 
    
    return (
        <div className="chat">
            <h1>Neumann the Chatbot</h1>
            <div>Messages go here</div>
            <input id="chatBox"></input>
        </div>
    )
}
export default Chat