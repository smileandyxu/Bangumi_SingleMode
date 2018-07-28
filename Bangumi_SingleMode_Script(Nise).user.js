// ==UserScript==
// @name         Bangumi单机模式（伪）
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://bangumi.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var title = document.title;
    if (title.indexOf('Bangumi') != -1){
        var object2 = document.getElementById('columnHomeB');
        if (object2 != null){
            object2.parentNode.removeChild(object2);
        }
    }
})();
