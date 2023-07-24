import PropTypes from 'prop-types';
import tableTop from '../assets/table-top.jpg'
import tableBottom from '../assets/table-bottom.jpg'

import tableTop320 from '../assets/table-top-500.jpg'
import tableBottom320 from '../assets/table-bottom-500.jpg'

const TableImage = ({ handler, tableRef }) => {
    return(
    <section className='table-image'>
        <img 
          src={document.documentElement.clientWidth === 320 ? tableTop320 : tableTop}
          ref={tableRef}
          className='table-image-top'
        />
        
        <div>
          <button
            className='button up'
            onClick={(event) => handler(event)}
          >
            вверх
          </button>
          <button
            className='button down'
            onClick={(event) => handler(event)}
          >
            вниз
          </button>
        </div>
        
        <img 
          src={document.documentElement.clientWidth === 320 ? tableBottom320 : tableBottom}
          className='table-image-bottom'
        />
      </section>
    )
}

TableImage.propTypes = {
    handler: PropTypes.func,
    tableRef: PropTypes.object
}

export default TableImage;