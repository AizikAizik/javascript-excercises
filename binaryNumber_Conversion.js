// convert Base 10 number to binary number

function base10ToString(n) {
    var binaryString = "";

    function base10ToStringHelper(n){
        if (n < 2) {
            binaryString += n;
            return;
        }else {
            base10ToStringHelper(Math.floor(n / 2));

            base10ToStringHelper(n % 2);
        }
    }

    base10ToStringHelper(n);
    return binaryString;

}

base10ToString(232)