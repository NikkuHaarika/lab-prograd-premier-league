//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon){
 var details = [];
  details.push(managerName, managerAge, currentTeam, trophiesWon);
  return details;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
 if(formation.length == 0)
return null;
else{
  formation =[2,3,1];
  return formation;
}
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
  var final=[];
 for(var i=0;i<players.length;i++){
  if(players[i].debut == year)
   final.push(players[i]);
   }
return final;
}




//Progression 4 - Filter players that play at the position _______
function filterByPosition(Pos){
  var final=[];
  if(Pos == null)
   return final;
   else{
  for(var i=0;i<players.length;i++){
    if(players[i].position == Pos)
    final.push(players[i]);
   }
  return final;
}
}



//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName){
var final=[];
if(awardName == null)
return final;
else{
  for(var i=0;i<players.length;i++){
    for(var j=0;j<players[i].awards.length;j++){
    if(players[i].awards[j].name == awardName)
    final.push(players[i]);
   }
  }
  return final;
}
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes){
  var final=[];
 if(awardName == null || noOfTimes == null)
  return final;
  else{
    for(var i=0;i<players.length;i++){
      var times=0;
      for(var j=0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name == awardName)
      times++;
     }
     if(times==noOfTimes)
     final.push(players[i]);
    }
    }
   return final;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country){
  var final=[];
  if(awardName == null || country == null)
   return final;
   else {
    for(var i=0;i<players.length;i++){
      for(var j=0;j<players[i].awards.length;j++){
        if(players[i].country==country && players[i].awards[j].name==awardName)
        final.push(players[i]);
      }
    }
   }
   return final;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, t, a){
  var final=[];
  if(noOfAwards == null || t == null || a == null)
   return final;
   else{
    for(var i=0;i<players.length;i++){
      var times=0;
      for(var j=0;j<players[i].awards.length;j++){
        if(players[i].team==t && players[i].age < a)
           times++;
      }
      if(times >= 1)
     final.push(players[i]);
   }
   }
   return final;
}

//Progression 9 - Sort players in descending order of their age



//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
