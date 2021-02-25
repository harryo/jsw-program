async function fetchFromWeb(uri) {
  const res = await fetch(uri);
  const { ok, status, statusText } = res;
  if (!ok) {
    throw new Error(`${status} ${statusText}`);
  }
  return res.text();
}

export default fetchFromWeb;
