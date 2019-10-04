// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics');

console.log(Array.from(document.querySelectorAll('.tab'))[1]);

const Tab = (input) => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.innerHTML = input;
    return tab;
}


axios 
    .get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        // console.log(response.data.topics);
        response.data.topics.forEach(e => {
            const newTab = Tab(e);
            topics.appendChild(newTab);
        })

    })
    .catch(error => {
        console.log("The data was not returned", error);
    });