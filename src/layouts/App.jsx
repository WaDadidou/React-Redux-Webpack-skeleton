import React from 'react';
import {Provider, connect} from 'react-redux';
import UselessMessage from "../components/UselessMessage";

const App = ({...props}) => {

    return (
        <div className="App">

            <UselessMessage/>

        </div>
    );
};

export default App;
