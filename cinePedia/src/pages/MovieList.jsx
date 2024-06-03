import { Link } from "react-router-dom";
import { Card } from "../components";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);

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
