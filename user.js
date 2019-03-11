// ==UserScript==
// @name         Niwa Weather Map
// @namespace    https://gitlab.com/jonohill/userscript-niwaweathermap
// @version      1.0
// @description  Adjust the weather map time at your leisure
// @author       Jono Hill
// @match        https://weather.niwa.co.nz/weathermap
// @grant        none
// ==/UserScript==

(function () {
    'use strict'
    
    const slideShow = document.querySelector('.cycle-slideshow')
    const slides = document.querySelectorAll('.cycle-slide')

    let slideCount = slides.length

    function slideMouseMove(evt) {
        console.log(evt.clientX)
        let sliverWidth = this.width / slideCount
        let rect = this.getBoundingClientRect()
        let x = evt.clientX - rect.left
        let sliverNum = Math.floor(x / sliverWidth)
        $(slideShow).cycle('goto', sliverNum)
    }
    
    for (let s of slides) {
        s.addEventListener('mousemove', slideMouseMove)
    }

})()
