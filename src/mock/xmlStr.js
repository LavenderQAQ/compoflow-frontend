/*
 * @Author: Lavender
 * @Date: 2021-12-14 20:14:27
 * @LastEditors: Lavender
 * @LastEditTime: 2022-03-26 16:08:15
 * @Description: 导入xml信息
 * @FilePath: /bpmn_workflow/src/mock/xmlStr.js
 */

// TODO 改成从后端读取xml
export var xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:metadata="http://metadata" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="rtdtrdt" isExecutable="false">
    <task id="Docker_0pizbzq" name="docker2" metadata:image="platform-frontend:0.1.1-master-11" custom="1" port="41235" target="/test2">
      <outgoing>Flow_1y469ct</outgoing>
    </task>
    <task id="Docker_19t1frr" name="docker1" metadata:image="platform-frontend:0.1.2-master-12" custom="1" port="41234" target="/test1">
      <outgoing>Flow_06qepnj</outgoing>
    </task>
    <task id="Pythonscript_1ae4mn9" custom="2">
      <incoming>Flow_1y469ct</incoming>
      <outgoing>Flow_1naiv6n</outgoing>
    </task>
    <sequenceFlow id="Flow_1y469ct" sourceRef="Docker_0pizbzq" targetRef="Pythonscript_1ae4mn9" />
    <task id="Pythonscript_0h416eb" custom="3">
      <incoming>Flow_06qepnj</incoming>
      <incoming>Flow_1naiv6n</incoming>
    </task>
    <sequenceFlow id="Flow_06qepnj" sourceRef="Docker_19t1frr" targetRef="Pythonscript_0h416eb" />
    <sequenceFlow id="Flow_1naiv6n" sourceRef="Pythonscript_1ae4mn9" targetRef="Pythonscript_0h416eb" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="rtdtrdt">
      <bpmndi:BPMNEdge id="Flow_1y469ct_di" bpmnElement="Flow_1y469ct">
        <di:waypoint x="344" y="430" />
        <di:waypoint x="420" y="430" />
        <di:waypoint x="420" y="470" />
        <di:waypoint x="496" y="470" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_06qepnj_di" bpmnElement="Flow_06qepnj">
        <di:waypoint x="434" y="160" />
        <di:waypoint x="655" y="160" />
        <di:waypoint x="655" y="330" />
        <di:waypoint x="876" y="330" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1naiv6n_di" bpmnElement="Flow_1naiv6n">
        <di:waypoint x="544" y="460" />
        <di:waypoint x="710" y="460" />
        <di:waypoint x="710" y="340" />
        <di:waypoint x="876" y="340" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Docker_0pizbzq_di" bpmnElement="Docker_0pizbzq">
        <omgdc:Bounds x="296" y="406" width="48.00001" height="48" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Docker_19t1frr_di" bpmnElement="Docker_19t1frr">
        <omgdc:Bounds x="386" y="136" width="48.00001" height="48" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Pythonscript_1ae4mn9_di" bpmnElement="Pythonscript_1ae4mn9">
        <omgdc:Bounds x="496" y="436" width="48" height="48" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Pythonscript_0h416eb_di" bpmnElement="Pythonscript_0h416eb">
        <omgdc:Bounds x="876" y="316" width="48" height="48" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`