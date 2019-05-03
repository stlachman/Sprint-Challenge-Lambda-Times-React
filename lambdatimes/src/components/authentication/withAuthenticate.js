import React from 'react';

const withAuthenticate = LoginComponent => LoggedOutComponent =>  
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      if (localStorage.getItem('username')) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false })
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <LoginComponent />
      } else {
        return <LoggedOutComponent />
      }
    }
  }


export default withAuthenticate;