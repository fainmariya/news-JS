import AppLoader from './appLoader';
import { NewsEndpoint } from '../../types';
import { SourcesResponse, NewsResponse, DataCallback } from '../../types';

class AppController extends AppLoader {
    public getSources(callback: DataCallback<SourcesResponse>) {
        super.getResp(
            {
                endpoint: NewsEndpoint.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: DataCallback<NewsResponse>) {
        let target = e.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }
        const newsContainer = e.currentTarget;
        if (!(newsContainer instanceof HTMLElement)) {
            return;
        }

        while (target !== newsContainer) {
            if (!(target instanceof HTMLElement)) {
                return;
            }
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId === null) {
                    return;
                }
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: NewsEndpoint.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentElement;
        }
    }
}

export default AppController;
