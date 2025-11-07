
const Paginate = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg mx-2" 
                onClick={handlePrevious} disabled={currentPage === 1}>
              Previous
            </button>
          </li>
          <li>
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </li>
          <li>
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg mx-2" 
            onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </button>
          </li>
        </ul>
    </div>
  );
}
export default Paginate;