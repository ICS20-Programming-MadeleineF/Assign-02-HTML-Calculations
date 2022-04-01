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
  const height = parseFloat(document.getElementById('height-of-triangle').value)

  // process
  const area = (2.54 * height)

  // output
  document.getElementById('cm').innerHTML = 'Area is: ' + area + ' cm'
}