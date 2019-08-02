import { inputPlaceHolder } from '../modules/dom-loader'

export const fetchFilms = async (search = 'Tom') => {
    return await fetch(`http://www.omdbapi.com/?type=movie&s=${search}&apikey=9ee21907`)
        .then(res => res.json())
        .catch(e => console.error('Error: ' + e));
}

export const fetchId = async (id) => {
    return await fetch(`http://www.omdbapi.com/?i=${id}&plot=short&apikey=9ee21907`)
        .then(res => res.json())
        .catch(e => console.error('Error: ' + e));
}

export const getFilmsArray = async (movie) => {
    let response = {};
    movie == '' ? inputPlaceHolder('Need to write something...') : response = await fetchFilms(movie);
    if (response.Error) {
        inputPlaceHolder('No movies found...')
        console.log(response.Error);
    } else if (response.Search) {
        let films = response.Search.filter((val, i) => i < 5);
        return films;
    }
}

export const getFilmById = async (id) => {
    let film = await fetchId(id);
    return film;
}

export const postMovieGuessed = async (title, lives, time) => {
    return await fetch(`http://localhost:8081/movies`,
        {
            method: "POST",
            body: JSON.stringify({
                title: title,
                lives: lives,
                time: time
            })
        })
        .then(res => res.json())
        .catch(e => console.error('Error: ' + e));
}

export const getMoviesGuessed = async () => {
    return await fetch(`http://localhost:8081/movies`);

}