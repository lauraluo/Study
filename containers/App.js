import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Banner from '../components/banner'
import * as BannerAction from '../actions/banner'
import  * as Util from'../util/util';



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
            duration: 300 ,
            ease: 'linear' ,
            zDistance:2,          
            xDistance:1.05         
        };
        var _this = this;

        var gui = new dat.GUI();

        this.controller = {};
        this.controller.duration = gui.add(state, 'duration',0, 2000).step(300);
        this.controller.zDistance = gui.add(state, 'zDistance',1, 20).step(0.1);
        this.controller.xDistance = gui.add(state, 'xDistance',0.5, 5).step(0.1);

       Util.mapObj(function(input){
            input.onFinishChange(function(value) {
                // console.log(value);
                _this.setState(Object.assign({},_this.state, state));
            });
        }, this.controller);

        return Object.assign({},state);
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
            <Banner  
                items={ banner.items } 
                current={banner.current}  
                actions={ actions }  
                layout={'itunes'} 
                width={400}
                duration={this.state.duration}
                zDistance={this.state.zDistance}       
                xDistance={this.state.xDistance} 
                ease={"linear"} />
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
