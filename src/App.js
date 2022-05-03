import React from 'react';
import Card from './components/Cards/Cards';
import Chart from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api/index';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
    state = {
        data : {},
        country: ''
    }

    handleCountryChange = async(country) => {
        const data = await fetchData(country);

        this.setState({data,country:country});
    }

    async componentDidMount() {
        const data = await fetchData();

        console.log(data);
        this.setState({ data });
    }
    render() {
        const {data,country} = this.state ;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                {/* <h1>COVID-19 TRACKER</h1> */}
                <Card data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div> 
        );
    }
}

export default App;