import {TO_NEXT, TO_PREV}from '../actions/banner';

const initialState = {
    current:0,
    items: [{
        url: 'http://dummyimage.com/600x400/000/fff&text=00',
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'http://dummyimage.com/600x400/000/fff&text=01',
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'http://dummyimage.com/600x400/000/fff&text=02',
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'http://dummyimage.com/600x400/000/fff&text=03',
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'http://dummyimage.com/600x400/000/fff&text=04',
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'http://dummyimage.com/600x400/000/fff&text=05',
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    },
    {
        url: 'http://dummyimage.com/600x400/000/fff&text=06',
        title: 'this items title ',
        link: 'http://dummyimage.com/'
    }
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

