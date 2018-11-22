import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function ContentPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h3>Please click on the links below to access information on:</h3>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Atrial Fibrillation</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <img src="https://www.eliquis.co.uk/servlet/servlet.FileDownload?file=00P2000000mZPNZEA4" height="200" />
                    <Typography>
                        AF is a heart condition that makes your heart beat out of rhythm and this can sometimes be fast.<br />
                        Some people with AF do not experience any symptoms, although a fast heartbeat may be felt (some people describe these as ‘palpitations’). Other possible symptoms include: Tiredness, Shortness of breath, Chest pain (angina), Dizziness.<br />
                        AF can also be described as ‘persistent’, when episodes last seven days or more, ‘paroxysmal’ which spontaneously terminates within 7 days, usually within 48 hours, or ‘permanent’, when the heart rhythm disturbance is continuous.<br />
                        The heart is made up of four chambers - the left and right atria (two upper chambers), and the left and right ventricles (two lower chambers).<br />
                        AF occurs when chaotic electrical activity develops in the atria, disturbing your heart’s natural rhythm. As a result, the atria don’t contract properly, which means your heart cannot pump blood as efficiently as usual.<br />
                        <Link to={`/items/af`}>Read More ...</Link>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Venous Thromboembolism</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <img src="https://www.eliquis.co.uk/servlet/servlet.FileDownload?file=00P2000000mZPN0EAO" height="200" />
                    <Typography>
                        Blood clots occur when blood cells pool and stick together. Your body naturally forms blood clots to stop bleeding at sites of injury. However, sometimes blood clots can form inside veins.<br />
                        Venous thromboembolism (or VTE for short) is a term which covers two related conditions; Deep vein thrombosis (or DVT) and Pulmonary embolism (or PE). When a blood clot blocks a vessel, most frequently within the deep veins of the legs, it is termed DVT. Part of the blood clot from a DVT may also break off and travel to the lungs resulting in a PE.<br />
                        VTE is fairly common. Approximately 1 in 20 people will have a VTE in their lifetime.<br />
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

ContentPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentPanel);