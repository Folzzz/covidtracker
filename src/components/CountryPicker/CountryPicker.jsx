import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api'
import styles from './CountryPicker.module.css'

const CountyPicker = ({ handleCountryChange }) => {
    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        const fetchedCountries = async() => {
            const fetchedCountriesData = await fetchCountries();
            setCountriesData(fetchedCountriesData)
        }

        fetchedCountries();
    },[setCountriesData])

    console.log('Country: ', countriesData);

    return (
        <>
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}} >
                <option value="">Global</option>
                {countriesData.map( (country, i) => (
                    <option value={country} key={i}> {country} </option>
                ))}
            </NativeSelect>
        </FormControl>
        </>
    )
}

export default CountyPicker;