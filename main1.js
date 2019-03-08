 window.onload = function(){
     let cpuNum = Math.floor(Math.random() * 10);
     console.log(cpuNum);

     document.querySelector('.btn').onclick = function(){

        let inNum = document.querySelector('.inNum').value;
        inNum = parseInt(inNum);

         if (!isNaN(inNum) && inNum >=0 && inNum <=10) {

            if(inNum == cpuNum) {
                document.querySelector('.outResult').innerHTML= 'You have got it';
                setTimeout(
                    function(){
                        location.reload();
                    },
                    3000
                )
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