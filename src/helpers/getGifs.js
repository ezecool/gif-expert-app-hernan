export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=iE77RMG7gEmNWq8003xGUGO47l7WrzMd&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  // Obtener un array de objetos con data de las imagenes, que se usaran para mostrar en la pagina
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
}