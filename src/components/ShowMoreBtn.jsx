import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../store/action';

const ShowMoreBtn = (props) => {
    const { visibleFilms, filmsByGenre, showNewEightFilms } = props;

    const showMoreFilms = () => {
        showNewEightFilms(filmsByGenre.slice(visibleFilms.length).slice(0, 8));
    };

    return (
        <>
            <div className={`${filmsByGenre.length === visibleFilms.length ? 'visually-hidden' : 'catalog__more'}`}>
                <button className={`${filmsByGenre.length > 8 ? 'catalog__button' : 'visually-hidden'}`} type="button" onClick={showMoreFilms}>
                    Show more
                </button>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    filmsByGenre: state.filmsByGenre,
    visibleFilms: state.visibleFilms
});

const mapDispatchToProps = (dispatch) => {
    return {
        showNewEightFilms(visibleFilms) {
            dispatch(ActionCreator.showNewEightFilms(visibleFilms));
        }
    }
};

export { ShowMoreBtn };
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreBtn);