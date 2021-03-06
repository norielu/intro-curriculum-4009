'use strict';
const $ = require('jquery');
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

const loadavg = $('#loadavg'); // index.jade にあるpタグのid（この場所にappendChild的なことをしている）

const socket = require('socket.io-client')('http://localhost:8000');
socket.on('server-status', (data) => {
  loadavg.text(data.loadavg.toString() + ', ' + data.uptime); // data.loadavg は配列なのでtoString()で文字列にしているが、そのままでも表示のされ方は同じ
});

socket.on('connect', () => {
  console.log('接続しました。');
});

socket.on('disconnect', () => {
  console.log('切断しました。');
});