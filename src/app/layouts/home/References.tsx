import { Quotation } from '@/assets/icons';
import { FC, useEffect, useState } from 'react';
import { Reference } from '../../components';

type ReferenceType = {
    text: string;
    author: string;
};

export const References: FC = () => {
    const [references, setReferences] = useState<ReferenceType[]>([]);

    const getData = async () => {
        const data = await fetch('data/references.json');
        const file = await data.json();
        setReferences(file);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="mobile:w-4/5 flex flex-col items-center relative my-8">
            <div className="flex flex-col gap-4 mobile:w-4/5 mb-12">
                <h1 className="text-trinity-yellow">Reference</h1>
                {references.map((reference, index) => (
                    <Reference key={index} {...reference}></Reference>
                ))}
            </div>
            <Quotation fill="#F0AB03" className="w-12 absolute right-0 top-0" />
            <Quotation fill="#F0AB03" className="w-12 absolute left-0 bottom-0" />
        </div>
    );
};
