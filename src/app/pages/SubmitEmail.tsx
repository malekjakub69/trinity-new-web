import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IcoScarf } from 'src/assets/icons';
import { Button } from '../components/shadcn/ui/button';

const SubmitEmail: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="h-[100vh] flex items-center">
            <div className="mx-auto mobile:w-[95%] tablet:w-[70%] desktop:w-[50%] shadow-lg p-4">
                <div className="tablet:flex items-center">
                    <div className="tablet:basis-1/2">
                        <IcoScarf className="mobile:w-[20%] tablet:w-[50%] mx-auto py-4" />
                    </div>
                    <div className="p-8  basis-full">
                        Submit Email
                        <Button className="w-full" onClick={() => navigate('/login')}>
                            Log in
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitEmail;
