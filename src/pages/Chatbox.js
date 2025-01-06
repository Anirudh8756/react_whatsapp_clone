import React from 'react'
import { connect } from 'react-redux';
import ChatHead from './subs/ChatHead';
import ChatMessages from './subs/ChatMessages';
import ChatSendBox from './subs/ChatSendBox';
import '../css/ChatSendBox.scss';
const Chatbox = () => {
  return (
    <div className={`chatbox rel`}>
      <ChatHead/>
      <ChatMessages/>
      <ChatSendBox/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);
