const dict = {
    HTML : "Hyper Text Markup Language",
    CSS: "Cascading Style sheet",
    JS: "Javascript"
}

function abbrevaiations(strings, ...values){
    const abbrv = values.map((item) => {
        if(dict[item])
            return `<abbr title = "${dict[item]}">${item}</abbr>`;
        return item;
    });
    return strings.reduce((sentence, string, i) => {
        return `${sentence}${string}${abbrv[ i ] || ''}`;
    }, "");
}

const first = 'Aizik' , last = 'Jefferson';
