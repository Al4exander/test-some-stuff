import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup.string().required('*'),
    // eslint-disable-next-line no-template-curly-in-string
    body:  yup.string().min(5, 'минимальная длина ${min}').required('*'),
});
