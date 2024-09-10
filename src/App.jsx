import { useState } from 'react'


function App() {
  const [color, setColor] = useState(""); 
  //
  // object oriented Programming. --> DSA --> OOPS
  // 1. Class --> car --> 
  //2.  Objects  -->  mercarise, tesla, suzuki  --> (real entiites) 
  //objects ki properties --> color, model, year --> (attributes)
  // methods --> start(), stop(), accelerate() --> (behaviours)
  
  // -------------------------------------
  // Functional Programming. --> DSA --> FP
  // Class --> car --> 
  // Functions  -->   startCar, stopCar, accelerateCar  --> (real entiites) 
  // functions ki parameters --> car, color, model, year --> (arguments)
  // functions ki return type --> void/string/number --> (return value)
  //-----------------------------------------------------
 
  //3. Polymorphism -->  declare a function and use it in the child elements recursively.
  // 4. Encapsulation --> 
  // 5. Inheritance --> 
  //6. Abstraction --> 
  // 
  //
  // 
  // arr[5,...]
  // hooks ? 
// use state -->
// use effect --> 
// memo 
  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}} 
    >
      <div className='fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2'>
        <div className='fixed flex-wrap justify-center gap-4 bg-slate-400 px-3 py-1 rounded-3xl'>
          <button 
          onClick={()=>setColor("red")}
          className='outline-none px-2 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"red"}}
          >Red</button>

<button   
          onClick={()=>setColor("blue")}
          className='outline-none px-2 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"blue"}}
          >blue</button>

<button 
          onClick={()=>setColor("green")}  
          className='outline-none px-2 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"green"}}
          >Green</button>

<button 
          onClick={()=>setColor("yellow")}
          className='outline-none px-2 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"yellow"}}
          >Yellow</button>

<button 
          onClick={()=>setColor("orange")}
          className='outline-none px-2 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"orange"}}
          >orange</button>

<button 
          onClick={()=>setColor("pink")}
          className='outline-none px-2 py-1 rounded-full shadow-lg'
          style={{backgroundColor:"pink"}}
          >Pink</button>
         
          
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
