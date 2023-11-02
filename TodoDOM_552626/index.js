let myForm = document.querySelector("form");
let inputTask = document.getElementById("task");
let priority = document.getElementById("priority");
let Favourite = document.getElementById("favourite");
let tbody = document.querySelector("tbody");
let AllData = [];

function changeBackgroundColor(priorityValue) {
    if (priorityValue === 'High') {
        return 'red';
    } else if (priorityValue === 'Low') {
        return 'green';
    } else {
        return ''; 
    }
}

myForm.addEventListener("submit",function(e)
{
    e.preventDefault();
    let Data = {};
    Data.input1 = inputTask.value;
    Data.input2 = priority.value;
    Data.input3 = Favourite.value;
    AllData.push(Data);

    tbody.innerHTML = null;

    AllData.map((element) =>
    {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        
        td1.innerText = element.input1;
        td2.innerText = element.input2;
        td3.innerText = element.input3;
        row.append(td1,td2,td3);
        row.style.backgroundColor = changeBackgroundColor(element.input2);
        tbody.append(row);
    })
})