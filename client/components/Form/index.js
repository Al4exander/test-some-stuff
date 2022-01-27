import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../Input';
import { schema } from './config';

import Styles from './Form.module.scss';

export const Form = () => {
    const router = useRouter();
    const form = useForm({
        mode:          'onBlur',
        resolver:      yupResolver(schema),
        defaultValues: {
            title: '',
            body:  '',
        },
    });

    const submitForm = form.handleSubmit(async (values) => {
        const response = await fetch('https://lab.lectrum.io/examples/api/v1/todos', {
            method:  'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            router.push('/example-2');
            form.reset();
        }
    });

    useEffect(() => {
        form.setFocus('title');
    }, []);

    return (
        <form onSubmit = { submitForm } className = { Styles.form }>
            <Input
                label = 'Название задачи'
                error = { form.formState.errors.title }
                type = 'text'
                autoComplete = 'title'
                register = { form.register('title') } />

            <Input
                label = 'Текст задачи'
                error = { form.formState.errors.body }
                type = 'text'
                autoComplete = 'body'
                register = { form.register('body') } />

            <input type = 'submit' value = 'Создать задачу' />
        </form>
    );
};
