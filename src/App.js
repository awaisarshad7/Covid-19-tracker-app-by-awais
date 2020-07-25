import React from  'react';

import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import { fetchdata } from './Api';

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const data = await fetchdata();
        this.setState ({data: fetchdata});
    }
    render(){
        const {data} = this.state;

        return(
            <div className = {styles.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;
