import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
    sectionImg: {
        padding: theme.spacing.unit
    },
    sectionHeading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular
    }
});

class ItemsList extends React.Component {
    render() {
        const { classes } = this.props;
        const item = this.props.item;
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.sectionHeading}>{item.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <img className={classes.sectionImg} src={item.image} height="200" />
                    <Typography>
                        {item.description}<br /><br />
                        <Link to={`/items/${item.id}`}>Read more</Link>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

ItemsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemsList);