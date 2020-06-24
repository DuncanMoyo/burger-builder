import React, {Component} from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from '../Auxillary/Auxillary'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }
    componentWillMount() {
      this.reqinterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      })
      this.resInterceptor = axios.interceptors.response.use(res => res, null, error => {
        this.setState({error: error})
      })
    }

    componentWillUnmount() {
      console.log('Will Unmount', this.reqinterceptor, this.resInterceptor);
      
      axios.interceptors.request.eject(this.reqinterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }

    render() {
      return(
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </Aux>
      )
    } 
  };
};

export default withErrorHandler;
