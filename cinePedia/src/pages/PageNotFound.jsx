import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pageNotFound.jpg";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-300 font-bold my-10 ">Oops!</p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404, page not found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Back to CinePedia
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
