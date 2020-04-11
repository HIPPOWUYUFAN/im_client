import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// 注册组件
AppRegistry.registerComponent('App', () => App);
 
// 启动 App 组件
AppRegistry.runApplication('App', {
  // 启动时传给 App 组件的属性
  initialProps: {},
  // 渲染 App 的 DOM 容器
  rootTag: document.getElementById('root')
});