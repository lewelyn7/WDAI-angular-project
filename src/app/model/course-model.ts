export class Course{
    id: number;
    name: string;
    ECTSpoints: number;
    semester: number;
    type: string;
    studentMax: number;
    rating: number;
    votes: Vote[];
    imageURL: string;
    description: string;
    participants: string[];

    constructor(id:number){
        this.id = id;
        this.ECTSpoints = 0;
        this.description = '';
        this.imageURL = '';
        this.name = '';
        this.type = '';
        this.votes = new Array<Vote>();
        this.participants = new Array<string>();
        this.rating = 0;

    }

}
export class Vote{
    uid:  string;
    vote: number;
}