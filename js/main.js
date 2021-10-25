//DOM ref
const msGrid = document.querySelector('.ms-grid');


//  create a cycle with for (from 1 to 100) {
//  -create li elements (add css classes)
//  -append in ul
//  }

for (let i = 1; i <= 100; i++) {
    const li = document.createElement('li');
    li.className = 'square';
    li.classList.add('d-flex', 'justify-content-center', 'align-items-center');
    li.append(`${i}`)
    msGrid.append(li);
}

