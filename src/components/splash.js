import React from 'react';
import Login from './session/sign_in_options';
import Loading from './loading';
import { connect } from 'react-redux';

export class Splash extends React.Component {
  constructor(props){
    super(props);
    console.log("props!!!!@@@@@@@@@@@@@@");
    console.log(props);
    this.state = {
      component : <Loading />
    };
  }


  componentDidMount(){
       // Start counting when the page is loaded
       this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Login /> })
       }, 5000);
  }
  
  componentWillReceiveProps() {
    // if loading is true
    console.log("props!!!!@@@@@@@@@@@@@@");
    console.log(this.props);
    if (this.props.loading.loading) {
      this.setState({ component: <Loading /> });
    } else {
      this.setState({ component: <Login /> });
    }
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle); 
  }

  render() {
    return (
      this.state.component
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps,null)(Splash);