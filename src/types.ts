export interface Article {
    title: string;
    author: string | null;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    source: {
        name: string;
    };
}
export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}
export interface NewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export type SourcePreview = Pick<NewsSource, 'id' | 'name'>;
export interface SourcesResponse {
    status: string;
    sources: NewsSource[];
}
export enum NewsEndpoint {
    Sources = 'sources',
    Everything = 'everything',
}
export type HttpMethod = 'GET' | 'POST' | 'PATCH';
export type LoaderOptions = Readonly<{
    apiKey: string;
}>;
export interface RequestOptions {
    endpoint: NewsEndpoint;
    options?: Partial<{
        sources: string;
    }>;
}
export type QueryParams = Record<string, string | undefined>;
export type DataCallback<T> = (data: T) => void;
