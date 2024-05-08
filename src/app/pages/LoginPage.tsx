import { LoginForm } from '@/app/forms/auth/LoginForm';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IcoScarf } from 'src/assets/icons/IcoScarf';
import { Button } from '../components/shadcn/ui/button';

const LoginPage: FC = () => {
    const navigate = useNavigate();
    return (
        <div className="h-[100vh] flex items-center">
            <div className="mx-auto mobile:w-[95%] tablet:w-[70%] desktop:w-[50%] shadow-lg p-4">
                <div className="tablet:flex items-center">
                    <div className="tablet:basis-1/2">
                        <IcoScarf className="mobile:w-[20%] tablet:w-[50%] mx-auto py-4" />
                    </div>
                    <div className="p-8  basis-full">
                        <LoginForm className={'bg-white'} />
                        <Button className="w-full mt-2" variant="secondary" size={'xs'} onClick={() => navigate('/register')}>
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
