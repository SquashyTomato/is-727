'use strict';

export default function(value) {
    switch (typeof value) {
        case 'number':
            return (value - 727 === 0);
        case 'string':
            return (parseInt(value) - 727 === 0);
        default:
            return false;
    };
};