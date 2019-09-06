let handler = (e) => {
    console.log(e);
};
let handleClick = (e) => {
    console.log(e.target);
    console.log(e);
    console.log(this.id);
};
document.getElementById('me').addEventListener('click', handler, false);
document.getElementById('red').addEventListener('click', handleClick, true);
document.getElementById('blue').addEventListener('click', handleClick, true);

let removeHandler = (e) => {
    e.preventDefault();
    document.getElementById('me').removeEventListener("click",handler);
}