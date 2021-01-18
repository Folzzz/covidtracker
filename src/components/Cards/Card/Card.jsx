import React from 'react';
import cx from 'classnames';
import CountUp from 'react-countup';

import { Card, CardContent, Typography, Grid, } from '@material-ui/core';
import styles from './Card.module.css';


const CardComponent = ({ cardtitle, value, cardsubtitle, lastUpdate, className}) => {
    return (
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, className)} >
            <CardContent>
                <Typography>
                    {cardtitle}
                </Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary" >
                    {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2" >
                    {cardsubtitle}
                </Typography>
            </CardContent>
        </Grid>
    )
}

export default CardComponent
