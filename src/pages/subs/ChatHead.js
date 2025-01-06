import React from 'react'
import  { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
const ChatHead = () => {
  return (

    <div className={`userbox flex`}>
    <div className={`you rel flex`}>
      <Link className={`user`}>
          <img src={`https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg`}/>
      </Link>
    </div>
    <div className={`actions rel flex aic`}>
        <Link>
          <FontAwesomeIcon icon={faMessage} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </Link>
    </div>
  </div>
  );
}

export default ChatHead