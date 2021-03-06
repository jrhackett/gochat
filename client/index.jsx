import React, { Component } from 'react'
import { render } from 'react-dom'
import configureStore from './store'
import Root from './components/Root'

const store = configureStore()

render(
    <Root store={store} />,
    document.getElementById('app')
)
