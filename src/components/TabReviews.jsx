import React from 'react';
import TabReviewItem from './TabRevievItem';

const TabReviews = (props) => {
    const reviews = props.reviews;

    const getFiltredReviews = () => {
        const filterArr = reviews.filter(item => (
            item.date = `${new Date(item.date).toLocaleString("default", { month: "long" })} ${new Date(item.date).getUTCDate()}, ${new Date(item.date).getFullYear()}`
        ));

        const size = Math.round(filterArr.length / 2);
        const leftColArr = filterArr.slice(0, size);
        const rightColArr = filterArr.slice(leftColArr.length);

        return { leftCol: leftColArr, rightCol: rightColArr };
    };

    return (
        <>
            <div className="movie-card__reviews movie-card__row">
                <div className="movie-card__reviews-col">
                    {getFiltredReviews().leftCol.map(review => (
                        <TabReviewItem review={review} key={review.id}/>
                    ))}
                </div>
                <div className="movie-card__reviews-col">
                    {getFiltredReviews().rightCol.map(review => (
                        <TabReviewItem review={review} key={review.id}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TabReviews;
