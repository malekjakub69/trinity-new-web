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
            <div className="flex min-w-[80%] bg-trinity-black text-trinity-white justify-between rounded-r-full ">
                <div className="flex flex-col justify-between m-8 ">
                    <h2 className="text-trinity-yellow text-left">{name}</h2>
                    <ul className=" h-full flex flex-col justify-around my-4">
                        {properties.map((property, index) => (
                            <li key={index} className="">
                                〉{property}
                            </li>
                        ))}
                    </ul>
                    <p className="text-trinity-yellow text-left font-bold">„{citation}“</p>
                </div>
                <img className="rounded-r-full w-72" src={photo} alt={name} />
            </div>
        );

    if (mobile)
        return (
            <div className="flex flex-col bg-trinity-black text-trinity-white justify-between items-center rounded-t-full rounded-b-sm">
                <img className="rounded-t-full w-[80%]" src={photo} alt={name} />
                <div className="flex flex-col w-[90%] justify-between m-8">
                    <h2 className="text-trinity-yellow text-center">{name}</h2>
                    <ul className=" h-full flex flex-col justify-around my-4">
                        {properties.map((property, index) => (
                            <li key={index} className="">
                                〉{property}
                            </li>
                        ))}
                    </ul>
                    <p className="text-trinity-yellow text-left font-bold">„{citation}“</p>
                </div>
            </div>
        );
};
