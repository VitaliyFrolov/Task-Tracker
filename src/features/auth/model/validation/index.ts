const emailValidation = {
    required: 'Введите адрес электронной почты',
    maxLength: {
        value: 50,
        message: 'Привышено кол-во символов'
    },
    minLength: {
        value: 8,
        message: 'Слишком короткий адрес электронной посты'
    },
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'Введен некорректный адрес электронной почты'
    }
}

const passwordValidation = {
    required: 'Введите пароль',
    maxLength: {
        value: 30,
        message: 'Слишком длинный пароль'
    },
    minLength: {
        value: 6,
        message: 'Слишком маленький пароль'
    },
    pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,
        message: 'Пароль должен содержать как буквы так и числа'
    }
}

export { emailValidation, passwordValidation };