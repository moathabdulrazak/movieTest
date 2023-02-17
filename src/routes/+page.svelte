<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import MovieCard from "../componets/movieCard.svelte";
  const API_KEY = "88d2c735e36149b50c9d46f09826ec06";
  const BASE_URL = "https://api.themoviedb.org/3";
  const POPULAR_MOVIES_ENDPOINT = "/movie/popular";
  const SEARCH_MOVIES_ENDPOINT = "/search/movie";
  const DEFAULT_PARAMS = {
    api_key: API_KEY,
    language: "en-US",
    query: "",
    page: 1,
  };

  let movies = [];
  let currentPage = DEFAULT_PARAMS.page;
  let totalPages = 1;
  let endpoint = `${BASE_URL}${POPULAR_MOVIES_ENDPOINT}`;

  const getMovies = async (params) => {
    try {
      const res = await axios.get(endpoint, { params });
      movies = res.data.results;
      currentPage = res.data.page;
      totalPages = res.data.total_pages;
    } catch (error) {
      console.error(error);
    }
  };

  onMount(() => {
    getMovies(DEFAULT_PARAMS);
  });

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.query.value.trim();
    if (query) {
      endpoint = `${BASE_URL}${SEARCH_MOVIES_ENDPOINT}`;
      getMovies({ ...DEFAULT_PARAMS, query });
    } else {
      endpoint = `${BASE_URL}${POPULAR_MOVIES_ENDPOINT}`;
      getMovies(DEFAULT_PARAMS);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      getMovies({ ...DEFAULT_PARAMS, page: currentPage - 1 });
      scrollToTop();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      getMovies({ ...DEFAULT_PARAMS, page: currentPage + 1 });
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
  };
</script>

<div class="px-5">
  <form class="search-form" on:submit={handleSearch}>
    <input
      class=""
      placeholder="Search movies..."
      type="text"
      id="query"
      name="query"
    />
    <button class="btn btn-dark" type="submit">search</button>
  </form>
</div>

<div class="movie-list">
  {#if movies.length > 0}
    {#each movies as movie}
      <MovieCard {movie} />
    {/each}
  {:else}
    <p>No movies found.</p>
  {/if}
</div>

<div class="pagination pb-3">
  <button on:click={handlePreviousPage} disabled={currentPage === 1}
    >Previous</button
  >
  <span>{currentPage}/{totalPages}</span>
  <button on:click={handleNextPage} disabled={currentPage === totalPages}
    >Next</button
  >
</div>

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
  .search-form {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .search-form label {
    font-size: 1.2rem;
    margin-right: 10px;
  }
  .search-form input {
    font-size: 1rem;
    padding: 5px 10px;
    border: 1px solid gray;
    border-radius: 5px;
    width: 300px;
  }
</style>
