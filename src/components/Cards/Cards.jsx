import React from 'react';

import cx from 'classnames';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid, } from '@material-ui/core';
import styles from './Cards.module.css';

import CardComponent from './Card/Card';


const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate }}) => {
    // console.log('CardsProps: ', props);
    if(!confirmed) {
        return 'loading...'
    }

    return (
        <div className={styles.container}>

            <Grid container spacing={3} justify="center">
                <CardComponent
                    cardtitle="Infected"
                    value={confirmed.value}
                    lastUpdate = {lastUpdate}
                    cardsubtitle = "Number of active cases of COVID-19"
                    className = {styles.infected}
                />

                <CardComponent
                    cardtitle="Deaths"
                    value={deaths.value}
                    lastUpdate = {lastUpdate}
                    cardsubtitle = "Number of death cases of COVID-19"
                    className = {styles.deaths}
                />

                <CardComponent
                    cardtitle="Recovered"
                    value={recovered.value}
                    lastUpdate = {lastUpdate}
                    cardsubtitle = "Number of recovery cases of COVID-19"
                    className = {styles.recovered}
                />

            </Grid>

        </div>
    )
}

export default Cards;