import React, { useState, useEffect, useRef } from 'react';

import TabOverview from './TabOverview';
import TabDetails from './TabDetails';

const Tabs = (props) => {
    const film = props.props;
    const TABS = ['Overview', 'Details', 'Reviews'];

    const [tabStatus, setTabStatus] = useState(TABS[0]);

    const handleTabOnClick = (e) => {
        e.preventDefault();
        const currentTargetName = e.target.textContent;
        setTabStatus(currentTargetName);
    };

    return (
        <>
            <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                    <ul className="movie-nav__list">
                        {TABS.map((tab, i) => (
                            <li className={`movie-nav__item ${tab === tabStatus && `movie-nav__item--active`}`}
                                key={`${tab}-${i}`}>
                                <a href="#"
                                    className="movie-nav__link"
                                    onClick={handleTabOnClick}>
                                    {tab}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <TabDetails film={film}/>
            </div>
        </>
    );
};

export default Tabs;