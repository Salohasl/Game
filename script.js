<!DOCTYPE HTML>>
<html>
 <head>
  <meta charset="utf-8">
  <title>МиниИгра</title>
 </head>
 <body>
    <script>
        let text = document.querySelector('#text');
        let name = prompt('Привет, как тебя зовут?')
        while(name == '' || name == null){
            name = prompt('Привет, как тебя зовут?');
        }
        alert(name + ', я хочу сыграть с тобой в игру, я загадал число от 1 до 100, ты должен отгадать, написав это число в строке, я буду говорить "меньше", "больше" или "угадал", когда будешь писать числа, погнали.');
 
        let number = Math.ceil(Math.random() * 100);
        let guess = prompt('Какое число я загадал?');
        let kolNum = 0;
        while(guess != number){
            if(guess < number){
               guess = prompt('мало, пробуй дальше');
               kolNum = kolNum + 1;
            }
            if(guess > number){
                guess = prompt('много, пробуй дальше');
                kolNum = kolNum + 1;
            }
        }
        alert(number + ', поздравляю, ты молодец.' + ' ' + kolNum + ' '+' это количество твоих попыток');
    
    </script>
 </body>
 </html>
