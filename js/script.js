"use strict";

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};



function rememberMyFilms(){
    let flag = 1;
    let check = false;
    
    while (flag < 3){
        while (!check){
        let qntyFilms = prompt('Один из последних просмотренных фильмов?');
        if(qntyFilms != null && qntyFilms != '' && qntyFilms.length < 10){
            personalMovieDB.movies[flag + 'film'] = qntyFilms;
            check = true;
            console.log(check);
        } else {
            console.log('error');
        }
    }
        while(check){
        let starOfFilm = prompt('На сколько его цените?');
        if(starOfFilm != null && starOfFilm != '' && starOfFilm.length < 10){
            personalMovieDB.movies[flag + 'stars'] = starOfFilm;
            check = false;
        } else {
            console.log('error');
        }
    }
        flag++;
    }
}



function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы настоящий коиноман");
    } else {
        alert('Произошла ошибка');
    }
}





function showMyDB (statusDB) {
    if(!statusDB){
        console.log(personalMovieDB);
    } else {
        console.log("DB is private");
    }
}

function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        let checkGeners = prompt(`Ваш любимый жанр под номером: ${i}`);
        if(checkGeners == '' || checkGeners == null){
            i--;  
        } else {     
            personalMovieDB.genres[i-1] = checkGeners;
        }
    }
}

rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.private);
