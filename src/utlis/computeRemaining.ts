export interface Result {
  firstWarning: number;
  secondWarning: number;
  deprivedFlag: number;
  possibleCombinations: {lectures: number, tutorials: number}[]
}


export const CalculateAbsense = (courseID: string, credits: number, missedLecs: number, missedTuts: number): Result => {
  const result: Result = {
    firstWarning: 0,
    secondWarning: 0,
    deprivedFlag: 0,
    possibleCombinations: Array(7).fill({}).map(() => ({ lectures: -1, tutorials: -1 }))
    };
  
   let OddGENsCourse = ["GEN341","GEN342","GEN004","GEN333"];
   let CurrentPoints, LecsPoints, TutsPoints, j=0;
  
   let courseCode = courseID.slice(0,3);
   let courseNumber = courseID.slice(4,7);
   let course = courseCode + courseNumber;
  

    //======Case 1======:
    if ((credits === 1 || (credits===2 && courseCode === "GEN") || (courseCode === "CMP" && courseNumber === "111")) && !OddGENsCourse.includes(course)){
      //Core Algorithm
      result.possibleCombinations[0].lectures = 3 - missedLecs;
      console.log(missedLecs)

      //Return
      if (result.possibleCombinations[0].lectures >= 0){
          if (result.possibleCombinations[0].lectures === 1){
             result.firstWarning = 1;
             result.secondWarning = 0;
          }
          else if (result.possibleCombinations[0].lectures === 0){
            result.firstWarning = 0;
            result.secondWarning = 1;
          }
      }
      else result.deprivedFlag = 1;
      return result;
    }
  
    //======Case 2======:
    if ((credits ===2 && courseCode !== "GEN") || OddGENsCourse.includes(course)){
      console.log('as')
      //Core Algorithm
      CurrentPoints = 6 - (1 * missedLecs + 1 * missedTuts);
      for (let i = 0; i <= CurrentPoints; i++) {
        LecsPoints = CurrentPoints - i;
        TutsPoints = i;
        result.possibleCombinations[j].lectures = LecsPoints / 1;
        result.possibleCombinations[j].tutorials = TutsPoints / 1;
        j = j+1;
      }
  
      if (CurrentPoints>=0) {
        if (CurrentPoints <= 2 && CurrentPoints > 1){
          result.firstWarning = 1;
          result.secondWarning = 0;
        }
        else if (CurrentPoints <= 1 && CurrentPoints >= 0){
          result.firstWarning = 0;
          result.secondWarning = 1;
        }
  
      }
      else result.deprivedFlag = 1;
      return result;
    }
  
    //======Case 3======:

    if (credits === 3){
      //Core Algorithm
      CurrentPoints = 10 - (2 * missedLecs + 1 * missedTuts);

      for (let i = 0; i <= CurrentPoints; i++) {
        LecsPoints = CurrentPoints - i;
        TutsPoints = i;
        if (LecsPoints % 2 === 0) {
          result.possibleCombinations[j].lectures = LecsPoints/2;
          result.possibleCombinations[j].tutorials = TutsPoints/1;
          j=j+1;
        }

      }

      //Return Results
      if (CurrentPoints >= 0) {
        if (CurrentPoints <= 4 && CurrentPoints > 2){
          result.firstWarning = 1;
          result.secondWarning = 0;
        }
        else if (CurrentPoints <= 2 && CurrentPoints >= 0){
          result.firstWarning = 0;
          result.secondWarning = 1;
        }
      }
      else result.deprivedFlag = 1;
      return result;
    }

    else return result;
  } 