import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextItemsList from './TextItemsList';

const styles = theme => ({
    card: {
        maxWidth: 600,
    },
    media: {
        paddingTop: '100%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class ContentDetail extends React.Component {
    state = {
        item: null,
        expanded: false,
        fetching: false
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://s3.amazonaws.com/dexa-pwa-bucket/bms/details.json`)
            .then(response => response.text())
            .then((text) => {
                let json = JSON.parse(text);
                this.setState({
                    item: json[id],
                    fetching: false
                });
            }
            );
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
        const item = this.state.item;
        return (
            <div>
                {this.state.item ? (
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                    D
                            </Avatar>
                            }
                            action={
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={this.state.item.name}
                            subheader="Last updated: Nov 2018"
                        />
                        <CardMedia
                            className={classes.media}
                            image={this.state.item.image}
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography component="p">
                                {this.state.item.information}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                            <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="Share">
                                <ShareIcon />
                            </IconButton>
                            <IconButton
                                className={classnames(classes.expand, {
                                    [classes.expandOpen]: this.state.expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Causes</Typography>
                                <ul>
                                {
                                    this.state.item.causes.map(causes => (
                                        <TextItemsList item={causes} />
                                    ))
                                }
                                </ul>
                                <Typography variant="h6" gutterBottom>Symptoms</Typography>
                                <ul>
                                {
                                    this.state.item.causes.map(symptoms => (
                                        <TextItemsList item={symptoms} />
                                    ))
                                }
                                </ul>
                                <Typography variant="h6" gutterBottom>Complications</Typography>
                                <ul>
                                {
                                    this.state.item.causes.map(complications => (
                                        <TextItemsList item={complications} />
                                    ))
                                }
                                </ul>

                            </CardContent>
                        </Collapse>
                    </Card>
                ) : "No details found"}
            </div>
        );
    }
}

ContentDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentDetail);