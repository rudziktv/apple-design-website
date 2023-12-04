const CheckPassword = (password: string, igonreEmpty?: boolean) => {
    if (igonreEmpty && password == "") {
        return "";
    }

    if (password.length < 8) {
        return "Password must be at least 8 characters";
    }

    return "";
};

export { CheckPassword };
