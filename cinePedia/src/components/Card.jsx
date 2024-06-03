import { Link } from "react-router-dom"

export const Card = ({id,title,desc,img_path}) => {

  let backupImgage = "https://images.unsplash.com/photo-1640007689209-3ccc3f59c6a1?q=80&w=992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let movieImage = `https://image.tmdb.org/t/p/original/${img_path}`;


  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
            <Link to={`/movie/${id}`}>
              <img
                className="rounded-t-lg"
                src={movieImage? movieImage:backupImgage}
                alt={title}
              />
            </Link>
            <div className="p-5">
              <Link to={`/movie/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {desc}
              </p>
            </div>
          </div>
    </div>
  )
}
