import './App.css'

import tableTop from './assets/table-top.jpg'
import tableBottom from './assets/table-bottom.jpg'

import tableTop320 from './assets/table-top-500.jpg'
import tableBottom320 from './assets/table-bottom-500.jpg'

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

  const handlerTableMovement = (event) => {
    event.stopPropagation();

    if(event.target.classList.contains('up')) setRaiseTable(true);
    if(event.target.classList.contains('down')) setLowerTable(true);
  }

  return (
    <>
      <main className='main-conteiner'>

        <section className='table-image'>
          <img 
            src={document.documentElement.clientWidth === 320 ? tableTop320 : tableTop}
            ref={table}
            className='table-image-top'
          />
          
          <div>
            <button
              className='button up'
              onClick={(event) => handlerTableMovement(event)}
            >
              вверх
            </button>
            <button
              className='button down'
              onClick={(event) => handlerTableMovement(event)}
            >
              вниз
            </button>
          </div>
          
          <img 
            src={document.documentElement.clientWidth === 320 ? tableBottom320 : tableBottom}
            className='table-image-bottom'
          />
        </section>

        <section className='page-text'>

          <h1 className='page-text-heading'>Эргономика — ключ к успеху современного человека</h1>

          <p className='page-text-content'>
            Cтильная столешница , выполненной из экологически безопасного материала (ДСП), и усиленной стальной рамы не составит труда разместить на поверхности инновационного стола большое количество крупногабаритной техники: стол выдерживает нагрузку до 80 кг.
          </p>

        </section>

        <section className='page-text-extension'>

          <p className='page-text-content-extension'>
            Также столешница, обладающая меламиновым покрытием, хорошо переносит механические воздействия (царапины или удары), при контакте с водой не разрушается, устойчиво переносит бытовые химические вещества и не выгорает под воздействием ультрафиолета.
          </p>

        </section>

      </main>
    </>
  )
}

export default App
