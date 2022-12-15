import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { User as UserIcon } from '../../icons/user';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

export const ProductCard = ({ product, ...rest }) => {
  TimeAgo.addDefaultLocale(en)
  
  const timeAgo = new TimeAgo('en-US')

  const imageFromTypeFile = (value) => {
    const listValue = value.split(".");

    const typeFile = listValue[listValue - 1];

    switch (typeFile) {
      case "doc":
      case "docm":
      case "docx":
      case "dot":
        return "https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_Word_logo_%282013-2019%29.png";
    
      default:
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png";
    }
  }


  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <img
            alt="Product"
            src={imageFromTypeFile(product.value)}
            variant="square"
            width={50}
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {product.name}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <ClockIcon color="action" />
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              Updated {timeAgo.format(Date.parse(product.updateAt))}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <UserIcon color="action" />
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              You
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  )
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
