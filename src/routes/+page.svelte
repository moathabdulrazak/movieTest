<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import MovieCard from "../componets/movieCard.svelte";

  const API_KEY = "88d2c735e36149b50c9d46f09826ec06";
  const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
  const DEFAULT_PARAMS = {
    api_key: API_KEY,
    language: "en-US",
    page: 1,
  };

  let movies = [];
  let totalPages = 0;
  let currentPage = DEFAULT_PARAMS.page;

  const getMovies = async (params) => {
    try {
      const res = await axios.get(BASE_URL, { params });
      movies = res.data.results;
      totalPages = res.data.total_pages;
    } catch (error) {
      console.error(error);
    }
  };

  onMount(() => {
    getMovies(DEFAULT_PARAMS);
  });

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      currentPage++;
      getMovies({ ...DEFAULT_PARAMS, page: currentPage });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      currentPage--;
      getMovies({ ...DEFAULT_PARAMS, page: currentPage });
    }
  };
</script>

<div class="movie-list">
  {#each movies as movieData}
    <MovieCard movie={movieData} />
  {/each}
</div>

<div class="pagination">
  <button on:click={handlePrevPage} disabled={currentPage === 1}>
    Previous
  </button>
  <button on:click={handleNextPage} disabled={currentPage === totalPages}>
    Next
  </button>
</div>

<!-- App.svelte -->
<style>
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .pagination button {
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    color: black;
    font-size: 1rem;
    margin: 0 5px;
    padding: 5px 10px;
    transition: background-color 0.3s ease;
  }
  .pagination button:hover {
    background-color: gray;
    color: white;
  }
  .pagination button:disabled {
    background-color: gray;
    color: white;
    cursor: not-allowed;
  }
</style>
