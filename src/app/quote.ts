export class Quote {
    showDescription!: boolean;
    constructor(
                public quoteText: string,
                public authorName: string,
                public submittedBy: string,
                public like?: number,
                public dislike?: number,
                public postDate?: Date,
                public id?:number,){
        this.showDescription = false;
    }
    
}
