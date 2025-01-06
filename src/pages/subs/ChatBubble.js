import React from 'react'
import '../../css/ChatBubble.scss'
const ChatBubble = () => {
  return (
    <div className={`bubble rel`}>
      <div className={`ballon`}>
        <h2 className={`name`}>Anirudh Das</h2>
        <p className={`text`}>Hello, How are you.? </p>
        <p>{TimeRanges.now}</p>
      </div>
    </div>

  )
}

export default ChatBubble