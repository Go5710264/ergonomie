import './App.css'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import TableImage from './components/TableImage'
import TableOverview from './components/TableOverview'


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

        <TableImage handler={handlerTableMovement} tableRef={table}/>
        
        <TableOverview>
          Эргономика — ключ к успеху современного человека
        </TableOverview>

      </main>
    </>
  )
}

export default App
