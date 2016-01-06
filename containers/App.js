import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Banner from '../components/banner'
import * as BannerAction from '../actions/banner'



// class App extends Component {
//   render() {
//    const { banner , actions } = this.props
//     return (
//       <div>
//         <Banner  items={ banner.items } current={banner.current}  actions={ actions }  layout={'itunes'} width={400} duration={50} ease={"linear"}  />
//       </div>
//     )
//   }
// }

var App = React.createClass({
    propTypes: {
      banner: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired
    },
    getInitialState: function() {
        var state = {
            layout: 'itunes',
            width: 400,
            duration: 500 ,
            ease: 'linear'           
        };
        var _this = this;

        // var gui = new dat.GUI();
        // this.controller = gui.add(Object.assign({},state), 'duration',500, 10000).step(100);
        // this.controller.onFinishChange(function(value) {
        //     console.log(this);
        //     var outputState  = {}; 
        //     outputState[this.property] = value;

        //     _this.setState(Object.assign({},_this.state,outputState).bind(_this);
        // });

        return state;
    },
    getDefaultProps :function(){
    },
    componentDidMount: function() {
    },
    componentWillMount: function() {   
    },
    componentWillReceiveProps:function(nextProps){
    },
    render: function() {
     const { banner , actions } = this.props
      return (
        <div>
            <Banner  items={ banner.items } current={banner.current}  actions={ actions }  layout={'itunes'} width={400} duration={this.state.duration} ease={"linear"}  />
        </div> 
        );
    }
});

function mapStateToProps(state) {
  return {
    banner: state.banner
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BannerAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
