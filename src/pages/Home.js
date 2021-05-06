import React from 'react';
import { Helmet } from "react-helmet";
import HomeBanner from '../components/common/Home/HomeBanner';

const TITLE = "Vaccine Tracker :: Home"

const Home = (props) => {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <HomeBanner type={props.match.params.type} />
            {/* <RecommendedSection />
            <SetpSection />
            <JoinSection />  */}
        </>
    )
}
export default Home;