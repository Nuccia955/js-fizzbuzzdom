//DOM ref
const msGrid = document.querySelector('.ms-grid');

//ms-grid
for (let i = 1; i <= 100; i++) {
    const li = document.createElement('li');
    li.className = 'square';
    li.classList.add('d-flex', 'justify-content-center', 'align-items-center');

    if (i % 3 == 0 && i % 5 !== 0) {
        li.classList.add('bg-acquamarine');
        li.append(`fizz`);
    }

    else if (i % 5 == 0 &&  i % 3 !== 0 ) {
        li.classList.add('bg-ocra');
        li.append(`buzz`);
    }

    else if (i % 3 == 0 && i % 5 == 0) {
        li.classList.add('bg-red');
        li.append(`fizzbuzz`);
    }

    else {
        li.classList.add('bg-blue');
        li.append(`${i}`);
    }

    msGrid.append(li);
}



