const container2 = document.querySelector('.img2-container');
const leftClick = document.querySelector('.left2');
const rightClick = document.querySelector('.right2');
const container1 = document.querySelector('.img1-container');
const leftClick1 = document.querySelector('.left1');
const rightClick1 = document.querySelector('.right1');

let i = 0, index1 = 0;

const arr = [
    "public/images/project2/373006905-4671dfcb-c512-4d23-bd88-9e8419578091.png",
    "public/images/project2/373006816-8a7d0ab1-bd76-4930-a1a6-ef8c9b795d68.png",
    "public/images/project2/373006958-520720a6-54ac-4de0-ae58-e1be17da1d68.png"
];
const images1 = [
    "public/images/project1/376517874-a7447dda-a49f-4d8a-8b43-c58497bf21ff.png",
    "public/images/project1/376518279-aef42465-08cf-4a00-9e80-db259f7bb5a1.png",
    "public/images/project1/376518763-19e2d1bf-48c4-45e3-9aa9-8c1bc3e0a1ea.png",
    "public/images/project1/376519218-16f6d0db-b4f4-41e7-8913-f1f43c83f07f.png",
    "public/images/project1/376519303-5471648e-feaf-4df1-8096-1215f5735bd5.png"
]

function updateImage(direction) {
    const imgElement = document.createElement('img');
    imgElement.classList.add('project-img');
    imgElement.setAttribute('src', arr[i]);

    if (direction === 'left') {
        imgElement.style.animation = 'slideInFromLeft 0.5s forwards';
    } else {
        imgElement.style.animation = 'slideInFromRight 0.5s forwards';
    }

    imgElement.onload = () => {
        imgElement.classList.add('visible');
    };

    const existingImg = container2.querySelector('.project-img');
    if (existingImg) {
        existingImg.style.animation = direction === 'left' ? 'slideOutToRight 0.5s forwards' : 'slideOutToLeft 0.5s forwards';
        setTimeout(() => container2.removeChild(existingImg), 500);
    }

    container2.appendChild(imgElement);
}

rightClick.addEventListener('click', () => {
    i = (i + 1) % arr.length;
    updateImage('right');
});

leftClick.addEventListener('click', () => {
    i = (i - 1 + arr.length) % arr.length;
    updateImage('left');
});

// Initial load
updateImage('right');

function updateImage1(direction) {
    const imgElement = document.createElement('img');
    imgElement.classList.add('project-img');
    imgElement.src = images1[index1];

    if (direction === 'left') {
        imgElement.style.animation = 'slideInFromLeft 0.5s forwards';
    } else {
        imgElement.style.animation = 'slideInFromRight 0.5s forwards';
    }

    imgElement.onload = () => {
        imgElement.classList.add('visible');
    };

    const existingImg = container1.querySelector('.project-img');
    if (existingImg) {
        existingImg.style.animation = direction === 'left' ? 'slideOutToRight 0.5s forwards' : 'slideOutToLeft 0.5s forwards';
        setTimeout(() => container1.removeChild(existingImg), 500);
    }

    container1.appendChild(imgElement);
}

rightClick1.addEventListener('click', () => {
    index1 = (index1 + 1) % images1.length;
    updateImage1('right');
});

leftClick1.addEventListener('click', () => {
    index1 = (index1 - 1 + images1.length) % images1.length;
    updateImage1('left');
});

// Initial load
updateImage1('right');
