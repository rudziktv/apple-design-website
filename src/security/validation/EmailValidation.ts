const CheckEmail = (value: string, igonreEmpty?: boolean) => {
    const validTopLevelDomain = new RegExp(
        "^([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+)\\.(.*[^\\.]$)$"
    );
    const validDomain = new RegExp("([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+)").test(
        value
    );
    const validForm = new RegExp("([a-zA-Z0-9\\_\\-\\.]+)@").test(value);

    if (igonreEmpty && value === "") {
        return "";
    }

    console.log("top domain", validTopLevelDomain.exec(value));

    if (value.includes(" ")) {
        return "Email cannot contain spaces";
    }

    if (!validForm) {
        return "Email must contain '@'";
    } else if (!validDomain) {
        return "Email must contain valid domain";
    } else if (!validTopLevelDomain.test(value)) {
        return "Email must contain top level domain";
    }
    return "";
};

export { CheckEmail };
