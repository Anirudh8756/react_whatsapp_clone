import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Splash from './pages/Splash';
import { BrowserRouter } from 'react-router-dom';
import Messenger from './pages/Messenger';

function Zuzapp(props) {
    const { loaded, setState } = props;

    useEffect(() => {
        setTimeout(() => {
           setState(true);
        }, 1000);
    }, [setState]);

    return (
        <BrowserRouter>
            {loaded ? <Messenger /> : <Splash />}
        </BrowserRouter>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Zuzapp);
