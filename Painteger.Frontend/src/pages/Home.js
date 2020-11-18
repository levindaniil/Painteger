import React from 'react';
import Hero from "../components/Hero";
import Description from "../components/Description";

function Home(props) {
    return (
        <React.Fragment>
            <Hero/>
            <Description/>
        </React.Fragment>
    );
}

export default Home;
