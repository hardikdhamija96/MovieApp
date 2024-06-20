import { Link } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useTitle(`CinePedia - ${title}`);
  // console.log(movies);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap">
          {movies.map((obj) => (
            <Card
              key={obj.id}
              id={obj.id}
              title={obj.original_title}
              desc={obj.overview}
              img_path={obj.poster_path}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
