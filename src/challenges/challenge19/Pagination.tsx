import { usePagination, DOTS } from './usePagination';

const Pagination = props => {
    const {
        onPageChange,
        currentPage,
        totalCount,
        siblingCount = 1,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) return null;

    // let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className='flex w-[100%] justify-center'>
            <li className='border border-slate-400 px-2 py-1 mx-1' onClick={() => onPageChange(currentPage - 1)}>
                <button>{'<'}</button>
            </li>
            {paginationRange.map((pageNumber, i) => {
                if (pageNumber === DOTS) return <li className="w-7 border border-slate-400 px-2 py-1 mx-1">&#8230;</li>;

                if (pageNumber === currentPage) {
                    return (
                        <li className='border border-slate-400 px-2 py-1 mx-1 bg-red-600' onClick={() => onPageChange(pageNumber)}>
                            <button>{pageNumber}</button>
                        </li>
                    );
                } else {
                    return (
                        <li className='border border-slate-400 px-2 py-1 mx-1' onClick={() => onPageChange(pageNumber)}>
                            <button>{pageNumber}</button>
                        </li>
                    );
                }

            })}
            <li className='border border-slate-400 px-2 py-1 mx-1' onClick={() => onPageChange(currentPage + 1)}>
                <button>{'>'}</button>
            </li>
        </ul>
    );
};

export default Pagination;
