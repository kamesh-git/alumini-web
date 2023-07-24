import { Box, Button, Container, InputAdornment, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'

const NotifyEvents = ({ type }) => {

    const handlesubmit = e => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        ['notifyEventstitle','notifyEventscontent','notifyEventsdate'].map()
    }
    return (
        <Container maxWidth='xs'>
            <Typography textAlign={'center'} component="h1" variant="h5">
                Create Notification
            </Typography>
            <Box sx={{ mt: 3 }} component={'form'} onSubmit={handlesubmit}>
                <TextField
                    required
                    fullWidth
                    label='Title'
                    type='text'
                    name='notifyEventstitle'
                />
                <TextareaAutosize
                    required
                    minRows={5}
                    name='notifyEventscontent'
                    style={{ width: '100%', borderRadius: '5px', margin: '10px 0', padding: '5px 15px', fontWeight: '400', fontSize: '1rem', fontFamily: '"Roboto","Helvetica","Arial",sans-serif' }}
                    placeholder='Content'
                />
                <TextField
                    required
                    fullWidth
                    label={type == 'events' || 'Expiry date'}
                    type='date'
                    name='notifyEventsdate'
                    variant='outlined'
                    InputProps={{ startAdornment: <InputAdornment position='start'></InputAdornment> }}
                    sx={{ mb: 2 }}
                />
                <Button
                    fullWidth
                    variant={'contained'}
                    type='submit'
                >
                    Submit
                </Button>
            </Box>
        </Container>
    )
}

export default NotifyEvents