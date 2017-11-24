import './layer.less';
//万物皆可引入
import tpl from './layer.ejs.tpl';

function layer () {
    return {
        name: 'layer',
        tpl: tpl
    }
}

export default layer;