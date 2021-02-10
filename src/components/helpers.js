export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};
