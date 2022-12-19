/*
 * @Author: Lavender
 * @Date: 2021-12-14 20:14:27
 * @LastEditors: Lavender
 * @LastEditTime: 2021-12-18 15:17:34
 * @Description: 自定义元素的样式定义
 * @FilePath: /argo_bpmn/bpmnjs/src/components/utils/util.js
 */

const customElements = ['bpmn:StartEvent','bpmn:docker','bpmn:pythonscript']
const customConfig = {
    'bpmn:docker':{
        'url':require('../../assets/docker.png'),
        'attr':{x:0,y:0,width:48,height:48},
    },
    'bpmn:pythonscript':{
        'url':require('../../assets/pythonscript.png'),
        'attr':{x:0,y:0,width:48,height:48}
    }
}

const hasLabelElements=['bpmn:StartEvent','bpmn:pythonscript','bpmn:docker']

export {customElements,customConfig,hasLabelElements}