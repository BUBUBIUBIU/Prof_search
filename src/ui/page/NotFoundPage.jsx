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
          <p style={pStyle}>Cannot find the web page.</p>
        </div>
      );
    }
}

export default NotFoundPage;
