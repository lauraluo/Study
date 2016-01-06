import {TO_NEXT, TO_PREV}from '../actions/banner';

const initialState = {
    current:0,
    items: [
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/12238447_10203600950224001_6411634351160817167_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/12244565_10203609955769134_952712191895439539_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/12265972_10203613334813608_5593025909823429206_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/12248253_10203613333613578_589434527540606903_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/12308039_10203613333173567_143587201602287169_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/12248124_10203613334413598_3005421614401152049_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/12248263_10203626230816000_8407120421047731518_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/12238447_10203600950224001_6411634351160817167_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/12244565_10203609955769134_952712191895439539_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/12265972_10203613334813608_5593025909823429206_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/12248253_10203613333613578_589434527540606903_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/12308039_10203613333173567_143587201602287169_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/12248124_10203613334413598_3005421614401152049_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        },
        {
            url: 'https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/12248263_10203626230816000_8407120421047731518_o.jpg',
            title: 'this items title ',
            link: 'http://dummyimage.com/'
        }
       // {
       //      url: 'http://dummyimage.com/600x400/4db594/fff&text=00',
       //      title: 'this items title ',
       //      link: 'http://dummyimage.com/'
       //  },
       //  {
       //      url: 'http://dummyimage.com/600x400/4db594/fff&text=01',
       //      title: 'this items title ',
       //      link: 'http://dummyimage.com/'
       //  },
       //  {
       //      url: 'http://dummyimage.com/600x400/4db594/fff&text=02',
       //      title: 'this items title ',
       //      link: 'http://dummyimage.com/'
       //  },
       //  {
       //      url: 'http://dummyimage.com/600x400/4db594/fff&text=03',
       //      title: 'this items title ',
       //      link: 'http://dummyimage.com/'
       //  },
       //  {
       //      url: 'http://dummyimage.com/600x400/4db594/fff&text=04',
       //      title: 'this items title ',
       //      link: 'http://dummyimage.com/'
       //  },
       //  {
       //      url: 'http://dummyimage.com/600x400/4db594/fff&text=05',
       //      title: 'this items title ',
       //      link: 'http://dummyimage.com/'
       //  },
       //  {
       //      url: 'http://dummyimage.com/600x400/4db594/fff&text=06',
       //      title: 'this items title ',
       //      link: 'http://dummyimage.com/'
       //  }
    ]
};


export default function banner(state = initialState, action) {
    var maxIndex = state.items.length - 1;
    var minIndex = 0;
    switch (action.type) {
        case TO_NEXT:
            return Object.assign({}, state, {
                current: state.current + 1 > maxIndex ? 0 : state.current + 1
            });
        case TO_PREV:
            return Object.assign({}, state, {
                current: state.current - 1 < 0 ? maxIndex : state.current - 1
            });
        default:
            return state;

        }

};

