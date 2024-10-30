

import { useEffect } from 'react';
import NewsBanner from '../../NewsBanner/NewsBanner';
import NewsList from '../../NewsList/NewsList';
import styles from './styles.module.css'
import { getNews } from '../../../api/apiNews';
import { useState } from 'react';
import Sceleton from '../../Sceleton/Sceleton';

const Main = () => {
    const [news, setNews] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    useEffect(() => { 
        const fetchNews = async() => {
            try {
                const responce = await getNews();
                setNews(responce.news);
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews();
    }, []);
    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (<NewsBanner item={news[0]} />) : (
                <Sceleton type={'banner'} count={1} />
            )}
    
            {!isLoading ? (<NewsList news={news}/>) : ( 
            <Sceleton type={'item'} count={10} />
            )}
        </main>
    );
};

export default Main;