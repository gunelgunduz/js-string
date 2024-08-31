// Task 1:
// Əvvəlində və sonunda boşluqları olan bir string yazın. Ekranda
// düyməyə click etdiyimiz zaman string-də olan bu boşluqlar silinərək
// console-da çıxarılsın. Bu tapşırığı edərkən (Task 1) funksiyanın
// içərisində console-dan istifadə etmirik. Return istifadə olunmalıdır.

// function trimString(str) {
//     return str.trim();
// }


// function handleClick() {
//     const inputElement = document.getElementById("inputString");
//     const originalString = inputElement.value;

   
//     const trimmedString = trimString(originalString);

   
//     document.getElementById("original").textContent = `"${originalString}"`;
//     document.getElementById("trimmed").textContent = `"${trimmedString}"`;
// }

// Task 2:
// https://www.youtube.com/
// Fərz edin ki, belə bir string-iniz var. Kiçik bir dəyişikliklə youtube sözünü
// facebook ilə əvəz edin. Daha sonra alınan string-in uzunluğunu taparaq
// console-da çıxarın. Bu əməliyyatların hamısı istifadəçi ekranda olan
// düymələrdən birinə click etdiyi zaman baş verməlidir.


// function replaceAndDisplay() {
    
//     let originalString = "https://www.youtube.com/";

//     let newString = originalString.replace("youtube", "facebook");

//     let lengthOfString = newString.length;

//     document.getElementById("originalUrl").textContent = originalString;
//     document.getElementById("newUrl").textContent = newString;
//     document.getElementById("urlLength").textContent = lengthOfString;
// }



// Task 3:
// Bir funksiya yazın. Bu funksiyanı çağırarkən ona argument olaraq bir
// string ötürün. Əgər ötürülən string-in ilk hərfi ‘M’ hərfi ilə başlayarsa, o
// zaman console-da bu string-i 3 dəfə ardıcıl təkrar edərək çıxarın.
// Nəzərə alın ki, funksiyaya ötürülən string böyük hərflə və yaxud kiçik
// hərflə başlaya bilər. Hər iki halda belə qurduğunuz alqoritm düzgün
// işləməlidi.

// function repeatIfStartsWithM(str) {
    
//     if (str.charAt(0).toUpperCase() === 'M') {
      
//         console.log(str.repeat(3));
//     }
// }

// Task 4:
// 2 bir birindən fərqli olan string tipində dəyişən elan edin. 1ci dəyişənin
// 3-6 simvollar aralığını, 2ci dəyişənin isə 1-4 simvollar aralığını kəsib
// götürün. Daha sonra isə bu kəsilən 2 hissəni bir birinə birləşdirib yeni
// bir string yaradın. Nəzərə alın ki, bu string-lər birləşəndən sonra ilk
// hərfimiz böyük hərflə olacaq. Bütün bu məntiq istifadəçi ekranda
// düyməyə click etdiyi zaman baş versin.

// function manipulateStrings() {

//     let string1 = "JavaScript";
//     let string2 = "Programming";

    
//     let part1 = string1.slice(2, 6); 

   
//     let part2 = string2.slice(0, 4) 

   
//     let combinedString = part1 + part2;

 
//     let finalString = combinedString.charAt(0).toUpperCase() + combinedString.slice(1);

//     document.getElementById("result").textContent = finalString;
// }


// Task 5:
// “matrixacademy@gmail.com”
// Bu bizim string tipində olan dəyişənimizdir. Yoxlayın ki, bu stringdə
// həqiqətən mail addressi doğrudur mu? Regex istifadə edin (@
// işarəsinin olub olmadığını yoxlamalısız)

// function validateEmail(email) {
  
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
   
//     return emailRegex.test(email);
// }

// function checkEmail() {
//     const email = "matrixacademy@gmail.com";
    
   
//     if (validateEmail(email)) {
//         console.log("Email address is valid.");
//     } else {
//         console.log("Email address is invalid.");
//     }
// }


// checkEmail();


// Task 6:
// 2 string tipində olan dəyişən elan edin. Bu dəyişənlərdən 1cinin
// uzunluğu digərindən çox olsa 1cini, əks halda isə 2ci dəyişəni
// console-da çıxarın. Bütün bu hadisələr istifadəçi ekranda düyməyə click
// etdiyi zaman baş versin.

// function compareStringLengths() {
//     // İki string dəyişən elan edirik
//     let string1 = "MatrixAcademy";
//     let string2 = "Programming";

//     // Uzunluqlarını müqayisə edirik və nəticəni console-da çıxarırıq
//     if (string1.length > string2.length) {
//         console.log(string1);
//     } else {
//         console.log(string2);
//     }
// }
