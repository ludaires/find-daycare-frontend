import React from 'react';
import NavBar from './NavBar.js';
import SearchDaycare from './SearchDaycare';
import ListDaycareFromYelp from './ListDaycareFromYelp.js';


const MainContainer = () => {
    return (
        <div>
            <NavBar/>
            <SearchDaycare/>
            <ListDaycareFromYelp/>
        </div>
    )
}

export default MainContainer