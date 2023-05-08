function makeList(el,data){
    let list = document.createElement("DIV");
    list.style.width = el.clientWidth + "px";
    let rect = el.getBoundingClientRect();
    list.style.top = rect.bottom + "px";
    list.style.left = rect.left + "px";
    list.classList.add("list");
    list.addEventListener("mouseleave",()=>list.remove());
    data.forEach(element => {
        let item = document.createElement("DIV");
        item.innerText = element;
        item.onclick = ()=>{
            el.innerText = item.innerText;
            document.body.removeChild(list);
        }
        list.appendChild(item);
    });
    document.body.appendChild(list);
}

let data = [["A","B"],[],[]];
for(let i = 3;i<=27;++i)
    data[1].push(i);
for(let i = 1;i<=10;++i)
    data[2].push(i);

document.querySelectorAll(".arrowDown").forEach(el=>{
    let textHolder = el.nextElementSibling;
    el.onclick = ()=>{makeList(textHolder,data[+el.id])}
})

function gather(){
    return {
        tower: document.getElementById("tower").innerText,
        floor: document.getElementById("floor").innerText,
        cover: document.getElementById("conver").innerText,
        date : new Date(document.querySelector('input[type="date"]').value +"T" +document.querySelector('input[type="time"]').value +":00"),
        comment : document.querySelector("textarea").value
    }
}

function clear(){
    document.getElementById("tower").innerText = "";
    document.getElementById("floor").innerText = "";
    document.getElementById("conver").innerText = " ";
    document.querySelector('input[type="date"]').value = "";
    document.querySelector('input[type="time"]').value = "";
    document.querySelector("textarea").value = "";

}

document.getElementById("send").onclick = ()=> console.log("ВРЕМЯ ПО ГРИНВИЧУ!!!",JSON.stringify(gather()));
document.getElementById("clear").onclick = ()=> clear();
