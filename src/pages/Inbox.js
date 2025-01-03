import React from 'react'
import { connect } from 'react-redux';
const Inbox = () => {
  return (
    <div className={`inbox rel`}>
      Inbox / Side bar 
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
