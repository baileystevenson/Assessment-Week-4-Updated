const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune)



const goalBtn = document.getElementById("goalButton")

const getGoal = () => {
    axios.get("http://localhost:4000/api/goal/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
goalBtn.addEventListener('click', getGoal)



const refBtn = document.getElementById("referenceButton")

const getRef = () => {
    axios.get("http://localhost:4000/api/reference/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
refBtn.addEventListener('click', getRef)


const accomplishContainer = document.querySelector('#accomplish-container')
const form = document.querySelector('form')

const baseURL = ("http://localhost:4000/api/accomplish/")

const accomplishCallback = ({ data: goal }) => displayAccomplish(goal)
const errCallback = err => console.log(err)

const createAccomplish = body => axios.post(baseURL, body).then(accomplishCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

let goal = document.querySelector('#goal')

let bodyObj = {
    goal: goal.value,
}  
createAccomplish(bodyObj)
goal.value= ""
}
function createAccomplishCard(goal) {
    const goalCard = document.createElement('div')
    goalCard.classList.add('goal-card')

    goalCard.innerHTML = 
    `<p class=“goal”> ${goal.goal} </p>`

    accomplishContainer.appendChild(goalCard)
}
function displayAccomplish(arr) {
    accomplishContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createAccomplishCard(arr[i])
    }
}   
form.addEventListener('submit', submitHandler)





    


