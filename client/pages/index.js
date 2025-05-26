import Document, {
    Head,
} from 'next/document';
import AionMap from '../components/AionMap/AionMap';

const Index = () => {
    return (
        <>
            <Head>
                <title>Testing some stuff</title>
            </Head>
            <AionMap />
        </>
    );
};

export default Index;
