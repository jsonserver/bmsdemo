import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Loader from './Loader';
import ItemsList from './ItemsList';

const styles = theme => ({
    root: {
        width: "100%",
    },
    pageHeading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
        padding: theme.spacing.unit
    },
    footer: {
        padding: 12,
        fontSize: theme.typography.pxToRem(11),
        fontWeight: theme.typography.fontWeightRegular
    }
});

class Content extends React.Component {
    state = {
        items: [],
        expanded: false,
        fetching: false
    };

    constructor() {
        super()
        this.getItems()
    }

    getItems = () => {
        fetch(`https://jsonserver.github.io/bms.json`)
            .then(response => response.text())
            .then((text) => {
                let json = JSON.parse(text);
                this.setState({ 
                    items: json,
                    fetching: false
                });
            });
    }

    render() {
        const { classes } = this.props;
        const fetching  = this.state.fetching;

        return (
            <div className={classes.root}>
                <Typography className={classes.pageHeading}>Please click on the links below to access information on:</Typography>
                {
                    fetching && <Loader/>
                }
                {
                    !fetching && 
                    <div>
                        {
                            this.state.items.map(items => (
                                <ItemsList item={items}  key={items.id}/>
                            ))
                        }
                    </div>
                }
                <Typography className={classes.footer}>This section contains reference information only, is general in nature and intended to provide a general overview for the general public in the UK. It is not intended to replace in any way the opinion of a healthcare professional. For specific information about this pathology and/or detection, diagnosis, prognosis, administration and, where applicable, appropriate treatment for each specific case, please promptly consult a healthcare professional. The use of this website is subject to the legal notice, the privacy and cookie policy, and the applicable laws and regulations.</Typography>
            </div>
        );
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);