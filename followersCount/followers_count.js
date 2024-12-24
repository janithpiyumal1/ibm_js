let count = 0;

function increaseCount() {
    count +=10;
    displayCount(); 
    checkCountValue();
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}
function checkCountValue() {
    if (count%100 === 0 && count !== 0) {
      alert(`Your Instagram post gained ${count} followers! Congratulations!`);
    }
  }
function decreaseCount() {
    if (count === 0) {
        alert("The count cannot be decreased further.");
        return;
    }
    else{
    count --;
    displayCount();
    alert("The count has been decreased by 1.");
    }
}
function resetCount() {
    count = 0;
    displayCount();
    alert("The count has been reset to 0.");
}