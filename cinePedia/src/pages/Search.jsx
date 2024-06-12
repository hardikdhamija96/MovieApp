import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");


  const { data: movies } = useFetch(apiPath,queryTerm);

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 px-10 py-3">{movies.length === 0? `No result found for ${queryTerm}`:`Results for '${queryTerm}' :`}</p>
      </section>
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
