import { FC } from 'react';

type InstructorProps = {
    citation: string;
    name: string;
    properties: string[];
    photo: string;
    mobile?: boolean;
};

export const Instructor: FC<InstructorProps> = ({ citation, name, photo, properties, mobile }) => {
    if (!mobile)
        return (
            <div className="flex w-[100%] tablet:w-[80%] bg-trinity-black text-trinity-white justify-between rounded-r-full ">
                <div className="flex flex-col justify-between m-8 ">
                    <h2 className="text-trinity-yellow text-left">{name}</h2>
                    <ul className=" h-full flex flex-col justify-around my-4">
                        {properties.map((property, index) => (
                            <li key={index}>〉{property}</li>
                        ))}
                    </ul>
                    <p className="text-trinity-yellow text-left font-bold">„{citation}“</p>
                </div>
                <img className="rounded-r-full w-72" src={photo} alt={name} />
            </div>
        );

    if (mobile)
        return (
            <div className="flex flex-col justify-between items-center">
                <img className="rounded-t-full w-[60%] p-8 bg-trinity-black " src={photo} alt={name} />
                <div className="bg-trinity-black  text-trinity-white flex flex-col w-[90%] justify-between px-8 pb-8 rounded-lg">
                    <h2 className="text-trinity-yellow text-center">{name}</h2>
                    <ul className=" h-full flex flex-col justify-around my-4">
                        {properties.map((property, index) => (
                            <li key={index}>〉{property}</li>
                        ))}
                    </ul>
                    <p className="text-trinity-yellow text-left font-bold">„{citation}“</p>
                </div>
            </div>
        );
};
