import React from 'react'
import ChatBubble from './ChatBubble.js'
import '../../css/ChatMessage.scss'
const ChatMessages = () => {
  return (
    // chathead 
    <div className={`chat rel flex col`}>
      {
        [0,0,0,0,0,0,0,0,0,0,0,0].map(node=> 
          <ChatBubble/>
        )
      }
      </div>
  )
}

export default ChatMessages