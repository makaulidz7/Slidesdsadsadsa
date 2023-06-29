'use strict';

const images = [
    { 'id': '1', 'url':'./img/might-guy.jpg' },
    { 'id': '2', 'url':'./img/sasky.png' },
    { 'id': '3', 'url':'./img/sasukeeee.jpg' },
    { 'id': '4', 'url':'./img/veggggggeta.jpg' },
    { 'id': '5', 'url':'./img/zoro.jpg' },
    { 'id': '6', 'url':'./img/zorosola.jpg' },
    { 'id': '7', 'url':'./img/zaraki.jpg' },
    { 'id': '8', 'url':'./img/vegetaaaaa.jpeg' },
    { 'id': '9', 'url':'./img/vegtz.jpg' },
    { 'id': '10', 'url':'./img/sasukechidori.jpg' },
]



const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);