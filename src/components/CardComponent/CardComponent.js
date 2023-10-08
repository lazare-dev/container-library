import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { getCardStyles } from './styles';

function CardComponent({ type = 'primary' }) {
  const theme = useTheme();
  const styles = getCardStyles(theme, type);

  return (
    <Box 
      sx={{ 
        maxWidth: 345, 
        margin: 2, 
        bgcolor: 'white',
        boxShadow: `3px 3px 5px 0px ${styles.shadowColor}`,
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" style={{ color: styles.titleColor }}>
          {type.charAt(0).toUpperCase() + type.slice(1)} Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Some brief description or content here.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CardComponent;
