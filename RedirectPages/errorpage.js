import React from "react";
const config = require('config');
const baseUrl = config.get('clientUrl');

class Error extends React.Component {
    render(){
        return(
            <div>
                {this.props.error &&
                    <h2>
                        Error 404 this page is not found
                        <a href={baseUrl}> Go back </a>
                    </h2>
                }
                {!this.props.error &&
                    <h2>
                        You are being redirected to <a href={this.props.shortUrl}> {this.props.shortUrl} </a>
                    </h2>
                }
            </div>
        );
    }
}

export default Error;