let data = {
    Exercising: 'done',
    GoingToBank: 'pending', 
    Breakfast: 'done', 
    AttendBirthdayParty: 'pending' 
};
var pendingtag = document.querySelector('#pending');
var donetag = document.querySelector('#done');
var pending = pendingtag.innerHTML;
var done = donetag.innerHTML;
var list = document.querySelector('ul');
var counter = document.querySelector('#counter');
var total = counter.innerHTML;
Object.keys(data).forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
    if (item == "Exercising"){
    li.classList.toggle('checked');
    }
    if (item == "Breakfast"){
        li.classList.toggle('checked');
    }
  })
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    done=document.querySelectorAll('.checked').length;
    donetag.innerHTML=done;
    pendingtag.innerHTML=total-done;
  }
}
, false);
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("Inputtaken").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("no task entered");
    } else {
      document.getElementById("UL-list").appendChild(li);
      total++;
      counter.innerHTML = total;
    }
    document.getElementById("Inputtaken").value = "";
  }