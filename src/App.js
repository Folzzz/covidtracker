import React, { Component } from 'react';

// 
import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/header.png'

class App extends Component {
    // declare states ||
    state = {
        data: {},
        country: "",
    }

    // inside we make a request to the fetchdata function
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({
            data: fetchedData,
        })

        console.log('fetchedData: ', fetchedData);
    }

    // create a method that changes the state of country
    handleCountryChange = async (country) => {
        console.log('countryvalue: ', country);
        //first fetch the data
        const fetchedData = await fetchData(country);
        console.log("country fetchedData: ", fetchedData);

        // then set state
        this.setState({
            data: fetchedData,
            country: country,
        })
    }

    render() {
        const { data, country } = this.state


        return (
            <>
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="covid-19" />
                <Cards data={data} />

                <CountryPicker handleCountryChange={this.handleCountryChange} />

                <Chart data={data} country={country} />
            </div>
            
            </>
        )
    }
}

export default App