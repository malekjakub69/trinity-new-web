import { FC } from 'react';

type ReferenceProps = {
    text: string;
    author: string;
};

export const Reference: FC<ReferenceProps> = ({ text, author }) => {
    return (
        <div>
            <p className="text-justify">{text}</p>
            <p className="text-trinity-yellow text-left"> - {author}</p>
        </div>
    );
};
