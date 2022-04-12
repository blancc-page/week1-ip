export class Quote {
    showDescription!: boolean;
    constructor(public id:number,
                public quoteText: string,
                public authorName: string,
                public submittedBy: string,
                public like: number,
                public dislike: number,){
        this.showDescription = false;
    }
    
}
