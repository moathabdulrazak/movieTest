<script>
  export let movie;
  // Declare the prop that will be passed to this component
  const props = {
    movie: {},
  };
  console.log();
</script>

<div class="movie-card">
  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
  <h2>{movie.title}</h2>
  <p>{movie.overview}</p>
</div>

<style>
  .movie-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
  }

  .movie-card h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .movie-card p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .movie-card img {
    border-radius: 5px;
    height: 400px;
    object-fit: cover;
    width: 100%;
  }
</style>
