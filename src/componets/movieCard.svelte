<script>
  export let movie;
  let embeddedLink = "";
  let isModalOpen = false;

  function openModal() {
    embeddedLink = `https://autoembed.to/movie/tmdb/${movie.id}`;
    isModalOpen = true;
  }

  function closeModal() {
    embeddedLink = "";
    isModalOpen = false;
  }
</script>

<div class="movie-card" on:click={openModal}>
  <div>
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={`${movie.title} poster`}
    />
    <h2>{movie.title}</h2>
    <p>{movie.overview}</p>
  </div>

  {#if isModalOpen}
    <div class="modal">
      <div class="modal-content">
        <iframe src={embeddedLink} frameborder="0" allowfullscreen />
        <button class="close" on:click={closeModal}>X</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .movie-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    cursor: pointer;
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

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .modal-content {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    position: relative;
    width: 80%;
    max-height: 80%;
    overflow: auto;
  }

  .close {
    background-color: transparent;
    border: none;
    color: black;
    font-size: 2rem;
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }
</style>
