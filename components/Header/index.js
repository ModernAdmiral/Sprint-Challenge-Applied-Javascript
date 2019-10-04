// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector('.header-container');

function Header() {
    const div = document.createElement('div');
    const spanDate = document.createElement('span');
    const h1 = document.createElement('h1');
    const spanTemp = document.createElement("span");

    div.classList.add('header');
    spanDate.classList.add('date');
    spanDate.textContent = `March 28, 2019`;
    h1.textContent = `Lambda Times`;
    spanTemp.classList.add('temp');
    spanTemp.textContent = `98°`;

    div.appendChild(spanDate);
    div.appendChild(h1);
    div.appendChild(spanTemp);

    return div;

}

headerContainer.appendChild(Header());