import { Link } from "react-router-dom"
import backupImage from '../assets/images/notAvailable.png'

export const Card = ({id,title,desc,img_path}) => {

  // let backupImgage = "https://images.unsplash.com/photo-1640007689209-3ccc3f59c6a1?q=80&w=992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let movieImage = `https://image.tmdb.org/t/p/original/${img_path}`;


  return (
    <div className="my-2">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 min-h-[59rem] h-full">
            <Link to={`/movie/${id}`} className="w-full text-center">
              <img
                className="rounded-t-lg"
                src={img_path? movieImage:backupImage}
                alt={title}
              />
            </Link>
            <div className="p-5 flex flex-col items-center justify-around h-[40%] ">
              <Link to={`/movie/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                {/* {desc}  */}
                {desc.length > 320 ? `${desc.slice(0, 320)}...` : desc}
              </p>
              <Link to={`/movie/${id}`}>
              <button type="button" className=" text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-600 focus:outline-none dark:focus:ring-cyan-800">Details</button>
              </Link>

            </div>
            
          </div>
          
    </div>
  )
}
