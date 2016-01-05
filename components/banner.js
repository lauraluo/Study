import React, {Component, PropTypes}from 'react';
import classNames from 'classnames';

import Util from '../util/util';
// import Layout from '../util/layout';
import Depot from '../util/depot';

var Layout;

Layout.itunes = {
        distance: function distance(width, sides) {
            return Math.round(width * Math.log(sides));
        },
        figures: function figures(width, images, initial) {
            var sides = images.length;
            var r = 1280 / 2;
            var angle = Math.PI * 2 / (sides);
            var distance = _exports.classic.distance(width, sides);
            var acceptable = Math.round(initial / angle) * angle;
            var rotate = 20;
            var maxRatio = 0.2;

            function cubicOut(time, begin, change, duration) {
                return change * ((time = time / duration - 1) * time * time + 1) + begin;
            };

            function cubicIn(time, begin, change, duration) {
                return change * (time /= duration) * time * time + begin;
            };

            return Util.range(0, sides).map(function(d) {
                var ratio = 1;
                var angleR =Math.PI*(0.5) - ( d * angle + acceptable)  ; 
                var thisRotate = 0;

                if(Math.abs(Math.cos(angleR)) !=  1  ){
                    ratio =1+  Math.round((cubicIn( sides, 0, maxRatio, sides-1)*10)/10);
                }

                if( Math.sin(angleR) != -1){
                    thisRotate = Math.sin(angleR + Math.PI *0.5)*0.35;   
                }

                console.log('d:  '+d+'===================');
                console.log('angleR:  '+angleR);
                console.log('sin:  '+Math.sin(angleR));
                console.log('ratio:  '+ratio);
                console.log('===================');

                return {
                    rotateY: thisRotate * ratio,
                    translateX: (r * Math.cos(angleR)) * ratio,
                    translateZ: Math.max((0 - r * Math.abs(1 - Math.sin(angleR))) * ratio, 0 - r),
                    opacity: 1*Math.sin(angleR),
                    present: true,
                    key: d,
                    image: images[d]

                };
            });
        }
};

Layout.prism = {
    distance: function apothem(width, sides) {
        return Math.ceil(width / (2 * Math.tan(Math.PI / sides)));
    },
    figures: function figures(width, images, initial) {
        var sides = images.length;
        var angle = 2 * Math.PI / sides;
        var acceptable = Math.round(initial / angle) * angle;
        return Util.range(0, sides).map(function (d) {
            return {
                rotateY: d * angle + acceptable,
                translateX: 0,
                translateZ: _exports.prism.distance(width, sides),
                opacity: 1,
                present: true,
                key: d,
                image: images[d]
            };
        });
    }
};

Layout.classic = {
    distance: function distance(width, sides) {
        return Math.round(width * Math.log(sides));
    },
    figures: function figures(width, images, initial) {
        var sides = images.length;
        var angle = 2 * Math.PI / sides;
        var distance = _exports.classic.distance(width, sides);
        var acceptable = Math.round(initial / angle) * angle;
        return Util.range(0, sides).map(function (d) {
            var angleR = d * angle + acceptable;
            return {
                rotateY: 0,
                translateX: distance * Math.sin(angleR),
                translateZ: distance * Math.cos(angleR),
                opacity: 1,
                present: true,
                key: d,
                image: images[d]
            };
        });
    }
};


var Banner = React.createClass({
    propTypes: {
        // items: PropTypes.object.isRequired,
        // current: PropTypes.object.isRequired
    },
    getActors:function(props){
    },
    getInitialState: function() {
        return {
            items: this.props.banner.items,
            figures: Layout[this.props.layout].figures(this.props.width, this.props.items, 0),
        };
    },
    getDefaultProps :function(){
    },
    componentDidMount: function() {
        // this.depot = Depot(this.getInitialState(), this.props, this.setState.bind(this));
        // this.onRotate = this.depot.onRotate.bind(this);
    },
    componentWillUnmount: function() {
    },
    componentWillReceiveProps:function(nextProps){
        // var nextState = this.getActors(nextProps);
        // this.setState(Object.assign({},this.state,{actors:nextState}));
    },
    onNext:function(e){
        // console.log('to next');
        // var actorsDOM = $(this.refs.bannerList).find('li');
        // $(actorsDOM).each(function(index,item){
        //     $(item).addClass('go-actors-'+(index-1));
        // });
        // this.props.actions.toNext();
    },
    onPrev:function(e){
        // var actorsDOM = $(this.refs.bannerList).find('li');
        // $(actorsDOM).each(function(index,item){
        //     $(item).addClass('go-actors-'+(index+1));
        // });

        // this.props.actions.toPrev();
    },
    render: function() {
        var angle = 2 * Math.PI / this.state.figures.length;
        // var translateZ = -Layout[this.props.layout].distance(this.props.width, this.state.figures.length);
        // var figures = this.state.figures.map(function (d, i) {
        //     // return React.createElement(
        //     //     'figure',
        //     //     { key: i, style: Util.figureStyle(d) },
        //     //     React.createElement('img', { src: d.image, alt: i, height: '100%', width: '100%' })
        //     // );
        // });
        var figures =  this.state.figures.map(function(d,i) {

            return (
                <li key={i} className={itemClass} style={Util.figureStyle(d)}>
                    <a title={d.title} href={d.link} target="_blank">
                        <img className="image" src={d.url} />
                    </a>
                </li>
            );    
        });
        return (
            <div>
                <a href={'#'} onClick={this.onPrev}>to PREV</a><br/>
                <a href={'#'} onClick={this.onNext}>to NEXT</a><br/>
                <p></p>
                <div className = {'mdBanner'}>
                    <ul className={"mdBanner-list"} ref="bannerList">
                    </ul>
                </div>                
            </div>
        );

    }
});
export default  Banner;
