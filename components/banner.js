import React, {Component, PropTypes}from 'react';
import classNames from 'classnames';
import  * as Util  from '../util/util';
import Layout from '../util/layout';
import Depot from '../util/depot';


var _layout = new Layout();

var Banner = React.createClass({
    propTypes: {
        items: PropTypes.array.isRequired,
        current: React.PropTypes.number.isRequired,
        layout: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired
    },
    getInitialState: function() {
        return {
            items: this.props.items,
            figures: _layout[this.props.layout].figures( this.props, this.props.items, 0),
            rotationY: 0
        };
    },
    getDefaultProps :function(){
    },
    componentDidMount: function() {

    },
    componentWillMount: function() {
        this.depot = Depot( this.getInitialState(), this.props, this.setState.bind(this));
        this.onRotate = this.depot.onRotate.bind(this);       
    },
    componentWillReceiveProps:function(nextProps){
        console.log('props change');
        console.log(nextProps);
        this.depot.onNextProps(nextProps);
    },
    render: function() {
        // console.log('rander');
        var angle = 2 * Math.PI / this.state.figures.length;
        var figures =  this.state.figures.map(function(d,i) {
                return (
                    <li key={i}  style={Util.figureStyle(d)}>
                        <a title={d.title} href={d.link} target="_blank">
                            <img className="image" src={d.image} />
                        </a>
                    </li>
                ); 
        });
        return (
            <div>
                <p></p>
                <div className = {'mdBanner'}>
                    <a className={'btnPrev'} href={'#'} onClick={Util.partial(this.onRotate,-angle)}>to PREV</a><br/>
                    <a className={'btnNext'} href={'#'} onClick={Util.partial(this.onRotate,+angle)}>to NEXT</a><br/>
                    <ul className={"mdBanner-list"} ref="bannerList">
                        {figures}
                    </ul>
                </div>                
            </div>
        );

    }
});
export default  Banner;
