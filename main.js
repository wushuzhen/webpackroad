// ES6的模块化语法  import $ from 'jquery'
import $ from 'jquery'
import './src/css/index.css'
import './src/css/1.less'
// import './src/css/2.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

$(function () {
  $('li:odd').css('backgroundColor', 'red')
  $('li:even').css('backgroundColor', 'yellow')
})