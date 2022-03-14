let text = "ПОИГРАЕМ?";
//Далее счет начинается с 0 поэтому let i = 0
let i = 0;
//Введем переменную,отвеч-ую за скорость появления букв, чем > цифра то медленнее
let speed = 150;
//Далее мы должны посчитать сколько символов во фразе (length -23)
console.log(text.length);

/*Создадим функцию letters где i это каждый символ фразы
если i < длины текста(мы не хотим чтобы это выходило ха пределы 23 символов - 
    нашей фразы) ТО покажем текст, который находится на каждом порядковом номере,
    i - это порядковый номер
    */
function letters() {
    if (i < text.length) {
        document.querySelector('.title').textContent += text.charAt(i);
        /* += позволяет присоеденить новые буквы к старым
        показывается только одна буква неск раз, а нам нужно и другие поэтому i++    */
        i++;
        //Далее задаем скорость, через какое время должна появл буква
        setTimeout(letters, speed);
    }
}
letters();


const block = document.querySelector('.block');
const button = document.querySelector('#btn');
button.addEventListener('click', function(){
    block.style.display = 'block';
});
//показываем 2 страницу в сss none
button.addEventListener('click', function(){
    document.body.classList.add('changeimage');
    //меняем фон второй страницы
});
const title = document.querySelector('.title');
button.addEventListener('click', function(){
    title.style.display = 'none';
    button.style.display = 'none';
});
//убираем со второй страницы "Поиграем" и кнопку играть

const image = document.querySelector('#img');
button.addEventListener('click', function(){
    image.style.display = 'none';
});
const image2 = document.querySelector('.image2');
button.addEventListener('click', function(){
    image2.style.display = 'block';
});
//в css display none а здесь блок для второй картинки
button.addEventListener('click', function(){
image2.classList.add('image2Shadow');
});
//создали в css класс для тени рисунка на стр 2
//Далее создаем массив с вопросами и при нажатии на кнопку""Следующий" - смена вопроса
const next = document.querySelector('#next');
const array = ['Около 30% своего времени программисты размышляют над тем, что будущий пользователь может сделать не так в его программе. То есть, что он способен сломать, ввести не так, нажать криво. В общем, создателю программы требуется посмотреть на нее со стороны не профессионала, а простого человека.',
'В программировании всегда считают с нуля. То есть, не с 1, а с 0. В программном коде наши 8 это 7, а 10 это 9. ',
'Если проблема не решается, то лучше оставить ее на потом, чем пытаться решить прямо сейчас. Решение придет само собой или не придет вовсе. И тогда лучше пойти другим путем, а не пытаться пробить стену лбом.',
'В программировании главное это размышление, а не просто тупое печатание. Именно на обдумывании дальнейших задач и уходит до 90% времени профессиональнго программиста.',
'А вот созданию Microsoft мы обязаны американскому мультимиллиардеру Биллу Гейтсу. Компанию он и его товарищ Пол Аллен создали в далеком 1976 году.',
'В 2004 году Марк Цукерберг создал социальную сеть «Facebook».',
'В мире существует около 8 500 языков программирования (да-да, именно так), но при этом число языков, которые используют чаще всего, чуть больше десятка.',
'Язык Java Script был разработан Брендоном Айком за 10 дней.',
'В современном мире программист это одна из самых высокооплачиваемых профессий. Хороший программер всегда найдет себе работы в любой стране мира, будь то страны Евросоюза или США.',
'Спасибо за игру, нажимай на результат)'];

let q = 0;

next.addEventListener('click', () => {
    q++;
if (q > array.length -1) {
    document.style.display = 'none';
}
//???????????????????????????????
 document.querySelector('.question').textContent = array[q];
})

//Далее делаем  при нажатии на кнопку красивый alert
document.querySelector('#true').onclick = function() {
    Swal.fire({
        title: 'Молодец!',
        imageUrl: './pictures/istockphoto-1297847779-170667a.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
}

document.querySelector('#false').onclick = function() {
    Swal.fire({
        icon: 'error',
        title: 'Oй...',
        text: 'Подумай!',
      })
}

document.querySelector('#result').onclick = function() {
     
Swal.fire({
    title: 'Cейчас ты знаешь о программировании немного больше!',
    imageUrl: './pictures/photo-1502355984-b735cb2550ce.jfif',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
}
const btnResult = document.querySelector('#result');

const audio = document.querySelector('.myAudio');
btnResult.addEventListener('click', playMusic);
function playMusic(){
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
}