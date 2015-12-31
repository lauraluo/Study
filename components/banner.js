import React, {Component, PropTypes}from 'react';
import classNames from 'classnames';

var Banner = React.createClass({
    propTypes: {
        banner: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    },
    //prepare  five actor for  3d Animation Scenes
    getNextActors:function(props){
        //check current    in reason
        var {items,current} = props.banner;
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

            console.log(result);

            return result;
        };

        for (var i = -2 ; i <= 2 ; i++ ){
             newActors.push(items[getActor( i )]);
        }
        //other items



        return newActors;
    },
    getInitialState: function() {
        return {
            actors: this.getNextActors(this.props),
            isRunning:false
        };
    },
    getDefaultProps :function(){
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    componentWillReceiveProps:function(nextProps){
        console.log('componentWillReceiveProps');
        var nextState = this.getNextActors(nextProps);
        this.setState(Object.assign({},this.state,{actors:nextState}));

    },
    onNext:function(e){
        // console.log('to next');
        // var actorsDOM = $(this.refs.bannerList).find('li');
        // $(actorsDOM).each(function(index,item){
        //     $(item).addClass('go-actors-'+(index-1));
        // });
        this.props.actions.toNext();
    },
    onPrev:function(e){
        // var actorsDOM = $(this.refs.bannerList).find('li');
        // $(actorsDOM).each(function(index,item){
        //     $(item).addClass('go-actors-'+(index+1));
        // });

        this.props.actions.toPrev();
    },
    render: function() {
        console.log('render');
        console.log(this.state.actors);

        var actorsNode = this.state.actors.map(function(item,index) {
            var classID = index;
            var itemClass  =classNames({
                ['set-actors-'+classID] : true
            });
            return (<li key={index} className={itemClass}><a title={item.title} href={item.link} target="_blank"><img className="image" src={item.url} /></a></li>);    
        });

        return (
            <div>
                <a href={'#'} onClick={this.onPrev}>to PREV</a><br/>
                <a href={'#'} onClick={this.onNext}>to NEXT</a><br/>
                <p>current:{this.props.banner.current}</p>
                <div className = {'mdBanner'}>
                    <ul className={"mdBanner-list"} ref="bannerList">
                        {actorsNode}
                    </ul>
                </div>                
            </div>
        );

    }
});
export default  Banner;