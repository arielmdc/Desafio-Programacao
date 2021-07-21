function SequenciaCrescente(){
    
    let count = 0;
    let j = 1;
    for (let i = 0; i < numbersList.length; i++) {
    
        if(j < numbersList.length){
            
        if(numbersList[i].numero >= numbersList[j].numero){
            count += 1;       
        }
        j++
    }
    }
      if(count < 2){
          return true;
      }else{
          return false;
      }
    
}
 console.log("[1, 3, 2, 1]:",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 3},
     {id: '3', numero: 2},
     {id: '4', numero: 1},
 ]));

 console.log("[1, 3, 2]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 3},
     {id: '3', numero: 2},
 ]));

 console.log("[1, 2, 1, 2]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 2},
     {id: '3', numero: 1},
     {id: '4', numero: 2},
 ]));

 console.log("[3, 6, 5, 8, 10, 20, 15]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 3},
     {id: '2', numero: 6},
     {id: '3', numero: 5},
     {id: '4', numero: 8},
     {id: '5', numero: 10},
     {id: '6', numero: 20},
     {id: '7', numero: 15},
 ]));

 console.log("[1, 1, 2, 3, 4, 4]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 1},
     {id: '3', numero: 2},
     {id: '4', numero: 3},
     {id: '5', numero: 4},
     {id: '6', numero: 4},
 ]));

 console.log("[1, 4, 10, 4, 2]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 4},
     {id: '3', numero: 10},
     {id: '4', numero: 34},
     {id: '5', numero: 2},
 ]));

 console.log("[10, 1, 2, 3, 4, 5]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 10},
     {id: '2', numero: 1},
     {id: '3', numero: 2},
     {id: '4', numero: 3},
     {id: '5', numero: 4},
     {id: '6', numero: 5},
 ]));

 console.log("[1, 1, 1, 2, 3]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 1},
     {id: '3', numero: 1},
     {id: '4', numero: 2},
     {id: '5', numero: 3},
 ]));

 console.log("[0, -2, 5, 6]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 0},
     {id: '2', numero: -2},
     {id: '3', numero: 5},
     {id: '4', numero: 6},
 ]));

 console.log("[1, 2, 3, 4, 5, 3, 5, 6]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 2},
     {id: '3', numero: 3},
     {id: '4', numero: 4},
     {id: '5', numero: 5},
     {id: '6', numero: 3},
     {id: '7', numero: 5},
     {id: '8', numero: 6},
 ]));

 console.log("[40, 50, 60, 10, 20, 30]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 40},
     {id: '2', numero: 50},
     {id: '3', numero: 60},
     {id: '4', numero: 10},
     {id: '5', numero: 20},
     {id: '6', numero: 30},
 ]));

 console.log("[1, 1]:",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 1},
 ]));

 console.log("[1, 2, 5, 3, 5]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 2},
     {id: '3', numero: 5},
     {id: '4', numero: 3},
     {id: '5', numero: 5},
 ]));

 console.log("[1, 2, 5, 5, 5]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 2},
     {id: '3', numero: 5},
     {id: '4', numero: 5},
     {id: '5', numero: 5},
 ]));

 console.log("[10, 1, 2, 3, 4, 5, 6, 1]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 10},
     {id: '2', numero: 1},
     {id: '3', numero: 2},
     {id: '4', numero: 3},
     {id: '5', numero: 4},
     {id: '6', numero: 5},
     {id: '7', numero: 6},
     {id: '8', numero: 1},
 ]));

 console.log("[1, 2, 3, 4, 3, 6]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 2},
     {id: '3', numero: 3},
     {id: '4', numero: 4},
     {id: '5', numero: 3},
     {id: '6', numero: 6},
 ]));

 console.log("[1, 2, 3, 4, 99, 5, 6]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 1},
     {id: '2', numero: 2},
     {id: '3', numero: 3},
     {id: '4', numero: 4},
     {id: '5', numero: 99},
     {id: '6', numero: 5},
     {id: '7', numero: 6},
 ]));

 console.log("[123, -17, -5, 1, 2, 3, 12, 43, 45]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 123},
     {id: '2', numero: -17},
     {id: '3', numero: -5},
     {id: '4', numero: 1},
     {id: '5', numero: 2},
     {id: '6', numero: 3},
     {id: '7', numero: 12},
     {id: '8', numero: 43},
     {id: '9', numero: 45},
 ]));

 console.log("[3, 5, 67, 98, 3]",SequenciaCrescente(numbersList = [
     {id: '1', numero: 3},
     {id: '2', numero: 5},
     {id: '3', numero: 67},
     {id: '4', numero: 98},
     {id: '5', numero: 3},
 ]));