class Task{
    constructor(title, description, color, date, status, budget,userId)
    {
        this.title = title;
        this.desc = description; //Note: mapped to desc internally
        this.color = color;
        this.date = date;
        this.status = status;
        this.budget = budget;
        this.userId = userId;
        //this.name = "adrian"; //where are creating an id to each message that i sent to
                              //the server         
    }
}