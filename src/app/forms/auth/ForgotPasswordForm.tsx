import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/app/components';
import { Button } from '@/app/components/';
import useRestartPassword from '@/app/hooks/auth';
import { ForgotPasswordType } from '@/app/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';

type FormValues = ForgotPasswordType;

interface RegisterFormProps {
    className?: string;
}

const formSchema = object().shape({
    current_password: string().required('Please enter your password'),
    new_password: string().required('Please enter your password'),
    new_password_repeat: string().required('Please enter your password again')
});

export const ForgotPasswordForm: FC<RegisterFormProps> = ({}) => {
    const { t } = useTranslation();

    const { register, registring } = useRestartPassword();

    const form = useForm<FormValues>({
        resolver: yupResolver(formSchema)
    });

    const handleSend = (data: FormValues) => {
        register(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSend)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="current_password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('current password')}</FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="new_password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('new password')}</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="new_password_repeat"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('new password again')}</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full mb-2" loading={registring} type="submit">
                    Register
                </Button>
            </form>
        </Form>
    );
};
