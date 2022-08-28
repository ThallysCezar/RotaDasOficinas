import React from "react";
import Navbar from '../../components/navbar/Navbar.js';
import "./Desafio3.css";

export default function Desafio3() {
  const splitting = () => {
    let total = parseInt(document.querySelector("#total").value);
    let people = parseInt(document.querySelector("#people").value);
    let tipPercent = document.querySelector("#tipPercent");

    if (tipPercent.value !== "") {
      let calcPercent = parseInt(tipPercent.value);
      const totalWithTip = total + (calcPercent * total) / 100;
      document.querySelector("#perPerson").innerHTML = (
        totalWithTip / people
      ).toFixed(2);
    } else {
      const result = total / people;
      document.querySelector("#perPerson").innerHTML = result.toFixed(2);
    }
  };

  document.querySelector("#addTip").addEventListener("click", (e) => {
    e.preventDefault();
    showTipInput();
  });

  const showTipInput = () => {
    const tipBtns = document.querySelector("#tipInput");
    if (tipBtns.style.display === "block") {
      tipBtns.style.display = "none";
    } else {
      tipBtns.style.display = "block";
    }
  };

  const splitBtn = document.querySelector("#splitBtn");
  splitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    splitting();
  });
  
  document.querySelector("#resetBtn").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("form").reset();
    document.querySelector("#perPerson").innerHTML = "0";
  });

  return (
    <>
      <div className="navigacao">
        <Navbar />
      </div>
      {/* Aqui comeca o form */}
      <div>
        {/* Section: Design Block */}
        <section className="text-center text-lg-start">
          {/* Jumbotron */}
          <div className="container py-4">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card cascading-right card1">
                  <div className="card-body p-5 shadow-5 text-center card-corpo">
                    <h2 className="fw-bold mb-5">
                      Divisor de contas de um restaurante
                    </h2>
                    <form>
                      {/* Quanto foi no total, input */}
                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          className="form-control"
                          id="total"
                          placeholder="add the total"
                        />
                        <label className="form-label" id="totalL">
                          How much?
                        </label>
                      </div>

                      {/* Quantas pessoas foi no total, input */}
                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          className="form-control"
                          id="people"
                          placeholder="add the number of people"
                        />
                        <label
                          className="form-label"
                          id="totalL"
                          for="form3Example4"
                        >
                          How many?
                        </label>
                      </div>

                      {/* taxa de ngc */}
                      <label id="tipL" className="form-label">
                        <i className="fas fa-heart"></i>Feelin' generous?
                        <button id="addTip">Add a tip</button>
                      </label>

                      {/* Div taxa */}
                      <div id="tipButtons">
                        <input
                          type="number"
                          id="tipPercent"
                          placeholder="add % of the total"
                        />
                      </div>

                      {/* Submit button */}
                      <div className="buttonSpace">
                        {/*Pills navs */}
                        <ul
                          className="nav nav-pills nav-justified mb-3"
                          id="ex1"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active btn-split"
                              id="splitBtn"
                              data-mdb-toggle="pill"
                              href="#pills-login"
                              role="tab"
                              icon="pi pi-pw pi-replay"
                              aria-controls="pills-login"
                              aria-selected="true"
                              label="split"
                            >
                              Split!
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active btn-reset"
                              id="resetBtn"
                              role="tab"
                              aria-controls="pills-login"
                              aria-selected="true"
                              icon="pi pi-pw pi-replay"
                              label="reset"
                            >
                              Reset
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div id="perPerson">0</div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="text-white texto-h1">Desafio 3</h1>
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
        {/* Section: Design Block */}
      </div>
    </>
  );
}
