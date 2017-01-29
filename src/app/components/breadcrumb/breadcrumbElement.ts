export class BreadcrumbElement {
    id: number;
    link: string;
    title: string;

    constructor(id:number, link: string, title: string) {
        this.id = id;
        this.link = link;
        this.title = title;
    }
}