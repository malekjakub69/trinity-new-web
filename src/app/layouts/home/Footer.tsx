import { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className="w-4/5 grid grid-cols-2 mb-16">
            <div></div>
            <div>
                <h2>KONTAKT</h2>
                <p>
                    email: <a href="mailto:trinity@skaut.cz">trinity@skaut.cz</a>
                </p>
            </div>
        </div>
    );
};
