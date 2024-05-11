import { FC } from 'react';
import { Copyright, Footer, Header, Instructors, Introducing, NextCourse, References } from '../layouts';

export const HomePage: FC = () => {
    return (
        <>
            <div className="container-black">
                <div className="inside-container">
                    <Header />
                    <Introducing />
                    <References />
                </div>
            </div>
            <div className="container-yellow">
                <div className="inside-container">
                    <Instructors />
                </div>
            </div>
            <div className="container-black">
                <div className="inside-container">
                    <NextCourse />
                    <Footer />
                </div>
            </div>

            <div className="container-purple">
                <div className="inside-container">
                    <Copyright />
                </div>
            </div>
        </>
    );
};
