import React from 'react'
import '../../css/ChatSendBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const ChatSendBox = () => {
  return (
    <div className={`chatinputarea`}>

        <button variant="text" className={`emoji`}>
        <FontAwesomeIcon icon={faPaperclip} />
        </button>


        <input
            placeholder="Type a Message here."
            className={`input-box`}
          />


        <button variant="text" className={`send-msg`}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
        
     </div>
  )
}

export default ChatSendBox