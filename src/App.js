import React from  'react';

import {cards, Chart, CountryPicker} from './Components';
import styles from './App.modules.css';

class App extends React.Component {
    render(){
        return(
            <div className = {styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;
