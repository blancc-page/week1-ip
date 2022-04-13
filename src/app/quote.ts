export class Quote {
    showDescription!: boolean;
    constructor(public id:number,
                public quoteText: string,
                public authorName: string,
                public submittedBy: string,
                public like: number = 0,
                public dislike: number = 0,
                public postDate: Date){
        this.showDescription = false;
    }
    
}
