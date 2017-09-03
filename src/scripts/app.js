import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import BasicExample

const app = function() {
  document.querySelector('.container').innerHTML = <BasicExample/>
  // document.querySelector('.container').innerHTML = `<h1>maestro_starter</h1>`
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..