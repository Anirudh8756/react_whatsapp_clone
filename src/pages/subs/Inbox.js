import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import InboxItem from './InboxItem';
import ChatHead from './ChatHead';
const Inbox = () => {
  return (
    <div className={`inbox rel`}>

        <ChatHead/>

          <div className={`search flex`}>
            <div className={`icon`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
              <input type={`text`} placeholder={`Search or start new chat`} className={`s15 font`} />
          </div>
          {/* chat contact area starts from here  */}
          <div className={`convo-list`}> 
            {["","","","",""].map((node)=> <InboxItem/> )}
             
          </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      loaded: state.app.loaded,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      setState: (loaded) => dispatch({ type: 'APP_STATE', payload: loaded })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
