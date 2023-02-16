<!-- <script>
  import axios from "axios";
  import { onMount } from "svelte";
  let movies = [];
  const endpoint =
    "https://api.themoviedb.org/3/movie/popular?api_key=88d2c735e36149b50c9d46f09826ec06&language=en-US&page=1";
  onMount(async function () {
    try {
      const res = await axios.get(endpoint);
      console.log(res.data);
      movies = res.data.results;
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  });

  import MovieCard from "../componets/movieCard.svelte";
</script>

<MovieCard />
<section /> -->
<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import MovieCard from "../componets/movieCard.svelte";
  let movies = [];
  const endpoint =
    "https://api.themoviedb.org/3/movie/popular?api_key=88d2c735e36149b50c9d46f09826ec06&language=en-US&page=1";
  onMount(async function () {
    try {
      const res = await axios.get(endpoint);
      console.log(res.data);
      movies = res.data.results;
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  });
</script>

{#each movies as movie}
  <MovieCard {movie} />
{/each}
