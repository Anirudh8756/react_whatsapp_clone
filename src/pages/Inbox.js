import React from 'react'
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
// Alternatively, for brands or other icon libraries:
// import { faMessage } from '@fortawesome/free-brands-svg-icons';

const Inbox = () => {
  return (
    <div className={`inbox rel`}>
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
