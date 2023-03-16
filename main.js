//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["HAS","Max","PuRple","dog"]


function findWords(string,names){
    for (let i = 0; i< names.length; i++){
        let name = names[i];
        let nameFound= string.includes(name);
        if (nameFound == true){
            console.log("Matched dog_name")
        } else {
            console.log("No matches")
        }
    }
}

//Call method here with parameters
findWords(dog_string,dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

 let givenarr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i=0; i<arr.length; i+=2){
        arr[i]= "even index"
    }
    console.log(arr)
}

replaceEvens(givenarr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]