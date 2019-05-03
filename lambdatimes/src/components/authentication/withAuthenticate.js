import React from 'react';

const withAuthenticate = ProtectedContent => OpenContent =>  
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
        return <ProtectedContent loggedIn={this.state.loggedIn}/>
      } else {
        return <OpenContent loggedIn={this.state.loggedIn}/>
      }
    }
  }


export default withAuthenticate;