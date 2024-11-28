export default getImages = async () => {
  const response = await fetch("https://picsum.photos/2560/1440");
  const data = response.url;

  return data;
};
