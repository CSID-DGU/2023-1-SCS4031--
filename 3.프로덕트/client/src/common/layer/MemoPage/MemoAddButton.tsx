const MemoAddButton = () => {
  return (
    <div className="absolute end-8 bottom-11">
      <button className="btn btn-circle bg-primary hover:bg-secondary border-white stroke-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  );
};

export default MemoAddButton;
