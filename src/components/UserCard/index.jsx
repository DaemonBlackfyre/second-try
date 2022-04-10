import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function UserCard({ user }) {
  const image = 'https://robohash.org/' + user.username
  const fieldName = user.name
  const fieldMail = user.email
  const fieldCompanyName = user.company.name
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fieldName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {fieldCompanyName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {fieldMail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
