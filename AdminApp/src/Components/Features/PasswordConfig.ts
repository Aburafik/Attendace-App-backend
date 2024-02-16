class PasswordCheck {
    plaintext: string
    constructor() {
        this.plaintext = '';
    }

    isEightOrMore() {
        return this.plaintext.length >= 8;
    }

    containsUpperAndLower() {
        return /[a-z]/.test(this.plaintext) && /[A-Z]/.test(this.plaintext);
    }

    constainsAnumber() {
        return /[0-9]/.test(this.plaintext)
    }

    containsAspecialChar() {
        return this.plaintext.length > 0 && /[!@#\$%\^&\*\(\)_{}\[\]:;"'<>,\.\|~\?/\\+=\-]/.test(this.plaintext)
    }

    add(input: any) {
        this.plaintext = input;
    }
}

export default PasswordCheck;
