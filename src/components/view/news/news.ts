import './news.css';
import type { Article } from '../../../types';

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        if (!newsItemTemp) {
            return;
        }
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            const newsItem = newsClone.querySelector('.news__item');

            if (idx % 2 && newsItem) {
                newsItem.classList.add('alt');
            }

            const photo = newsClone.querySelector<HTMLElement>('.news__meta-photo');

            if (photo) {
                photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
            const authorElement = newsClone.querySelector('.news__meta-author');

            if (authorElement) {
                authorElement.textContent = item.author || item.source.name;
            }
            const dateElement = newsClone.querySelector('.news__meta-date');

            if (dateElement) {
                dateElement.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }
            const titleElement = newsClone.querySelector('.news__description-title');

            if (titleElement) {
                titleElement.textContent = item.title;
            }
            const sourceName = newsClone.querySelector('.news__description-source');

            if (sourceName) {
                sourceName.textContent = item.source.name;
            }
            const description = newsClone.querySelector('.news__description-content');
            if (description) {
                description.textContent = item.description;
            }
            const urlData = newsClone.querySelector('.news__read-more a');
            if (urlData) {
                urlData.setAttribute('href', item.url);
            }
            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');

        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
