import { useEffect, useRef, useState } from "react";
const key = "f84fc31d";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("failed to fetch the movies");
          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie no found");
          setMovies(data.Search);
          console.log(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message || "Something went wrong");
            console.log(err.message || "Something went wrong");
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      //   handleClose();
      fetchMovies();

      return function () {
        console.log("aborting");
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
