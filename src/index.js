import _ from 'lodash';

function component(){
    const element = document.createElement('div');

    //1. Lodash, currently included via a script, is required for this line to work
    //2. `npm install --save lodash` Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    return element;
}

document.body.appendChild(component())
