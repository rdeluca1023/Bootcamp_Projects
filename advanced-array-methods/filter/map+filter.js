const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const checked = Array.from(checkboxes).filter(function(box){
    return box.checked;
});

const completed = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
});





function extractCompleted(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    return Array.from(checkboxes).filter(function(box){
        return box.checked;
    })
    .map(function(checkbox){
        return checkbox.parentElement.innerText;
    })
}