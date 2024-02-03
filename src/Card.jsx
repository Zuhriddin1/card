import "./index.css";
const Card = () => {
  return (
    <div className="grid grid-cols-2 countainer mx-auto mr-5 mt-8 ml-48">
      <div className="card w-96 glass ml-8">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn bth-primary bg-sky-700 p-2 rounded-[12px]">
              Learn now!
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 glass ml-8">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn bth-primary bg-sky-700 p-2 rounded-[12px] cursor-pointer">
              Learn now!
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 glass ml-8">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn bth-primary bg-sky-700 p-2 rounded-[12px] cursor-pointer">
              Learn now!
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 glass ml-8">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn bth-primary bg-sky-700 p-2 rounded-[12px]">
              Learn now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
