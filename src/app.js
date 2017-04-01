import common from './css/common.css';
import Layer from './components/layer/layer.js';

const App = function(){
    var dom = document.getElementById('app');
    var layer = new Layer();

    dom.innerHTML = layer.tpl({
        name:'Jain',
        arr:['apple','xiami','oppo']
    });

    const NUM = 1;
    // alert(NUM);
    console.log('layer');
}

new App();