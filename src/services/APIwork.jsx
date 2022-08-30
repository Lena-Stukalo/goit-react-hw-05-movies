export async function getTrending() {
  return await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=7fea517bd5b294dd7a1b57e94e2c1c68`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`No results`));
  });
}
export async function serchByName(name) {
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=7fea517bd5b294dd7a1b57e94e2c1c68&language=en-US&query=${name}&page=1&include_adult=false`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`No results`));
  });
}

export async function getByID(id) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7fea517bd5b294dd7a1b57e94e2c1c68&language=en-US`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`No results`));
  });
}
export async function getCast(id) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7fea517bd5b294dd7a1b57e94e2c1c68&language=en-US`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`No results`));
  });
}
export async function getReviews(id) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7fea517bd5b294dd7a1b57e94e2c1c68&language=en-US&page=1`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`No results`));
  });
}
