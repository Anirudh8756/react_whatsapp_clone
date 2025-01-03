import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/InboxItems.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
const InboxItem = () => {
return (
    <div className={`conversations rel flex aic`}>
      <div className={`side-1`}>
          <div className={`you rel flex aic`}>
            <Link>
            <img src={`https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg`}/>
            </Link>
          </div>
          <div className={`meta rel flex col`}>
            <h2 className={`name `}>Anirudh</h2>
            <h2 className={`last-mess`}>Hello...</h2>
          </div>
      </div>
      <div className="side-2">
          <div className={`time`}>
            <p>11:00</p>
          </div>
          <div className={`flex gap-10`}>
            {/* <div className={`pinned`}>
                <FontAwesomeIcon icon={faThumbtack} />
            </div> */}
            <div className="msg-count">
                <h1>5</h1>
            </div>
          </div>
      </div>
    </div>
)
}
export default InboxItem
