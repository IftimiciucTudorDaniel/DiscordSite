const Preloader = () => {
    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <img
                src="/images/Untitled.svg"
                alt="Loading"
                className="w-[300px] h-[300px] animate-pulse"
            />
        </div>
    );
};

export default Preloader;
