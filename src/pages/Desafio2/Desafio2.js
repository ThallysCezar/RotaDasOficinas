import React from "react";
import Navbar from "../../components/navbar/Navbar.js";

export default function Desafio2() {
  return (
    <>
      <div className="navigacao">
        <Navbar />
      </div>
      {/* Aqui comeca o form */}
      <div>
        <section className="h-100 gradient-form">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10 meio">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center">
                          <h4 className="mt-1 mb-5 pb-1">Jogo da Vida</h4>
                        </div>

                        <form>
                          {/* Quanto foi no total, input */}
                          <div className="form-outline mb-4">
                            <input
                              type="number"
                              id="total"
                              className="form-control"
                              placeholder="add the total"
                            />
                            <label className="form-label" id="totalL">
                              How much?
                            </label>
                          </div>

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

                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <button
                              type="button"
                              id="splitBtn"
                              className="btn btn-outline-primary btn-split"
                              role="tab"
                              label="split"
                            >
                              Split
                            </button>
                            <button
                              type="reset"
                              id="resetBtn"
                              className="btn btn-outline-danger btn-reset"
                              label="reset"
                            >
                              Reset
                            </button>
                          </div>
                          <div id="perPerson">total a pagar por pessoas </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4 text-h4 justify-content-center">
                          Desafio 2
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
