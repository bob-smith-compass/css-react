let handler = (e) => {
    console.log(e);
};
document.getElementById('me').addEventListener('click', handler, false);

let removeHandler = (e) => {
    e.preventDefault();
    document.getElementById('me').removeEventListener("click",handler);
}