import { FC } from 'react';

type ReferenceProps = {
    text: string;
    author: string;
};

export const Reference: FC<ReferenceProps> = ({ text, author }) => {
    return (
        <div className="">
            <p>{text}</p>
            <p className="text-trinity-yellow"> - {author}</p>
        </div>
    );
};
