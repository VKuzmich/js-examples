 window.onload = function(){
     let cpuNum = Math.floor(Math.random() * 10);
     console.log(cpuNum);

     document.querySelector('.btn').oncklick = function(){

        let inNum = document.querySelector('.inNum').nodeValue;
        inNum = parseInt(inNum);

         if (!isNaN(inNum) && inNum >=0 && inNum <=10) {

            if(inNum == cpuNum) {
                document.querySelector('.outresult').innerHTML= 'You have got it';
            }
            else {
                document.querySelector('.outResult').innerHTML= 'Try again!';
            }
         }
         else if (isNaN(inNum)) {
             alert ('you wrote not a number! write only numbers (from 0 to 10)');
         }
         else {
             alert ('write number from 0 to 10');
         }
     }
 }