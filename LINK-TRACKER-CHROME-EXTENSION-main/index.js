// function saveInput () {
//     console.log("Button Clicked!")
// }

// let myLeads = `["www.epic.com"]`
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epiclead.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

let myLeads=[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// localStorage.setItem("myLeads","www.examplelead.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {  //leads is just the name of the parameter here. We can pass anything else like "x" or "yolo" also.
    let listItems = ""

    for(let i=0; i<leads.length; i++) {

            // listItems += "<li><a href='#' target='_blank'>" + myLeads[i] +  "</a></li>"
            listItems += `
            <li>
                <a target='_blank' href= '${myLeads[i]}'>
                     ${myLeads[i]} 
                </a>
            </li>`
        }

    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value=" "

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)

    // console.log(localStorage.getItem("myLeads"))
})

// const tabs = [
//     {url: "https://www.linkedin.com/in/mayukha-ekkirala-886a9021a/" }
// ]

tabBtn.addEventListener("click", function() {

    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     let activeTab = tabs[0]
    //     let activeTabId = activeTab.id
    // });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

    
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})


// function renderLeads() {
//     let listItems = ""

//     for(let i=0; i<myLeads.length; i++) {

//             // listItems += "<li><a href='#' target='_blank'>" + myLeads[i] +  "</a></li>"
//             listItems += `
//             <li>
//                 <a target='_blank' href= '${myLeads[i]}'>
//                      ${myLeads[i]} 
//                 </a>
//             </li>`
//         }

//     ulEl.innerHTML = listItems
// }









// for(let i=0; i<myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }



//DOM MANIPULATION COMES WITH A COST

// const conti = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'> Buy!</button>"

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }

