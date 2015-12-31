import React, {Component, PropTypes}from 'react';

var Banner = React.createClass({
    propTypes: {
        banner: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    },
    //prepare  five actor for  3d Animation Scenes
    getNextActors:function(){
        //check current    in reason
        var {items,current} = this.props.banner;
        var newActors = [];
        var getActor  = function(shift) {
            var result = 0;
            var shiftCount = Math.abs(shift); 

            if (shift < 0 &&  shiftCount <  items.length-1) {
                result = current + shift < 0 ? items.length + shift : current + shift;
            } else if ( shift >= 0 &&  shiftCount <  items.length-1) {
                result = current + shift > items.length - 1 ? 0 + shift : current + shift;
            }else {
                result = current;
            }


            return result;
        };

        for (var i = -2 ; i <= 2 ; i++ ){
             newActors.push(getActor(i ));
        }
        console.log('newActors =========================');
        console.log(newActors);

        return newActors;
    },
    getInitialState: function() {
        return {
            actors: this.getNextActors(),
            isRunning:false
        };
    },
    getDefaultProps :function(){
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    componentWillReceiveProps:function(){
        console.log('componentWillReceiveProps');
        var nextState = this.getNextActors();
        this.setState(nextState);

    },
    render: function() {

        var actorsNode = this.state.actors.map(function(actor,index) {
            return (<span key={index}>{actor} - </span>);    
        });

        var itemsNode = this.props.banner.items.map(function(item,index) {
            var className = {

            };
            return (<li key={index} className={} ><a title={item.title} href={item.link} target="_blank"><img className="image" src={item.url} /></a></li>);    
        });



        return (
            <div>
                <a href={'#'} onClick={this.props.actions.toPrev}>to PREV</a><br/>
                <a href={'#'} onClick={this.props.actions.toNext}>to NEXT</a><br/>
                <p>current:{this.props.banner.current}</p>
                <p>actors:{actorsNode}</p>
                <ul>
                { itemsNode }
                </ul>
            </div>

        );

    }
});
export default  Banner;