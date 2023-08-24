let family = ['Kelli', 'Regan', 'Kayleigh', 'Eric'];

function scream(arr){
    console.log(arr.toUpperCase());
    return;
};

family.forEach(scream);



function forEach(arr, callback){
    for(let i =0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
};

forEach(family, function(member, i){
    console.log(member.toUpperCase(), 'at index of:', i);
})

