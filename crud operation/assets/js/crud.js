let data = [
    {
        id: 1 , Name : "Vishwa Chauhan", Email :"vishwa@gmail.com"
    },

    {
        id: 2 , Name : "Pratham Pimple", Email :"pratham@gmail.com"
    },

    {
        id: 3 , Name : "Sagar Makwana", Email :"sagar@gmail.com"
    },
]

function readAll(){
    localStorage.setItem("object",JSON.stringify(data));
    var datatable = document.querySelector(".data_table");
    var object = localStorage.getItem("object");
    var objdata = JSON.parse(object);
    var elements ="";

    objdata.map(record =>(
        elements +=
`
<thead>
<td>${record.Name}</td>
<td>${record.Email}</td>
<td>
<button id="b1" class="edit" onclick={edit(${record.id})}>Edit</button>
<button id="b2" class="delete" onclick={del(${record.id})}>Delete</button>
</td>
</thead>
`

    )

);
    datatable.innerHTML = elements;
}
function create(){
    var form = document.querySelector(".create-form").style.display = "block";
    var form = document.querySelector(".add").style.display = "none";
}
function add(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var objNew={
        id : 4,Name: name,Email: email
    };
    data.push(objNew);

    var form = document.querySelector(".create-form").style.display = "none";
    var form = document.querySelector(".add").style.display = "block";

    readAll();
}
function edit(id){
    document.querySelector(".update-form").style.display = "block";

    var obj = data.find(rec => rec.id === id);
    document.querySelector(".uname").value = obj.Name;
    document.querySelector(".uemail").value = obj.Email;
    document.querySelector(".id").value = obj.id;
}
function update(){
    var id = parseInt(document.querySelector(".id").value);
    var Name = document.querySelector(".uname").value;
    var Email = document.querySelector(".uemail").value;
    var index = data.findIndex(rec => rec.id === id);
    
    data[index]={id,Name,Email};
    readAll();
    document.querySelector(".update-form").style.display = "none";
}
function del(id){
    data = data.filter(rec => rec.id !==id);
    readAll();
}