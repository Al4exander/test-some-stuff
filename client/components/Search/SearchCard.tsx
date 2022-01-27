import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Styles from './Search.module.scss';

const SearchCard = ({
    src, text, alt,
}) => {
    return (
        <Card className={Styles.search}>
            <CardMedia
                component = 'img'
                image = { src }
                alt = { alt } />
            <CardContent>
                <Typography variant = 'body2' color = 'text.secondary'>
                    { text }
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label = 'add to favorites'>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label = 'share'>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default SearchCard;
