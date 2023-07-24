import './App.css'
import tableTop from './assets/table-top.jpg'
import tableBottom from './assets/table-bottom.jpg'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'


function App() {

  const [raiseTable, setRaiseTable] = useState(false);
  const [lowerTable, setLowerTable] = useState(false);

  useEffect(() => {

    if(raiseTable) {
      gsap.to(table.current,{
        y: -15,
        duration: 1
      });
      setRaiseTable(false)
    }

    if(lowerTable) {
      gsap.to(table.current,{
        y: 15,
        duration: 1
      });
      setLowerTable(false)
    }
  
  }, [raiseTable, lowerTable])

  const table = useRef();

  
  // Возможно объединить данные функции
  const tableLiftingHandler = (event) => {
    event.stopPropagation();

    setRaiseTable(true);
  };

  const tableLoweringHandler = (event) => {
    event.stopPropagation();

    setLowerTable(true);
  };

  return (
    <>
      <main className='main-conteiner'>

        <section className='table-image'>
          <img 
            src={tableTop}
            ref={table}
            className='table-image-top'
          />
          
          <button
            className='button up'
            onClick={(event) => tableLiftingHandler(event)}
          >
            Вверх
          </button>
          <button
            className='button down'
            onClick={(event) => tableLoweringHandler(event)}
          >
            Вниз
          </button>
          <img 
            src={tableBottom}
            className='table-image-bottom'
          />
        </section>

        <section className='page-text'>
          <h1>Эргономика — ключ к успеху современного человека</h1>
        </section>

      </main>
    </>
  )
}

export default App
