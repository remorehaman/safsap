export class CoookerInfoModel {

    public name :string;
    public image: string;
    public food_type:string;
    public holiday:string[];
    public rating : any
    public hourStart: number;
    public hourEnd : number


    constructor(
        cookersName,
        cookersImage,
        cookersFoodType,
        cookersHoliday,
        cookersRating,
        cookersHoursStart,
        cookersHourEnd
        )
        {


        this.name = cookersName;
        this.image = cookersImage;
        this.food_type = cookersFoodType;
        this.holiday = cookersHoliday;
        this.rating = cookersRating;
        this.hourStart = cookersHoursStart;
        this.hourEnd =cookersHourEnd;
    }


    
}

