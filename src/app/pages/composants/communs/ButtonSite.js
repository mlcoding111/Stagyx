import React from "react";
import { Button } from 'react-bootstrap';

export class ButtonSite extends React.Component{

    render() {
        return (
            <>
                <Button style={this.props.bgMessageButton}><span style={this.props.messageButtonColor}>{ this.props.messageButton }</span></Button>
            </>
        );
    }
}