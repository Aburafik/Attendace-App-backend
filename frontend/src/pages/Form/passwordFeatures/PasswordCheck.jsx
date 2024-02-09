// import React from 'react'

class PasswordCheck {
    constructor() {
      this.plaintext = [];
      this.stringSize = this.stringSize.bind(this)
      this.isEightOrMore = this.isEightOrMore.bind(this);
      this.containsUpperAndLower = this.containsUpperAndLower.bind(this);
      this.add = this.add.bind(this)
    }

    stringSize(){
        return this.plaintext.length > 0 ? this.plaintext.length - 1 : 0;
    }

    isEightOrMore() {
      const len = this.stringSize();
      if (this.plaintext[len] && this.plaintext[len].length >= 8){
        console.log(this.plaintext[len])
        return true
      }
      return false
    }

    containsUpperAndLower() {
        let uppercase = false;
        let lowercase = false;
        const len = this.stringSize()
        for(let i of this.plaintext[len].split('')){ // split the string to an array of characters
            if (i === i.toUpperCase() && i !== i.toLowerCase()){
                uppercase = true;
            } else if (i === i.toLowerCase() && i !== i.toUpperCase()){
                lowercase = true;
            };
            if (lowercase && uppercase){
                return true;
            } else {
                return false;
            }
        };
    };

    add(element){
        if (element === ''){
            const foundAt = this.plaintext.indexOf(element);
            this.plaintext.splice(foundAt, 1);
        } else {
            this.plaintext.push(element);
        };
    }
}

export default PasswordCheck