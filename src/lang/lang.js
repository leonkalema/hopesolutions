import db_lang from './db'
import React from 'react'
import Events from 'events'

export var CurrentLanguage = localStorage.language || (localStorage.language = "en") && "en"

// Language event listener
var listener = new Events
listener.setMaxListeners(Infinity)

// Switch language handle
export var SwitchLanguage = language => {
  if (language == CurrentLanguage) return
  localStorage.language = CurrentLanguage = language
  listener.emit('change')
}

// Override React Component
React.Component.prototype.k = key => db_lang[key][CurrentLanguage]
React.Component.prototype.componentDidMount = function() {
  this._ismounted = true
  listener.addListener('change', () => this._ismounted && this.forceUpdate())
}

React.Component.prototype.componentWillUnmount = function() {
  this._ismounted = false
}