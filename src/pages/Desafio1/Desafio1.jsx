import React, { Component } from 'react';
import { Message } from 'primereact/message';
import './Desafio1.css';
import Navbar from './../../shared/components/navbar/Navbar';

class Desafio1 extends Component {
  state = {
    romanDictionnary: {},
    roman: '',
    romanErrorMessage: '',
    arabic: '',
    arabicErrorMessage: ''
  }

  romanNumbers = 'IVXLCDM';
  allowedRegExp = /^[IVXLCDM]+$/i;

  arabicGetDivisibleBy = (value, romChar, arabRange) => {
    const replicant = Math.floor(value / arabRange);
    const convert = romChar.repeat(Math.floor(value / arabRange));
    const remain = value - replicant * arabRange;
    return {convert, remain};
  };

  specialRomanRules = (roman) => {
    let transformed = roman;
    transformed = transformed.replace('DCCCC', 'CM'); // 900
    transformed = transformed.replace('CCCC', 'CD'); // 400
    transformed = transformed.replace('LXXXX', 'XC'); // 90
    transformed = transformed.replace('XXXX', 'XL'); // 40
    transformed = transformed.replace('VIIII', 'IX'); // 9
    transformed = transformed.replace('IIII', 'IV'); // 4
    return transformed;
  };

  arabicConvert = (value) => {
    let data = {
      convert: '',
      remain: parseInt(value)
    };
    let result = '';

    data = this.arabicGetDivisibleBy(data.remain, 'M', 1000);
    result += data.convert;
    data = this.arabicGetDivisibleBy(data.remain, 'D', 500);
    result += data.convert;
    data = this.arabicGetDivisibleBy(data.remain, 'C', 100);
    result += data.convert;
    data = this.arabicGetDivisibleBy(data.remain, 'L', 50);
    result += data.convert;
    data = this.arabicGetDivisibleBy(data.remain, 'X', 10);
    result += data.convert;
    data = this.arabicGetDivisibleBy(data.remain, 'V', 5);
    result += data.convert;
    data = this.arabicGetDivisibleBy(data.remain, 'I', 1);
    result += data.convert;

    return this.specialRomanRules(result);
  };

  initRomanDictionnary = () => {
    const max = 4000;
    const romanDictionnary = {};
    for (let i = 1; i < max; i++) {
      const roman = this.arabicConvert(i);
      romanDictionnary[roman] = i;
    }
    this.setState({romanDictionnary});
  };

  errorMessage = (message) => {
    if (!!message) return <Message severity="error" text={message} />;
    return null;
  };

  invalidRomanNumber = (input) => {
    let error = 'This is not a valid Roman number.';
    const transformed = this.specialRomanRules(input);
    if (transformed in this.state.romanDictionnary) error = `${error} Did you mean '${transformed}' instead?`;

    return error;
  };

  handleChangeRoman = (e) => {
    const input = e.target.value.toUpperCase();
    const roman = input;
    let arabic = '';
    const arabicErrorMessage = '';
    let romanErrorMessage = '';

    if (!input.trim()) return this.setState({roman: '', arabic, romanErrorMessage});;

    if (!this.allowedRegExp.test(input)) romanErrorMessage = `Only ${this.romanNumbers} are valid.`;
    
    if (!(input in this.state.romanDictionnary)) romanErrorMessage = this.invalidRomanNumber(input);
    else arabic = this.state.romanDictionnary[roman];

    this.setState({roman, arabic, romanErrorMessage, arabicErrorMessage});
  };

  handleChangeArabic = (e) => {
    const value = e.target.value;
    let arabic = parseInt(value);
    let roman = '';
    const romanErrorMessage = '';
    let arabicErrorMessage = '';

    if (!value) arabic = '';
    else if (arabic < 0 || arabic >= 3999) arabicErrorMessage = 'Only positive number lower than 3999 are allowed.';
    else roman = this.arabicConvert(arabic);

    this.setState({arabic, roman, arabicErrorMessage, romanErrorMessage});
  };

  handleReset = (e) => {
    e.preventDefault();
    const roman = '';
    const romanErrorMessage = '';
    const arabic = '';
    const arabicErrorMessage ='';
    this.setState({roman, romanErrorMessage, arabic, arabicErrorMessage});
  };

  componentDidMount() {
    this.initRomanDictionnary();
  }

  render() { 
    return (
      <>
      <div className="navigacao">
        <Navbar/>
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
                    <h2 className="fw-bold mb-5">Converção dos números arábicos e romanos!</h2>
                    <form>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <input type="name" id="roman" className={`${{'p-error': !!this.state.romanErrorMessage}} ${"form-control"}`} value={this.state.roman} onChange={this.handleChangeRoman} keyfilter={this.allowedRegExp}/>
                        <label className="form-label" for="form3Example3">N° Romano</label>
                        {this.errorMessage(this.state.romanErrorMessage)}
                      </div>

                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <input type="name" id="arabic" className={`${{'p-error': !!this.state.arabicErrorMessage}} ${"form-control"}`} value={this.state.arabic} onChange={this.handleChangeArabic} keyfilter="pint" />
                        <label className="form-label" for="form3Example4">N° Arábico</label>
                        {this.errorMessage(this.state.arabicErrorMessage)}
                      </div>
                      {/* Submit button */}
                      <button type="submit" className="btn btn-primary btn-block mb-4 p-button-info" onClick={this.handleReset}
                      icon="pi pi-pw pi-replay" label="reset">
                        Reiniciar Conversão
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className='text-white texto-h1'>Desafio 1</h1>
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
}
 
export default Desafio1;