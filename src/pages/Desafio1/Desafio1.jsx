import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';
import './Desafio1.css';
import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';

export default function Convert() {

  const [romanNumbers, setRomanNumbers] = useState({});
  const [roman, setRoman] = useState();
  const [romanErrorMessage ,setRomanErrorMessage] = useState();
  const [arabic, setArabic] = useState();
  const [arabicErrorMessage, setArabicErrorMessage] = useState();

  setRomanNumbers('IVXLCDM');
  // eslint-disable-next-line no-undef
  allowedRegExp = /^[IVXLCDM]+$/i;

  const arabicGetDivisibleBy = (value, romChar, arabRange) => {
    const replicant = Math.floor(value / arabRange);
    const convert = romChar.repeat(Math.floor(value / arabRange));
    const remain = value - replicant * arabRange;
    return {convert, remain};
  };

  const specialRomanRules = (roman) => {
    let transformed = roman;
    transformed = transformed.replace('DCCCC', 'CM'); // 900
    transformed = transformed.replace('CCCC', 'CD'); // 400
    transformed = transformed.replace('LXXXX', 'XC'); // 90
    transformed = transformed.replace('XXXX', 'XL'); // 40
    transformed = transformed.replace('VIIII', 'IX'); // 9
    transformed = transformed.replace('IIII', 'IV'); // 4
    return transformed;
  };

  const arabicConvert = (value) => {
    let data = {
      convert: '',
      remain: parseInt(value)
    };
    let result = '';

    data = arabicGetDivisibleBy(data.remain, 'M', 1000);
    result += data.convert;
    data = arabicGetDivisibleBy(data.remain, 'D', 500);
    result += data.convert;
    data = arabicGetDivisibleBy(data.remain, 'C', 100);
    result += data.convert;
    data = arabicGetDivisibleBy(data.remain, 'L', 50);
    result += data.convert;
    data = arabicGetDivisibleBy(data.remain, 'X', 10);
    result += data.convert;
    data = arabicGetDivisibleBy(data.remain, 'V', 5);
    result += data.convert;
    data = arabicGetDivisibleBy(data.remain, 'I', 1);
    result += data.convert;

    return specialRomanRules(result);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initRomanDictionnary = () => {
    const max = 5000;
    const romanDictionnary = {};
    for (let i = 1; i < max; i++) {
      const roman = arabicConvert(i);
      romanDictionnary[roman] = i;
    }
    this.setState({romanDictionnary});
  };

  const errorMessage = (message) => {
    if (!!message) return <Message severity="error" text={message} />;
    return null;
  };

  const invalidRomanNumber = (input) => {
    let error = 'This is not a valid Roman number.';
    const transformed = specialRomanRules(input);
    if (transformed in this.state.romanDictionnary) error = `${error} Did you mean '${transformed}' instead?`;

    return error;
  };

  const handleChangeRoman = (e) => {
    const input = e.target.value.toUpperCase();
    const roman = input;
    let arabic = '';
    const arabicErrorMessage = '';
    let romanErrorMessage = '';

    if (!input.trim()) return this.setState({roman: '', arabic, romanErrorMessage});;

    if (!this.allowedRegExp.test(input)) romanErrorMessage = `Only ${romanNumbers} are valid.`;
    
    if (!(input in this.state.romanDictionnary)) romanErrorMessage = invalidRomanNumber(input);
    else arabic = this.state.romanDictionnary[roman];

    this.setState({roman, arabic, romanErrorMessage, arabicErrorMessage});
  };

  const handleChangeArabic = (e) => {
    const value = e.target.value;
    let arabic = parseInt(value);
    let roman = '';
    const romanErrorMessage = '';
    let arabicErrorMessage = '';

    if (!value) arabic = '';
    else if (arabic < 0 || arabic >= 5000) arabicErrorMessage = 'Only positive number lower than 5000 are allowed.';
    else roman = arabicConvert(arabic);

    this.setState({arabic, roman, arabicErrorMessage, romanErrorMessage});
  };

  const handleReset = (e) => {
    e.preventDefault();
    const roman = '';
    const romanErrorMessage = '';
    const arabic = '';
    const arabicErrorMessage ='';
    this.setState({roman, romanErrorMessage, arabic, arabicErrorMessage});
  };


  useEffect(() => {
    initRomanDictionnary();
  }, [initRomanDictionnary]);

    return (
      <Card title="Convertion" subTitle="Roman <-> Arabic">
        <div className="p-grid p-justify-between p-fluid app-converter">
          <div className="p-col">
            <span className="p-float-label">
              <InputText
                id="roman"
                className={{'p-error': !!this.state.romanErrorMessage}}
                value={this.state.roman}
                onChange={handleChangeRoman}
                keyfilter={this.allowedRegExp}
              />
              <label htmlFor="roman">Roman</label>
            </span>
            {this.errorMessage(this.state.romanErrorMessage)}
          </div>
          <div className="p-col-3 app-arrows">
            <div className="p-grid p-justify-center">
              <div className="p-col-12">
                <span className="pi pi-pw pi-chevron-left"></span>
                <span className="pi pi-pw pi-minus"></span>
                <span className="pi pi-pw pi-chevron-right"></span>
              </div>
              <div className="p-col-12 p-sm-8 p-md-6 p-lg-4">
                <Button
                  onClick={handleReset}
                  icon="pi pi-pw pi-replay"
                  className="p-button-info"
                  label="reset"
                />
              </div>
            </div>
          </div>
          <div className="p-col">
            <span className="p-float-label">
              <InputText
                id="arabic"
                className={{'p-error': !!this.state.arabicErrorMessage}}
                value={this.state.arabic}
                onChange={handleChangeArabic}
                keyfilter="pint"
              />
              <label htmlFor="arabic">Arabic</label>
            </span>
            {this.errorMessage(this.state.arabicErrorMessage)}
          </div>
        </div>
      </Card>
    );
}