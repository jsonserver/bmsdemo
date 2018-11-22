import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    sectionImg: {
        padding: theme.spacing.unit
    },
    sectionHeading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular
    }
});

class TextItemsList extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <li><Typography variant="body1" gutterBottom>{item}</Typography></li>
        );
    }
}

TextItemsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextItemsList);