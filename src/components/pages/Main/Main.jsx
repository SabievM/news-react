

import { useEffect } from 'react';
import NewsBanner from '../../NewsBanner/NewsBanner';
import NewsList from '../../NewsList/NewsList';
import styles from './styles.module.css'
import { getNews } from '../../../api/apiNews';
import { useState } from 'react';

const Main = () => {
    const [news, setNews] = useState([]);
    useEffect(() => { 
        const fetchNews = async() => {
            try {
                const responce = await getNews();
                console.log(responce)
                setNews(responce.news);
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews();
    }, []);
    return (
        <main className={styles.main}>
            {news.length > 0 ? <NewsBanner item={news[0]} />: null}

            <NewsList news={news}/>
        </main>
    );
};

export default Main;