

//get element from searchinput id
var searchInput = document.getElementById('searchInput');
//added eventlistener keyup occurs to call searchNameFunction
searchInput.addEventListener("keyup", searchNameFunction);

//searchNameFunction
function searchNameFunction(){
    //test to see if function is being called
    //console.log(searchInput.value.toUpperCase());
    
    //get element value from searchInput id
    var searchInputValue = document.getElementById('searchInput').value.toUpperCase();
    
    //get ul element from namelist id
    var ulNamesList = document.getElementById('namesList');
    
    //get li element from li tag/collection-item class
    var liNames = ulNamesList.querySelectorAll('li.collection-item');

    //loop through all the names
    for(var i=0; i<liNames.length; i++){
        var aNames = liNames[i].getElementsByTagName('a')[0];

        /**
         * checks if the name matches by using indexOf function
         * indexOf function will return the position of matching characters
         * therefore if there is a match, indexOf function will return a value greater than -1
         * if a match is found the name remains shown,if not the name is removed
         */
        if(aNames.innerHTML.toUpperCase().indexOf(searchInputValue)  > -1){
            liNames[i].style.display ='';
        }
        else{
            liNames[i].style.display = 'none';
        }
    }

}

