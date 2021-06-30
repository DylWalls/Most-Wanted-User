"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people) {
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch (searchType) {
    case 'yes':
      searchResults = searchByName(people);
      console.log(searchResults);
      break;
    case 'no':
      //search by traits 
      searchResults = featureMenu(people);
      break;
    default:
      app(people); // restart app
      break;
  }

  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people) {

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if (!person) {
    alert("Lets search by traits.");  // link the function traits to Answer of "NO"
    return app(people); // restart
  }

  let displayOption = prompt(`Found ${person[0].firstName + " " + person[0].lastName}. Do you want to know their 'info', 'spouse', or 'family'? Type the option you want or 'restart' or 'quit'`);
  switch (displayOption) {
    case "info":
      alert(`First Name: ${person[0].firstName} \n Last Name: ${person[0].lastName} \n DoB: ${person[0].dob} \n Occupation: ${person[0].occupation} \n Gender: ${person[0].gender} \n Eye Color: ${person[0].eyeColor} \n Height: ${person[0].height} \n Weight: ${person[0].weight}`)
      return mainMenu(person, people);
    case "spouse":
      // TODO: get person's family
      let spouseID = person[0].currentSpouse;
      let foundSpouse;
        foundSpouse = people.filter(function (person) {
          if (spouseID === person.id) {
            return true;
          }
        });
      if(foundSpouse[0] != undefined){
        alert(`Spouse: ${foundSpouse[0].firstName} ${foundSpouse[0].lastName}`)
      }else if (foundSpouse[0] === undefined){
        var gotYa = promptFor(`${person[0].firstName} ${person[0].lastName} is currently single. Would you like their number? \n Enter 'yes' or 'no'`, yesNo).toLowerCase();
        switch (gotYa){
          case 'yes':
            alert(`You can't date ${person[0].firstName} ${person[0].lastName}, they're a suspect!`);
            if(gotYa === 'yes'){
              return mainMenu(person, people);
            }
          case 'no':
            alert(`Well, that's a relief: ${person[0].firstName} ${person[0].lastName} was out of your league anyway...`);
            if(gotYa === 'no'){
            return mainMenu(person, people);
          }
        }
      }
      return mainMenu(person, people);
    case "family":
      findDescendants(people, person);
      stringifier;
      let parentsArray = person[0].parents;
      let foundFamily;
      foundFamily = people.filter(function (person) {
        if(parentsArray.includes(person.id)) {
            return true;
          }else if(parentsArray[0] === person.currentSpouse || parentsArray[1] === person.currentSpouse){
            return true;
          }
        });
      alert(`Family: ${stringifier}`);
      return mainMenu(person, people);
    case "restart":
      app(people); // restart
      break;
    case "quit":
      return; // stop execution
    default:



    
      return mainMenu(person, people); // ask again
  }
}

function featureMenu(people) {
  var userInput = prompt("What feature do you want to search by? \n 1: Age \n 2: Height \n 3: Weight \n 4: Gender \n 5: Eye Color \n 6: Occupation");
  if (userInput === "1") {
    return searchByAge(people);
  }
  else if (userInput === "2") {
    return searchByHeight(people);
  }
  else if (userInput === "3") {
    return searchByWeight(people);
  }
  else if (userInput === "4") {
    return searchByGender(people);
  }
  else if (userInput === "5") {
    return searchByEyeColor(people);
  }
  else if (userInput === "6") {
    return searchByOccupation(people);
  }

  var listed = "";
  var filteredList;

  filteredList = searchByAge(people);
  filteredList = searchByHeight(filteredList);
  filteredList = searchByWeight(filteredList);
  filteredList = searchByOccupation(filteredList);
  filteredList = searchByEyeColor(filteredList);
  filteredList = searchByGender(filteredList);

  if (filteredList.length === 22) {
    alert("You said no to all filters, there is no one to display.")
  }
  else if (filteredList.length == 0) {
    alert("There is no one that meets your criteria.")
  }
  else {

    for (var i = 0; i < filteredList.length; i++) {
      listed += filteredList[i].firstName + " " + filteredList[i].lastName + " ";
    }
    alert(listed)
  }
  app(people);
}
function searchByAge(people) {
  var ageEntry = prompt("How old do you think they are? Enter the Number \n 1: 30s \n 2: 40s \n 3: 50s \n 4: 60s \n 5: 70s \n 6: 80s");
  if (ageEntry === "1") {
    alert("Here is a list of people in this age group: \n Joey Madden");
    var ageEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (ageEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByAge(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (ageEntry === "2") {
    alert("There is no one in this age group. Try another selection");
    return searchByAge(people)
  }
  else if (ageEntry === "3") {
    alert("Here is a list of people in this age group: \n Ellen Madden \n Mattias Madden \n Eloise Madden \n Amii Pafoy \n Dave Pafoy \n Annie Pafoy \n Jasmine Bob \n Ralph Bob \n Jill Pafoy");
    var ageEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (ageEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByAge(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (ageEntry === "4") {
    alert("Here is a list of people in this age group \n Uma Bob \n Billy Bob \n Mister Potatoo \n Hanna Madden \n Regina Madden");
    var ageEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (ageEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByAge(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (ageEntry === "5") {
    alert("Here is a list of people in this age group \n Missuz Potatoo \n Jon Walkens \n Micheal Walkens");
    var ageEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (ageEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByAge(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (ageEntry === "6") {
    alert("Here is a list of people in this age group \n Jen Pafoy \n Jack Pafoy \n Mader Madden \n Joy Madden");
    var ageEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (ageEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by age? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByAge(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else {
    return searchByAge(people);
  }
}
function searchByHeight(people) {
  var heightEntry = prompt("How tall do you think they are? Enter the Number \n 1: 55-59 \n 2: 60-64 \n 3: 65-69 \n 4: 70-74 \n 5: 75-79");
  if (heightEntry === "1") {
    alert("Here is a list of people in this height range: \n Joey Madden \n Missuz Potatoo");
    var heightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (heightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by height? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByHeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (heightEntry === "2") {
    alert("Here is a list of people in this height range: \n Dave Pafoy \n Annie Pafoy \n Jon Walkens \n Eloise Madden");
    var heightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (heightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by height? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByHeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (heightEntry === "3") {
    alert("Here is a list of people in this height range: \n Uma Bob \n Mister Potatoo \n Ralph Bob \n Joey Madden \n Ellen Madden \n Joy Madden");
    var heightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (heightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by height? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByHeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (heightEntry === "4") {
    alert("Here is a list of people in this height range: \n Mattias Madden \n Jack Pafoy \n Hana Madden \n Billy Bob \n Regina Madden \n Jen Pafoy \n Amii Pafoy \n Jill Pafoy");
    var heightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (heightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by height? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByHeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (heightEntry === "5") {
    alert("Here is a list of people in this height range: \n Mader Madden \n Michael Walkens");
    var heightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (heightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by height? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByHeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else {
    return searchByHeight(people);
  }
}
function searchByWeight(people) {
  var weightEntry = prompt("How heavy do you think they are? Enter the Number \n 1: 100-124 \n 2: 125-149 \n 3: 150-174 \n 4: 175-199 \n 5: 200-224 \n 6: 225-249 \n 7: 250-274");
  if (weightEntry === "1") {
    alert("Here is a list of people in this weight range: \n Joey Madden \n Ellen Madden \n Dave Pafoy \n Jill Pafoy \n Jon Walkens");
    var weightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (weightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by weight? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByWeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  if (weightEntry === "2") {
    alert("Here is a list of people in this weight range: \n Mattias Madden \n Missuz Potatoo");
    var weightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (weightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by weight? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByWeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  if (weightEntry === "3") {
    alert("Here is a list of people in this weight range: \n Jasmine Bob \n Mister Potatoo \n Uma Bob");
    var weightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (weightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by weight? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByWeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  if (weightEntry === "4") {
    alert("Here is a list of people in this weight range: \n Hana Madden \n Amii Pafoy \n Ralph Bob \n Joy Madden \n Billy Bob");
    var weightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (weightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by weight? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByWeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  if (weightEntry === "5") {
    alert("Here is a list of people in this weight range: \n Mader Madden \n Jack Pafoy");
    var weightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (weightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by weight? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByWeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  if (weightEntry === "6") {
    alert("Here is a list of people in this weight range: \n Eloise Madden \n Regina Madden \n Annie Pafoy");
    var weightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (weightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by weight? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByWeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  if (weightEntry === "7") {
    alert("Here is a list of people in this weight range: \n Jen Pafoy \n Michael Walkens");
    var weightEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (weightEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by weight? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByWeight(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else {
    return searchByHeight(people);
  }
}
function searchByGender(people){
  var genderEntry = prompt("Lets search by Gender. Enter a number: \n 1: Male \n 2: Female");
  if (genderEntry === "1") {
    alert("Here is a list of people that are Males: \n Mister Potatoo \n Jack Pafoy \n Jon Walkens \n Micheal Walkens \n Dave Pafoy \n Billy Bob \n Mattias Madden \n Ralph Bob \n Mader Madden");
    var genEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (genEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Gender? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByGender(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (genderEntry === "2") {
    alert("Here is a list of people that are Females: \n Joey Madden \n Ellen Madden \n Uma Bob \n Eloise Madden \n Hana Madden \n Regina Madden \n Amii Pafoy \n Jill Pafoy \n Annie Pafoy \n Jasmine Bob \n Jen Pafoy \n Joy Madden \n Missuz Potatoo ");
    var genEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (genEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Occupation? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByGender(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else {
    return featureMenu(people);
  }
}
function searchByEyeColor(people){
  var eyeEntry = prompt("Lets search by eye color. Enter a number: \n 1: Blue \n 2: Brown \n3: Green \n4: Hazel \n5: Black");
  if (eyeEntry === "1") {
    alert("Here is a list of people that have Blue eyes: \n Joey Madden \n Ellen Madden \n Mattias Madden \n Jasmine Bob \n Ralph Bob \n Missuz Potatoo");
    var colorEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (colorEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Gender? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByEyeColor(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  if (eyeEntry === "2") {
    alert("Here is a list of people that have Brown eyes: \n Eloise Madden \n Hana Madden \n Regina Madden \n Ammi Pafoy \n Jill Pafoy \n Jon Walkens \n Micheal Walkens \n Uma Bob \n Billy Bob");
    var colorEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (colorEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by eye color? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByEyeColor(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  if (eyeEntry === "3") {
    alert("Here is a list of people that have Green eyes: \n Dave Pafoy");
    var colorEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (colorEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by eye color? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByEyeColor(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  if (eyeEntry === "4") {
    alert("Here is a list of people that have Hazel eyes: \n Annie Pafoy \n Joy Madden \n Mister Potatoo");
    var colorEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (colorEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by eye color? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByEyeColor(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  if (eyeEntry === "5") {
    alert("Here is a list of people that have Black eyes: \n Mader Madden \n Jen Pafoy \n Jack Pafoy");
    var colorEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (colorEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by eye color? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByEyeColor(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else {
    return featureMenu(people);
  }
}
function searchByOccupation(people) {
  var occEntry = prompt("What occupation do you think they do for a living? Enter a number: \n 1: Doctor \n 2: Assistant \n 3: Politician \n 4: Nurse \n 5: Landscaper \n 6: Programmer \n 7: Architect \n 8: Student");
  if (occEntry === "1") {
    alert("Here is a list of people in this Occupation: \n Joey Madden \n Ellen Madden \n Dave Pafoy \n Joy Madden");
    var occEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (occEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Occupation? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByOccupation(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (occEntry === "2") {
    alert("Here is a list of people in this Occupation: \n Mattias Madden \n Eloise Madden \n Jasmine Bob \n Jon Walkens \n Uma Bob ");
    var occEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (occEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Occupation? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
         return searchByOccupation(people);
      }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
      }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (occEntry === "3") {
    alert("Here is a list of people in this Occupation: \n Hana Madden ");
    var occEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (occEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Occupation? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByOccupation(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (occEntry === "4") {
    alert("Here is a list of people in this Occupation: \n Ralph Bob \n Jack Pafoy \n Regina Madden");
    var occEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (occEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Occupation? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByOccupation(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (occEntry === "5") {
    alert("Here is a list of people in this Occupation: \n Micheal Walkens \n Annie Pafoy \n Mader Madden \n Amii Pafoy");
    var occEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (occEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Occupation? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByOccupation(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (occEntry === "6") {
    alert("Here is a list of people in this Occupation: \n Billy Bob \n Jill Pafoy ");
    var occEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (occEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Occupation? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByOccupation(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
 else if (occEntry === "7") {
    alert("Here is a list of people in this Occupation: \n Missuz Potatoo \n Mister Potatoo");
    var occEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (occEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Occupation? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByOccupation(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else if (occEntry === "8") {
    alert("Here is a list of people in this Occupation: \n Jen Pafoy ");
    var occEntries = promptFor("Did you find who you were looking for? Enter Yes or No", yesNo).toLowerCase();
    switch (occEntries) {
      case 'yes':
        var findName = searchByName(people);
        return findName;
      case 'no':
        var suspectNotFound = promptFor("Do you want to restart search by Occupation? Enter Yes or No", yesNo).toLowerCase();
        if (suspectNotFound === "yes") {
          return searchByOccupation(people);
        }
        else if (suspectNotFound === "no") {
          return featureMenu(people);
        }
      default:
        app(people); // restart app
        break;
    }
  }
  else {
    return featureMenu(people);
  }
}
function searchByName(people) {
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function (person) {
    if (person.firstName === firstName && person.lastName === lastName) {
      return true;
    }
    else {
      return false;
    }
  })
  // TO DO: find the person using the name they entered
  return foundPerson;
}
// alerts a list of people
function displayPeople(people) {
  alert(people.map(function (person) {
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

// function that prompts and validates user input
function promptFor(question, valid) {
  do {
    var response = prompt(question).trim();
  } while (!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input) {
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input) {
  return true; // default validation only
}

function stringifier(array){
  let fullNameStringArray = [];
  for (let i = 0; i < array.length; i++) {
    let fullNameString = `${array[i].firstName} ${array[i].lastName}`;
    fullNameStringArray.push(fullNameString);
  }
  return fullNameStringArray.join('\n');
}
let stringified = stringifier();
console.log(stringified);

function findDescendants(array, objectInArray){
    let foundDescendants = [];
    for ( let i=0; i<array.length; i++){
        if (array[i].parents.includes(objectInArray.id)){
           foundDescendants.push(array[i])
        }
    }
    for (let i=0; i<foundDescendants.length; i++){
      foundDescendants = foundDescendants.concat(findDescendants(array, foundDescendants[0]));
    }
    return foundDescendants;
} 