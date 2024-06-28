import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

const TEMPERATURE = {
  F: 1,
  C: 2
}

function App() {
  const [temperature, setTemperature] = useState(0)
  const [convertedTemperature, setConvertedTemperature] = useState(0)
  const [wantToConvertInWhich, setWantToConvertInWhich] = useState(1)

  const handleChange = (e) => {
    const val = e.target.value;
    setTemperature(val)
  }

  const onFormSubmit = () => {
    if(+wantToConvertInWhich === +TEMPERATURE.F) {
      const fahrenheitTemp = (9/5 * temperature) + 32
      setConvertedTemperature(fahrenheitTemp.toFixed(2))
    } else {
      const degreeTemperature = (temperature  - 32) * 5/9
      setConvertedTemperature(degreeTemperature.toFixed(2))
    }
  }

  const handleWantConversion = (e) => {
    setWantToConvertInWhich(e.target.value)
  }

  useEffect(() => {
    onFormSubmit()
  }, [wantToConvertInWhich])

  return (
    <div className="App">
      <h2>Temperature input from degree fahrenheit to celsius</h2>
      <br/>
      <label for="temperature">Temperature</label>
      <input 
        type="number"
        onChange={handleChange}
        value={temperature}
      />
      <br/>
      <select onChange={handleWantConversion}>
        <option value={TEMPERATURE.F}>Convert to Fahrenheit</option>
        <option value={TEMPERATURE.C}>Convert to Celsius</option>
      </select>
      <br/>
      <button onClick={onFormSubmit}>Convert</button>

      <h5>{convertedTemperature}</h5>
    </div>
  );
}

export default App;
