import React from "react";

export default function Desafio2() {
  return (
    <>
      <div>
        <div className="wrapper">
          <div className="header">Bill Splitter</div>
          <form className="insert">
            <label id="totalL">
              <i className="fas fa-coins"></i>How much?
            </label>
            <input type="number" id="total" placeholder="add the total" />
            <label id="totalL">
              <i className="fas fa-users"></i>How many?
            </label>
            <input
              type="number"
              id="people"
              placeholder="add the number of people"
            />
            <label id="tipL">
              <i className="fas fa-heart"></i>Feelin' generous?
              <button id="addTip">Add a tip</button>
            </label>
            <div id="tipButtons">
              <input
                type="number"
                id="tipPercent"
                placeholder="add % of the total"
              />
              <input
                type="number"
                id="tipCustom"
                placeholder="add your custom tip"
              />
            </div>

            <div className="buttonSpace">
              <button id="splitBtn">Split!</button>
              <button id="resetBtn">Reset</button>
            </div>
            <div id="perPerson">0</div>
          </form>
        </div>
        {/* no total */}
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
          <input type="text" placeholder="How much?" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
        </div>
        {/* pra quantas pessoas */}
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
          <input type="text" placeholder="How many?" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
        </div>
      </div>
    </>
  );
}
