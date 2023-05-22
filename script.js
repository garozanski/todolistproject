document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length ==0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                -
            </button>
        </div>
        `;
        
        let current_tasks = document.querySelectorAll(".delete");
        for(let i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll(".task");
        for(let i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
        
        
    }
}

let x = 37;
let food = "pizza";

console.log(x);
console.log(food);

const student = {
    firstName: "Gabrielle",
    lastName: "Rozanski",
    hairColor: "brown",
    age: 24
};

console.log(student);
console.log(student.hairColor);

const movies = ["Hunger Games", "The Little Mermaid", "Twilight"];
console.log(movies);
console.log(movies[1]);