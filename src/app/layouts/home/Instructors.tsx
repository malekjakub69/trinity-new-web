import { Instructor } from '@/app/components';
import { FC, useEffect, useState } from 'react';

type InstructorTpye = {
    citation: string;
    name: string;
    photo: string;
    properties: string[];
};

export const Instructors: FC = () => {
    const [instrucotrs, setInstrucotrs] = useState<InstructorTpye[]>([]);

    const getData = async () => {
        const data = await fetch('data/instructors.json');
        const file = await data.json();
        if (file) setInstrucotrs(file);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="hidden w-full mobile:flex flex-col items-center gap-12 py-12">
                {instrucotrs && instrucotrs.map((instructor, index) => <Instructor key={index} {...instructor} />)}
            </div>
            <div className="mobile:hidden w-full flex flex-col items-center gap-12 py-12">
                {instrucotrs && instrucotrs.map((instructor, index) => <Instructor mobile key={index} {...instructor} />)}
            </div>
        </>
    );
};
