import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CountUp from 'react-countup'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function StateCard({report,loading,state}) {
    const changeToNum = (val) =>{
    
        var arry = val.split(',');
        var concatNum = arry.join("");
        if(concatNum === "") {
          return 0;
        }else{
          return parseInt(concatNum);
        }
    }

    return (
        <div>
                    {!loading && <h1> Global Condition Of The {report[state]["Country_text"]}</h1>}

             <Grid container spacing={3} style={{ marginTop: '30px' }}>
                <Grid item xs={12} sm={4} className='crnum'>
                    <Item elevation={10}>
                        <h1 >Currently Active Cases</h1>
                        {!loading && <h2><CountUp duration={2} start={0} separator=',' end={changeToNum(report[state]['Active Cases_text'])}></CountUp></h2>}
                    {!loading && <h3>{report[state]["Last Update"]}</h3>}
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} className='crnum'>
                    <Item elevation={10}>
                        <h1>New Cases</h1>
                        {!loading && <h2><CountUp duration={2} start={0} separator=',' end={changeToNum(report[state]['New Cases_text'])}></CountUp></h2>}
                        {!loading && <h3>{report[state]["Last Update"]}</h3>}
                    
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} className='crnum'>
                    <Item elevation={10}>
                        <h1>New Death Cases</h1>
                        {!loading && <h2><CountUp duration={2} start={0} separator=',' end={changeToNum(report[state]['New Deaths_text'])}></CountUp></h2>}
                        {!loading && <h3>{report[state]["Last Update"]}</h3>}

                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} className='crnum'>
                    <Item elevation={10}>
                        <h1>Total Cases</h1>
                        {!loading && <h2><CountUp duration={2} start={0} separator=',' end={changeToNum(report[state]['Total Cases_text'])}></CountUp></h2>}
                        {!loading && <h3>{report[state]["Last Update"]}</h3>}
                        
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} className='crnum'>
                    <Item elevation={10}>
                        <h1>Total Recovered Cases</h1>
                        
                        {!loading && <h2><CountUp duration={2} start={0} separator=',' end={changeToNum(report[state]['Total Recovered_text'])}></CountUp></h2>}
                        {!loading && <h3>{report[state]["Last Update"]}</h3>}

                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} className='crnum'>
                    <Item elevation={10}>
                        <h1>Total Death Cases</h1>
                        {!loading && <h2><CountUp duration={2} start={0} separator=',' end={changeToNum(report[state]['Total Deaths_text'])}></CountUp></h2>}
                        {!loading && <h3>{report[state]["Last Update"]}</h3>}

                    </Item>
                </Grid>


            </Grid>
        </div>
    )
}
