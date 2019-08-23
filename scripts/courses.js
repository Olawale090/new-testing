// import { userDatabase } from './userLocalhost';


var menuBtn = document.querySelector('#menuBtn');
var menu = document.querySelector('#menu');
var anchor = document.querySelector('#anchor');
var section = document.querySelector('section.courses');

var menuBtn2 = document.querySelector('#menuBtn2');
var menu2 = document.querySelector('#menu2');
var anchor2 = document.querySelector('#anchor2');
var section2 = document.querySelector('section.courses2');

var hide = document.querySelector('.hideMenuBtn');
var hide2 = document.querySelector('.hideMenuBtn2');

var mth101 = document.querySelector('span[id*="courses1"]>li:nth-child(1)');

mth101.addEventListener('click', () => {
    document.querySelector('section.mth101').style.display = 'block';
}, false);

hide.addEventListener('click', () => {
    menu.style.display = 'none';
    anchor.style.display = 'none';
    hide.style.display = 'none';
}, false);

hide2.addEventListener('click', () => {
    menu2.style.display = 'none';
    anchor2.style.display = 'none';
    hide2.style.display = 'none';
}, false);

menuBtn.addEventListener('click', () => {
    menu.style.display = "block";
    anchor.style.display = "block";
    hide.style.display = 'block';

}, false);

menuBtn.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    menu.style.display = 'none';
    anchor.style.display = 'none';
}, false);

section.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    menu.style.display = 'none';
    anchor.style.display = 'none';
}, false);

menuBtn2.addEventListener('click', () => {
    menu2.style.display = "block";
    anchor2.style.display = "block";
    hide2.style.display = 'block';
}, false);

menuBtn2.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    menu2.style.display = 'none';
    anchor2.style.display = 'none';
    hide2.style.display = 'block';
}, false);

section2.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    menu.style.display = 'none';
    anchor.style.display = 'none';
}, false);



var examResultBtn = document.querySelector('#prevExam');
let examResultTab = document.querySelector('.examResult');
let resultTopper = document.querySelector('.result-topper');
examResultBtn.addEventListener('click', () => {
    examResultTab.style.display = 'block';
    examResultTab.style.transition = 0.5 + 's';
    menu.style.display = 'none';
    anchor.style.display = 'none';
}, false);

var closeBtn = document.querySelector('.resultcloseBtn');
closeBtn.addEventListener('click', () => {
    examResultTab.style.display = 'none';
}, false);

var maximiseBtn = document.querySelector('.resultMaximiseBtn');
var text = document.querySelector('.examResult>.text');
maximiseBtn.addEventListener('click', () => {
    resultTopper.style.height = 7 + '%';
    examResultTab.style.width = 100 + '%';
    examResultTab.style.height = 110 + '%';
    text.style.left = 44 + '%';
    examResultTab.style.left = 0;
    examResultTab.style.right = 0;
    examResultTab.style.top = -10 + '%';
    examResultTab.style.zIndex = 4;
}, false);

resultTopper.addEventListener('dblclick', () => {
    resultTopper.style.height = 10 + '%';
    examResultTab.style.width = 70 + '%';
    examResultTab.style.height = 60 + '%';
    examResultTab.style.top = 20 + '%';
    examResultTab.style.left = 15 + '%';
}, false);