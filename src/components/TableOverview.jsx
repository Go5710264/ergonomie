import PropTypes from 'prop-types';

const TableOverview = ({ children }) => {
    return(
        <>
            <section className='page-text'>

            <h1 className='page-text-heading'>{children}</h1>

            <p className='page-text-content'>
                Cтильная столешница , выполненной из экологически безопасного материала (ДСП), и усиленной стальной рамы не составит труда разместить на поверхности инновационного стола большое количество крупногабаритной техники: стол выдерживает нагрузку до 80 кг.
            </p>

            </section>

            <section className='page-text-extension'>

            <p className='page-text-content-extension'>
                Также столешница, обладающая меламиновым покрытием, хорошо переносит механические воздействия (царапины или удары), при контакте с водой не разрушается, устойчиво переносит бытовые химические вещества и не выгорает под воздействием ультрафиолета.
            </p>

            </section>
        </>
    )
}

TableOverview.propTypes = {
    children: PropTypes.string
}

export default TableOverview;