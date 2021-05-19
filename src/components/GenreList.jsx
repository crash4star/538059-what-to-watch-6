import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ActionCreator } from '../store/action';

const GenreList = (props) => {
    const { genres, films, changeGenre, filmsByGenre, currentGenre } = props;
    const [isActiveGenre, setActiveGenre] = useState(currentGenre);

    const genreChangerName = (checkGenre) => {
        switch (checkGenre) {
            case 'Comedies':
                return 'Comedy';

            case 'Crime':
                return 'Crime';

            case 'Documentary':
                return 'Documentary';

            case 'Dramas':
                return 'Drama';

            case 'Horror':
                return 'Horror';

            case 'Kids & Family':
                return 'Kids & Family';

            case 'Romance':
                return 'Romance';

            case 'Sci-fi':
                return 'Sci-fi';

            case 'Thrillers':
                return 'Thriller';

            default:
                return '';
        }
    };

    const handleChangeGenre = (e) => {
        e.preventDefault();
        const target = e.target.textContent;
        setActiveGenre(target);
    };

    useEffect(() => {
        if (isActiveGenre !== currentGenre) {
            changeGenre(genreChangerName(isActiveGenre));
            filmsByGenre(genreChangerName(isActiveGenre), films);
        }
    }, [isActiveGenre]);

    return (
        <>
            <ul className="catalog__genres-list">
                {genres.map((genre, i) => {
                    const activeStyle = isActiveGenre === genres[i] ? 'catalog__genres-item--active' : null;

                    return (
                        <li className={`catalog__genres-item ${activeStyle}`} onClick={handleChangeGenre} key={i + genre}>
                            <a href="#" className="catalog__genres-link">
                                {genre}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

const mapStateToProps = (state) => ({
    genres: state.genres,
    currentGenre: state.currentGenre
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeGenre(isActiveGenre) {
            dispatch(ActionCreator.changeGenre(isActiveGenre));
        },
        filmsByGenre(isActiveGenre, films) {
            dispatch(ActionCreator.getSameFilmsByGenre(isActiveGenre, films));
        }
    }
};


export { GenreList };
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);