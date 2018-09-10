export class News   {
    public source: Source;
    public author: string;
    public title: string;
    public description: string;
    public url: string;
    public urlToImage: string;
    public publishedAt: string;

}

class Source {
    id: string;
    name: string;
}
