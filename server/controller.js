
const database = []
let newID = 1

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["You are going to ace your nex assessment!", "Watch out for big dogs, they will bite you!", "You will acheive greatness, just keep swimming.", "You will win a million dollars next week!", "Be kind and all your wishes will come to fruition"];
      
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },


    getGoal: (req, res) => {
        const goal = ["Make Smart Goals", "Remember to set realistic Goals", "Set timeframes", "Establish a routine", "Belive in yourself", "Get Rid of Distractions"] ;
      
       
        let randomIndex = Math.floor(Math.random() * goal.length);
        let randomGoal = goal[randomIndex];
      
        res.status(200).send(randomGoal);
    },

    getRef: (req, res) => {
        const reference = ["Who could you use a job reference?", "Who know you better than most people?", "Who has seen you volunteer?", "Who have you help?"];
      
        
        let randomIndex = Math.floor(Math.random() * reference.length);
        let randomReference = reference[randomIndex];
      
        res.status(200).send(randomReference);
    },

    createAccomplish:(req, res) => {
  
        let { goal } = req.body
        let newAccomplish = {
            id: newID,
            goal,
           
        }
        database.push(newAccomplish)
    
        res.status(200).send(database)
    
        newID++

    },
}
