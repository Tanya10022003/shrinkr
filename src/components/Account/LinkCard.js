import React from 'react'
import {Typography,Button,Box} from '@material-ui/core'
import {BarChart as ChartIcon} from '@material-ui/icons'
import format from 'date-fns/format'
const LinkCard = ({id,createdAt,name,longURL,shortCode,totalClicks}) => {
  return (
    <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Box>
            <Typography color="textSecondary" variant="overline">
                Created at {format(createdAt,'d MMM, HH:mm')}
            </Typography>
            <Box style={{marginTop:'10px',marginBottom:'10px'}}>
            <Typography
                variant="h5">{name}
            </Typography>
            <Typography>
                {longURL}
            </Typography>
            </Box>
            <Box style={{display:"flex",alignItems:'center'}}>
                <Box style={{marginRight:'30px'}}>
                    <Typography color="primary"> {window.location.host}/{shortCode}</Typography>
                </Box>
                <Box mx={2}>
                <Button  color="primary" size="small" variant="outlined">Copy</Button>
                </Box>
                <Button  color="secondary" size="small" variant="contained" disableElevation>Delete</Button>
            </Box>

        </Box>
        <Box>
            <Box >
                <Box style={{display:"flex",justifyContent:'center'}}>
                    <Typography>
                        {totalClicks}
                    </Typography>
                    <ChartIcon />
                </Box>
                <Typography variant="overline">Total Clicks</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default LinkCard
