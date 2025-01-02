import React from 'react'
import { connect } from 'react-redux'
import Splash from './pages/Splash';


function Zuzapp(props) {
    const { loaded } = props;
    return (
        loaded ? <h1>App is Loading</h1> : <Splash/>
    );
}

const mapStateToProps = state => {
    return {
        loaded: connect.loaded
    }
};


const mapDispatchToProps = dispatch => {
    return {
        appState: (loaded) => dispatch({ type: 'APP_STATE', payload: loaded})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Zuzapp);
