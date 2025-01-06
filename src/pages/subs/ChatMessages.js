import React from 'react'
import ChatBubble from './ChatBubble.js'
import '../../css/ChatMessage.scss'
const ChatMessages = () => {
  return (
    // chathead 
    <div className={`chat rel flex col`}>
      {
        [0,0,0,0,0,0,0,0,0,0,0,0].map((node, index)=> 
          <ChatBubble dir={ index % 2 == 0 ? 1 : 0 } />
        )
      }
      </div>
  )
}

export default ChatMessages