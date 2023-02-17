<script>
  export let movie;
  let isModalOpen = false;
  let embeddedLink = "";

  function openModal() {
    embeddedLink = `https://autoembed.to/movie/tmdb/${movie.id}`;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  function handleIframeLoad() {
    const iframe = document.querySelector("#modal-iframe");
    if (iframe) {
      iframe.contentWindow.focus();
      iframe.contentWindow.document.body.style.overflow = "hidden";
    }
  }
</script>

<div class="movie-card" on:click={openModal}>
  <div>
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={`${movie.title} poster`}
    />
    <h2>{movie.title}</h2>
    <!-- <p>{movie.overview}</p> -->
  </div>
</div>

{#if isModalOpen}
  <div class="modal" tabindex="-1" on:keydown={handleKeyDown}>
    <div class="modal-content">
      <button class="close" on:click={closeModal}>X</button>
      <!-- <h2 class="text-vfx">{movie.title}</h2>
      <p class="text-vfx">{movie.overview}</p> -->
      <iframe
        id="modal-iframe"
        src={embeddedLink}
        frameborder="0"
        allowfullscreen
        onload={handleIframeLoad}
      />
    </div>
  </div>
{/if}

<style>
  .movie-card {
    /* background-color: rgb(51 27 61 / 14%);
    backdrop-filter: blur(15px); */
    border-radius: 10px;
    /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); */
    padding: 20px;
    width: 300px;
    cursor: pointer;
  }

  .movie-card h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .movie-card img {
    border-radius: 5px;
    height: 400px;
    object-fit: cover;
    width: 98%;
  }
  .movie-card img:hover {
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
    background-color: rgb(51 27 61 / 14%);
    backdrop-filter: blur(15px);
    z-index: 1;
  }

  .modal:focus {
    outline: none;
  }

  .modal-content {
    position: relative;
    width: 80%;
    height: 80%;
    max-width: 800px;
    max-height: 600px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .modal iframe {
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
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
