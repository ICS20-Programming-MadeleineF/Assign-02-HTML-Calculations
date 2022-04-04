// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  const inches = parseFloat(document.getElementById('inches-to-cm').value)

  // process
  const cm = (2.54 * inches)

  // output
  document.getElementById('cm').innerHTML = 'Your height in cm is: ' + cm.toFixed(2) + ' cm '
}

// button
function myButtonClicked() {
        alert("You're short")
}
// button
function secondPage() {
  window.location='https://assign-02-html-calculations.madeleineforger.repl.co/more_index.html';
}