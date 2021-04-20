import { Header } from '../components/Header';
export default function Home(props) {

    console.log(props.episodes)
    return (
        <h1>index</h1>
    );
}

//SSG - STATIC SITE GENERATION
export async function getStaticProps() {
    const response = await fetch("http://localhost:3333/episodes");
    const data = await response.json();

    return {
        props: {
            episodes: data,
        },
        revalidate: 60 * 60 * 8,
    }
}

//SPA - ultiliza useEffect para fazer request as API;

/*SSR - Server-side rendering para fazer request as API,
        mas e feita toda pelo lado do node.

export async function getServerSideProps() {
    const response = await fetch("http://localhost:3333/episodes");
    const data = await response.json();

    return {
        props: {
            episodes: data,
        }
    }
}*/