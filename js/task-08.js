/**Напиши скрипт управления формой логина.
 * 1. Обработка отправки формы form.login-form должна быть по событию submit.
 * 2. При отправке формы страница не должна перезагружаться.
 * 3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
 * что все поля должны быть заполнены.
 * 4. Если пользователь заполнил все поля и отправил форму, собери значения полей 
 * в обьект, где имя поля будет именем свойства, а значение поля - значением 
 * свойства. Для доступа к элементам формы используй свойство elements.
 * 5. Выведи обьект с введенными данными в консоль и очисти значения полей 
 * формы методом reset.
*/

const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', (event) => {
    event.preventDefault();

    const { currentTarget } = event;
    const { email, password } = currentTarget.elements;

    const messageAlert = 'All fields must be filled!';

    let formData = {};

    if (email.value === '' || password.value === '') {
        alert(messageAlert);
        console.log(messageAlert);
    } else {
        formData.email = `${email.value}`;
        formData.password = `${password.value}`;
        console.log(formData);
    }
    event.currentTarget.reset();
});



// const formSubmitHandler = (event) => {
//     event.preventDefault();
//     const messageAlert = 'All fields must be filled!';    

//     const {
//         elements: { email, password }
//     } = event.currentTarget;
    
//     if (email.value === "" || password.value === "") {
//         return alert(messageAlert);
//     }

//     console.log(`Login: ${email.value}, Password: ${password.value}`);

//     // let foo = {};
//     //{ email: `${email.value}` password: `${password.value}`}


//     event.currentTarget.reset();
// };


// loginFormRef.addEventListener('submit', formSubmitHandler);