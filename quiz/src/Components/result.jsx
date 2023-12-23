import React, { Component } from "react";
import "./quiz.css";
export default class ResultComponent extends Component {
  render() {
    return (
      <div className="result">
        <h1 className="tag">Result</h1>
        <div className="box1">
          <h3>You need more practice!</h3>
          <h2 className="score">Your score is 20%</h2>
          <div className="qna">
            <h4>Total number of question</h4>
            <h4>15</h4>
          </div>
          <div className="qna">
            <h4>Number of attempted questions</h4>
            <h4>9</h4>
          </div>
          <div className="qna">
            <h4>Number of correct answers</h4>
            <h4>3</h4>
          </div>
          <div className="qna">
            <h4>Number of wrong answers</h4>
            <h4>6</h4>
          </div>
        </div>
        <div className="buttonn">
          <button className="play">play again</button>
          <button className="home">back to home</button>
        </div>
      </div>
    );}}
