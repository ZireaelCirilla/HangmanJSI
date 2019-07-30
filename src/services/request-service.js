export const fetchFilms = async (search) => {
    return await fetch(`http://www.omdbapi.com/?type=movie&s=${search}&apikey=9ee21907`)
        .then(res => res.json())
        .catch(e => console.error('Error: ' + e));
}

export const fetchId = async (id) => {
    return await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=9ee21907`)
        .then(res => res.json())
        .catch(e => console.error('Error: ' + e));
}

export const getFilmsArray = async (e) => {
    e.preventDefault();
    let movieSearch = e.target[0].value;
    let response = await fetchFilms(movieSearch);
    let films = response.Search.filter((val, i) => i < 5);
    console.log(films);
    return films;
}

export const getFilmById = async (id) => {
    let film = await fetchId(id);
    return film;
}