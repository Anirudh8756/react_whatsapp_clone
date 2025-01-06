import React, { Fragment } from 'react'
import '../css/Props.scss';
import { connect } from 'react-redux';
import Inbox from './subs/Inbox';
import Chatbox from './Chatbox';
import '../css/App.scss';
const Messenger = () => {
  return (
    <Fragment> 
      <div className={`green-belt`}/>
        <div className={`messenger fixed flex`}>
          <Inbox />
          <Chatbox />
      </div>
    </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
