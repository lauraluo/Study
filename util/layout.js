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
                var r = 960 / 2;
                var angle = Math.PI * 2 / (sides);
                var distance =  layout.itunes.distance(width, sides);
                var acceptable = Math.round(initial / angle) * angle;
                var rotate = 20;
                var maxRatio = 0.4;

                function cubicOut(time, begin, change, duration) {
                    return change * ((time = time / duration - 1) * time * time + 1) + begin;
                };

                function cubicIn(time, begin, change, duration) {
                    return change * (time /= duration) * time * time + begin;
                };

                return Util.range(0, sides).map(function(d) {
                    var ratio = {};
                    var angleR =Math.PI*(0.5) - ( d * angle + acceptable)  ; 
                    var thisRotate = 0.5;

                    if(Math.abs(Math.cos(angleR)) !=  1  ){
                        ratio.easeOut =1+  Math.round((cubicOut( sides, 0, maxRatio, sides-1)*10)/10);
                        ratio.easeIn =1+  Math.round((cubicIn( sides, 0, maxRatio, sides-1)*10)/10);
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
                        rotateY: 0-thisRotate * ratio.easeOut,
                        translateX: (r * Math.cos(angleR)) ,
                        translateZ: Math.max((0 - r * Math.abs(1 - Math.sin(angleR))) * ratio.easeOut, 0 - r),
                        opacity: Math.sin(angleR) !=1 ? Math.sin(angleR ) /ratio.easeOut : 1,
                        present: true,
                        key: d,
                        image: images[d].url

                    };
                });
            }
    };

   
    
    return layout; 
};



