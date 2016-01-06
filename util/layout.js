import Ease from 'ease-functions';
import  * as Util from'./util';

export  default function Layout(){
    var layout = this;
    layout.itunes = {
            distance: function distance(width, sides) {
                return Math.round(width * Math.log(sides));
            },
            figures: function figures(width, images, initial) {
                var sides = images.length;
                var r = 1280 / 2;
                var angle = Math.PI * 2 / (sides);
                var distance =  layout.itunes.distance(width, sides);
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

                    // console.log('d:  '+d+'===================');
                    // console.log('angleR:  '+angleR);
                    // console.log('sin:  '+Math.sin(angleR));
                    // console.log('ratio:  '+ratio);
                    // console.log('===================');
                    return {
                        rotateY: thisRotate * ratio,
                        translateX: (r * Math.cos(angleR)) * ratio,
                        translateZ: Math.max((0 - r * Math.abs(1 - Math.sin(angleR))) * ratio, 0 - r),
                        opacity: 1/*1*Math.sin(angleR)*/,
                        present: true,
                        key: d,
                        image: images[d].url

                    };
                });
            }
    };

   
    
    return layout; 
};



