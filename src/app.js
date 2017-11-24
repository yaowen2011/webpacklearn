import common from './css/common.css';
import Layer from './components/layer/layer.js';
const App = function () {
    var dom = document.getElementById('app');
    var layer = new Layer();
    dom.innerHTML = layer.tpl({
        name: 'ejs实现的模板',
        arr: [
            '类别一',
            '类别二',
            '类别三',
            '类别四',
            '类别五',
        ]
    });
    console.log(layer);
}

new App();