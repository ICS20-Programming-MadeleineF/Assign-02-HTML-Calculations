// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates cm to feet
 */
function calculate () {
  // input
  const cm = parseFloat(document.getElementById('cm-to-feet').value)

  // process
  const feet = (cm / 30.48)

  // output
  document.getElementById('feet').innerHTML = 'Your shoe size in feet is: ' + feet.toFixed(2) + ' feet '
}

// button
function firstPage() {
  window.location='https://assign-02-html-calculations.madeleineforger.repl.co';
}