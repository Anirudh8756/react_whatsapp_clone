import React from 'react'
import '../../css/ChatBubble.scss'
const ChatBubble = (props) => {
  const { dir }= props;
  return (
    <div className={`${ dir == 1 ? 'chat-bubble-wrapper ' : "chat-bubble-wrapper-right" } `}>
    <div className={`bubble rel`}>
      <div className={`${ dir == 1 ? 'ballon-w' : 'ballon-g' } `}>
        <h2 className={`name`}>RDJ Das</h2>
        <p className={`text`}> A quick brown fox jumped over a lazy dog.? </p>
        <p className={`time-chat`}> 3:54pm </p>
      </div>
    </div>
    </div>
    

  )
}

export default ChatBubble