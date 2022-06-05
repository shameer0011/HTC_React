import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Post(props) {
    const { post, hadleClick, deletePost, authData, likePost } = props;

    const [expanded, setExpanded] = React.useState(false);
    // const { newPost } = authData;
    // console.log(newPost, "authData 37")
    // console.log(newPost?.result?._id, "authData 38")
    console.log(authData?.newPost?.googleId, "google iddd");
    console.log(authData?.newPost?.result?._id, "result id");
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const Likes = () => {
        console.log(post.likes, "post likesss")
        if (post.likes.length) {
            return post.likes.find((like) => like === (authData?.newPost?.googleId || authData?.newPost?.result?._id)) ?
                (
                    <>
                        <ThumbUpAltIcon fontSize="small" /> {post.likes.length}
                    </>
                )
                :
                (
                    <>
                        <ThumbUpAltOutlined fontSize="small" />{post.likes.length}
                    </>
                )
        }
        return <ThumbUpAltOutlined fontSize="small" />

    }
    return (
        <>

            <Card sx={{ maxWidth: 300 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" disabled={authData == null} onClick={(e) => hadleClick(post._id)}>

                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={post.title}
                    subheader={post.createdAt}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={post.selectedFile}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" >

                        {post.message}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                        {post.tags.join(',')}
                    </Typography>

                </CardContent>
                <CardActions disableSpacing>

                    <Button size="small" color="primary" disabled={authData == 'null'} onClick={() => likePost(post._id)}>
                        <Likes />
                    </Button>

                    <IconButton aria-label="share" onClick={() => deletePost(post._id)}>
                        <DeleteIcon disabled={authData == null} />
                    </IconButton>


                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        disabled={authData == null}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            {/* Description */}
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>

                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

        </>
    );
}
