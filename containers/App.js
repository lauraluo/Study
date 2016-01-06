import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Banner from '../components/banner'
import * as BannerAction from '../actions/banner'

// var App = React.createClass({
//   render: function() {
//    const { banner , actions } = this.props
//     return (
//       <div>
//         <Banner  banner={ banner }  action={ actions } />
//       </div>
//     );
//   } 
// });
class App extends Component {
  render() {
   const { banner , actions } = this.props
    return (
      <div>
        <Banner  items={ banner.items } current={banner.current}  actions={ actions }  layout={'itunes'} width={400} duration={50} ease={"linear"}  />
      </div>
    )
  }
}

App.propTypes = {
  banner: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

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
