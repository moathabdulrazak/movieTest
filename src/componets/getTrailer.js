// getTrailer.js
export async function getTrailer(movieId) {
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=88d2c735e36149b50c9d46f09826ec06&language=en-US`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    if (data.results.length === 0) {
      return null;
    }
    const trailerId = data.results[0].key;
    return `https://www.youtube.com/watch?v=${trailerId}`;
  } catch (error) {
    console.error(error);
    return null;
  }
}