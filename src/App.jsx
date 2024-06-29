import { useState } from 'react'
import './App.css'

function App() {
  const [meter,setMeter] = useState("");
  const [kg,setKg] = useState("");
  const [result,setResult] = useState();
  const [hide,setHide] = useState(false);

  const meterInput = (event) =>{
    const m = event.target.value;
    setMeter(m);
  }
  
  const kgInput = (event) =>{
    const k = event.target.value;
    setKg(k);
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    const feet = parseFloat(meter.split(' ')[0]);
    const inches = parseFloat(meter.split(' ')[1]);
    let m = (feet * 0.3048) + (inches * 0.0254);
    m = m**2;
    const bmi = kg / m;
    setHide(true);
    setResult(bmi);

  }
  return (
    <>
      <div className='h-screen bg-blue-200 flex justify-center items-center'>
        <div className='h-[600px] w-[600px] bg-red-300 flex flex-col items-center justify-center text-2xl'>
          <div >
            Calculate Your BMI
          </div>
          <div>
            <div className='flex justify-center items-center space-x-9 mt-20'>
              <div>
                What is your Weight
              </div>
              <div>
                <input type="text" className='rounded-full w-20 h-12 ' value={kg} onChange={kgInput}/>
              </div>
              <div className='text-gray-500'>
                KG
              </div>
            </div>
            <div className='flex justify-center items-center space-x-9 mt-20'>
              <div>
                  What is your Height
                </div>
                <div>
                  <input type="text" className='rounded-full w-20 h-12' value={ meter} onChange={ meterInput}/>
                </div>
                <div className='text-gray-500'>
                FT
              </div>
            </div>
            <div className='w-full flex justify-center mt-12'>
              <button className='bg-white rounded-full  h-20 w-80' type='submit' onClick={handleSubmit}> 
                Calculate your BMI
              </button>
            </div>
            { hide &&(
              <p>
                Result: {result}
                </p>
                
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
