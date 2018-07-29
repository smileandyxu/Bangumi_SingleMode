// ==UserScript==
// @name         Bangumi主观打分（伪）
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://bangumi.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    for (var i = 0; i != document.getElementsByClassName('rateInfo').length; ++i) {
        document.getElementsByClassName('rateInfo')[i].style = 'display:none;';
    }
    if (!(document.getElementById('rate-tip') || {}).innerText) {
        document.getElementsByClassName('global_rating')[0].style = 'display:none;';
        document.getElementById('ChartWarpper').style = 'display:none;';
        document.getElementsByClassName('frdScore')[0].style = 'display:none;';
    }
})();