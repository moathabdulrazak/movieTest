<script>
  export let movie;
  // Declare the prop that will be passed to this component
  const props = {
    movie: {},
  };
</script>

<div class="movie-card">
  <h2>{movie.title}</h2>
  <p>{movie.overview}</p>
  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
</div>
