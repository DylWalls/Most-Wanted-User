"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      console.log(searchResults);
      break;
    case 'no':
      //search by traits 
      featureMenu(people);
      break;
    default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Lets search by traits.");  // link the function traits to Answer of "NO"
    return app(people); // restart
  }

  let displayOption = prompt(`Found ${person.firstName + " " + person.lastName} . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'`);

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function featureMenu(people){
    var userInput = prompt("What feature do you want to search by? \n 1: Age \n 2: Height \n 3: Weight \n 4: Gender \n 5: Eye Color \n 6: Occupation");
     if (userInput === "1"){
        return searchByAge(people);
      }
      else if (userInput === "2"){
        return searchByHeight(people);
      }
      else if (userInput === "3"){
        return searchByWeight(people);
      }
      else if (userInput === "4"){
        return searchByGender(people);
      }
      else if (userInput === "5"){
        return searchByEyeColor(people);
      }
      else if (userInput === "6"){
        return searchByOccupation(people);
      }

  var listed = "";
  var filteredList;

  filteredList =  searchByAge(people);
  filteredList =  searchByHeight(filteredList);
  filteredList =  searchByWeight(filteredList);
  filteredList =  searchByOccupation(filteredList);
  filteredList =  searchByEyeColor(filteredList);

  if (filteredList.length === 22){
    alert("You said no to all filters, there is no one to display.")
  }
  else if (filteredList.length == 0){
    alert("There is no one that meets your criteria.")
  }
  else {

    for (var i=0; i< filteredList.length; i++){
      listed += filteredList[i].firstName + " " + filteredList[i].lastName + " ";
    }
    alert(listed)    
  }    
  app(people);    
}    
function searchByAge(people){ 
    var ageEntry = prompt("How old do you think they are? Enter the Number \n 1: 30s \n 2: 40s \n 3: 50s \n 4: 60s \n 5: 70s \n 6: 80s");
       if(ageEntry === "1"){
        alert("Here is a list of people in this age group: \n Joey Madden");
          var ageEntries= promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
          switch(ageEntries){
            case 'yes':
              var findName = searchByName(people);
            return findName;
            case 'no':
              var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
              if (suspectNotFound === "yes"){
              return searchByAge(people);
              }
              else if (suspectNotFound === "no"){
                return featureMenu(people);
              }
            default:
            app(people); // restart app
              break;
          }
       }
       else if (ageEntry === "2"){
        alert("There is no one in this age group. Try another selection");
       return searchByAge(people)
     }
       else if (ageEntry === "3"){
        alert("Here is a list of people in this age group: \n Ellen Madden \n Mattias Madden \n Eloise Madden \n Amii Pafoy \n Dave Pafoy \n Annie Pafoy \n Jasmine Bob \n Ralph Bob \n Jill Pafoy");
        var ageEntries= promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
        switch(ageEntries){
          case 'yes':
            var findName = searchByName(people);
          return findName;
          case 'no':
            var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
            if (suspectNotFound === "yes"){
            return searchByAge(people);
            }
            else if (suspectNotFound === "no"){
              return featureMenu(people);
            }
          default:
          app(people); // restart app
            break;
        }
     }
       else if (ageEntry === "4"){
        alert("Here is a list of people in this age group \n Uma Bob \n Billy Bob \n Mister Potatoo \n Hanna Madden \n Regina Madden");
        var ageEntries= promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
        switch(ageEntries){
          case 'yes':
            var findName = searchByName(people);
          return findName;
          case 'no':
            var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
            if (suspectNotFound === "yes"){
            return searchByAge(people);
            }
            else if (suspectNotFound === "no"){
              return featureMenu(people);
            }
          default:
          app(people); // restart app
            break;
        }
     }
       else if (ageEntry === "5"){
        alert("Here is a list of people in this age group \n Missuz Potatoo \n Jon Walkens \n Micheal Walkens");
        var ageEntries= promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
        switch(ageEntries){
          case 'yes':
            var findName = searchByName(people);
          return findName;
          case 'no':
            var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
            if (suspectNotFound === "yes"){
            return searchByAge(people);
            }
            else if (suspectNotFound === "no"){
              return featureMenu(people);
            }
          default:
          app(people); // restart app
            break;
        }
     }
       else if (ageEntry === "6"){
        alert("Here is a list of people in this age group \n Jen Pafoy \n Jack Pafoy \n Mader Madden \n Joy Madden");
        var ageEntries= promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
        switch(ageEntries){
          case 'yes':
            var findName = searchByName(people);
          return findName;
          case 'no':
            var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
            if (suspectNotFound === "yes"){
            return searchByAge(people);
            }
            else if (suspectNotFound === "no"){
              return featureMenu(people);
            }
          default:
          app(people); // restart app
            break;
        }
     }
     else{
       return searchByAge(people);
     }
}
function searchByHeight(people){
  var heightEntry = prompt("How old do you think they are? Enter the Number \n 1: 30s \n 2: 40s \n 3: 50s \n 4: 60s \n 5: 70s \n 6: 80s");
       if(heightEntry === "1"){
        alert("Here is a list of people in this age group: \n Joey Madden");
          var heightEntries= promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
          switch(heightEntries){
            case 'yes':
              var findName = searchByName(people);
            return findName;
            case 'no':
              var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
              if (suspectNotFound === "yes"){
              return searchByAge(people);
              }
              else if (suspectNotFound === "no"){
                return featureMenu(people);
              }
            default:
            app(people); // restart app
              break;
          }
       }
       else if (ageEntry === "2"){
        alert("There is no one in this age group. Try another selection");
       return searchByAge(people)
     }
       else if (ageEntry === "3"){
        alert("Here is a list of people in this age group: \n Ellen Madden \n Mattias Madden \n Eloise Madden \n Amii Pafoy \n Dave Pafoy \n Annie Pafoy \n Jasmine Bob \n Ralph Bob \n Jill Pafoy");
        var ageEntries= promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
        switch(ageEntries){
          case 'yes':
            var findName = searchByName(people);
          return findName;
          case 'no':
            var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
            if (suspectNotFound === "yes"){
            return searchByAge(people);
            }
            else if (suspectNotFound === "no"){
              return featureMenu(people);
            }
          default:
          app(people); // restart app
            break;
        }
     }
       else if (ageEntry === "4"){
        alert("Here is a list of people in this age group \n Uma Bob \n Billy Bob \n Mister Potatoo \n Hanna Madden \n Regina Madden");
        var ageEntries= promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
        switch(ageEntries){
          case 'yes':
            var findName = searchByName(people);
          return findName;
          case 'no':
            var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
            if (suspectNotFound === "yes"){
            return searchByAge(people);
            }
            else if (suspectNotFound === "no"){
              return featureMenu(people);
            }
          default:
          app(people); // restart app
            break;
        }
     }
       else if (ageEntry === "5"){
        alert("Here is a list of people in this age group \n Missuz Potatoo \n Jon Walkens \n Micheal Walkens");
        var ageEntries= promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
        switch(ageEntries){
          case 'yes':
            var findName = searchByName(people);
          return findName;
          case 'no':
            var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
            if (suspectNotFound === "yes"){
            return searchByAge(people);
            }
            else if (suspectNotFound === "no"){
              return featureMenu(people);
            }
          default:
          app(people); // restart app
            break;
        }
     }
       else if (ageEntry === "6"){
        alert("Here is a list of people in this age group \n Jen Pafoy \n Jack Pafoy \n Mader Madden \n Joy Madden");
        var ageEntries= promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
        switch(ageEntries){
          case 'yes':
            var findName = searchByName(people);
          return findName;
          case 'no':
            var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
            if (suspectNotFound === "yes"){
            return searchByAge(people);
            }
            else if (suspectNotFound === "no"){
              return featureMenu(people);
            }
          default:
          app(people); // restart app
            break;
        }
     }
     else{
       return searchByAge(people);
     }
    }
// function searchByWeight(people) {
//   var weightSearch = promptFor("Do you want to search by weight? Enter yes or no.", yesNo).toLowerCase();

//   switch (weightSearch) {
//       case "yes":
//           var findWeight = lookUpWeight(people);
//           return findWeight;
//       case "no":
//           return people;
//       default:
//           searchByWeight(people);
//           break;
//   }
// }

// function searchByOccupation(people) {
//   var occupationSearch = promptFor("Do you want to search by occupation? Enter yes or no.", yesNo).toLowerCase();

//   switch (occupationSearch) {
//       case "yes":
//           var findOccupation = lookUpOccupation(people);
//           return findOccupation;
//       case "no":
//           return people;
//       default:
//           searchByOccupation(people);
//           break;
//   }
// }

// function searchByEyeColor(people) {
//   var eyeColorSearch = promptFor("Do you want to search by eye color? Enter yes or no.", yesNo).toLowerCase();

//   switch (eyeColorSearch) {
//       case "yes":
//           var findEyeColor = lookUpEyeColor(people);
//           return findEyeColor;
//       case "no":
//           return people;
//       default:
//           searchByEyeColor(people);
//           break;
//   }
// }

// function lookUpOccupation(people) {

//   var occupation = promptFor("What is the person's occupation?", chars);
//   var occupationFilteredArray = people.filter(function (element) {

//       if (element.occupation === occupation) {
//           return true;
//       }
//   });

//   return occupationFilteredArray;
// }

// function lookUpEyeColor(people) {

//   var eyeColor = promptFor("What is the person's eye color?", chars);
//   var eyeColorFilteredArray = people.filter(function (element) {

//       if (element.eyeColor === eyeColor) {
//           return true;
//       }
//   });

//   return eyeColorFilteredArray;
// }

// function lookUpHeight(people) {

//   var height = parseInt(promptFor("What is the person's height?", chars));
//   var heightFilteredArray = people.filter(function (element) {

//       if (element.height === height) {
//           return true;
//       }
//   });

//   return heightFilteredArray;
// }

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TO DO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

// function displayInfo(person){
//   // Make a code to call all the traits of the person. (IE: data = (people, [i])), alert([i])
//   // print all of the information about a person:
//   // height, weight, age, name, occupation, eye color.   
//   // let personInfo = "First Name: " + person[i].firstName + "\n";
//   // personInfo += "Last Name: " + person[i].lastName + "\n";
//   // TODO: finish getting the rest of the information to display
//   // let billyBob = data[0];
//   alert(data[i]);
// }

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}