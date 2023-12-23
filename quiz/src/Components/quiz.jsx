import React, { Component } from 'react'
import './quiz.css'
export default class QuizComponent extends Component {
  render() {
    return (
      <div className='box'>
        <h1>Question</h1>
        <p className='not'>1 of 15</p>
        <h3>which is the only mammal that can't jump?</h3>
        <div className='content'>
          <div className='option'>
            <p className='choices'>
              dog
            </p>
          </div>
          <div className='option'>
            <p className='choices'>
              Elephant
            </p>
          </div>
          <div className='option'>
            <p className='choices'>
              Goat
            </p>
          </div>
          <div className='option'>
            <p className='choices'>
              Lion
            </p>
          </div>
        </div>
        <div className='butons'>
          <button className='previous btn'>Previous</button>
          <button className='next btn'>Next</button>
          <button className='quit btn'>Quit</button>
        </div>
      </div>
    )}}