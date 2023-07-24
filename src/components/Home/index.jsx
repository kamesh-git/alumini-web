import { AccountCircleOutlined } from '@mui/icons-material'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './Home.module.css'

const notifications = [
  {
    date: '19/02/2002',
    title: 'Intership',
    description: 'intern',
    author: 'saravanan',
  },
  {
    date: '19/02/2002',
    title: 'Intership',
    description: 'intern',
    author: 'saravanan',
  },
  {
    date: '19/07/2002',
    title: 'Intership',
    description: 'intern',
    author: 'saravanan',
  },
  {
    date: '19/02/2002',
    title: 'Intership',
    description: 'intern',
    author: 'saravanan',
  },
  {
    date: '19/02/2002',
    title: 'Intership',
    description: 'intern',
    author: 'saravanan',
  },
]

const months = ['JAN','FEB','MAR','APR','MAY','JUN','JULY','AUG','SEP','OCT','NOV','DEC']

const EventsCard = (props) => (
  <>
    {props.events.map((item) => (
      <Grid padding={1} paddingTop={3.5} item sx={{ backgroundColor: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flexGrow: '1', marginTop: "auto" }}>
          <Typography align='left' variant='h5'>{item.title}</Typography>
          <small style={{ color: 'grey', fontSize: '10px' }}>posted on:{item.date}</small>
        </div>
        <div>
          <Typography align='center' fontSize={10} variant='body2'>{months[parseInt(item.date.split('/')[1])-1]}</Typography>
          <Typography variant='h5'>{item.date.split('/')[0]}</Typography>
          <Typography align='center' fontSize={10} variant='body2'>{item.date.split('/')[2]}</Typography>
        </div>
      </Grid>
    ))}
  </>
)
const NotificationCard = (props) => (
  <>
    {props.notifications.map((item) => (
      <Grid padding={1} item sx={{ backgroundColor: 'white', cursor: 'pointer' }}>
        <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}><Typography align='right' variant='body2'>{item.author}</Typography><AccountCircleOutlined /></div>
        <Typography align='left' variant='h5'>{item.title}</Typography>
        <small style={{ color: 'grey', fontSize: '10px' }}>posted on: {item.date}</small>
      </Grid>
    ))}
  </>
)

const NotifyEventsContainer = ({ title, childComp }) => (
  <Grid container item md={6}>
    <Grid item><Typography textTransform={'uppercase'} color={'white'} variant='h5'>{title}</Typography></Grid>
    <Grid className={styles.overflow} flexWrap={'nowrap'} container rowGap={3} item flexDirection={'column'}>
      {childComp}
    </Grid>
  </Grid>
)

const Home = () => {
  return (
    <>
      <Box>
        <img style={{ width: '100%' }} src="/images/alumini.png" alt="" />
      </Box>
      <Box sx={{ backgroundColor: "var(--brand-color)" }} padding={5}>
        <Grid container columnSpacing={4}>
          <NotifyEventsContainer title={'notification'} childComp={<NotificationCard notifications={notifications} />} />
          <NotifyEventsContainer title={'events'} childComp={<EventsCard events={notifications} />} />
        </Grid>
      </Box>
    </>
  )
}

export default Home