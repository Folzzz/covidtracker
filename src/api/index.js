// make functions that will fetch data that we need
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// function to fetch data for the card 
export const fetchData = async (country) => {
    // create a change able url (this is to set the country data in the app.js)
    let changeAbleUrl = url;

    if(country) {
        changeAbleUrl = `${url}/countries/${country}`
    }

    try {
        // destructured the data from the url and returned the needed datas
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeAbleUrl);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };

    } catch (error) {
        console.log("Error from fetchData: " + error);
    }
}

// function to fetch daily data for the chart 
export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);
        // 
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }) );

        return modifiedData;

    } catch (error) {
        console.log("Error from fetchDailyData: " + error);
    }
}

// function to fetch the global//countries
export const fetchCountries = async() => {
    try{
        const {data: {countries}}= await axios.get(`${url}/countries`);

        const modifiedCountries = countries.map((country) => country.name);
        return modifiedCountries;

    } catch (error) {
        console.log("Error from countries: ", error);
    }
}