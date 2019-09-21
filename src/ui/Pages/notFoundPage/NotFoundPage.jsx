import React, { Component } from 'react';

class NotFoundPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      const pStyle = { color: 'red' };
      return (
        <div>
          <p style={pStyle}>Cannot find the web page. Please contact professor wang through https://github.com/wcy16</p>
        </div>
      );
    }
}

export default NotFoundPage;
