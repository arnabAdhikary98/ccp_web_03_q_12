// Select the UL and button
const ul = document.querySelector('#itemList');
const button = document.querySelector('#addButton');

button.addEventListener('click', () => {
    // Create new li element
    const newLi = document.createElement('li');
    newLi.textContent = 'New Item';

    // Determine current total li count after adding
    const newIndex = ul.children.length + 1; // +1 because we're about to add

    // Apply style based on sequence number
    if (newIndex % 2 !== 0) {
    newLi.style.fontWeight = 'bold';
    newLi.style.color = 'blue';
    } else {
    newLi.style.fontStyle = 'italic';
    newLi.style.color = 'red';
    }

    // Append to ul
    ul.appendChild(newLi);
});