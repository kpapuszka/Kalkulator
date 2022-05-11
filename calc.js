class Calc {

    constructor() {
        this.value = 0;
        this.op = 0; //-1: odejmowanie, 1: dodawanie, 0: nic

        this.container = document.createElement('DIV');
        this.container.id = 'container';

        this.screen = document.createElement('DIV');
        this.screen.id = 'screen';
        this.container.appendChild(this.screen);

        [7,8,9,'C',4,5,6,'+',1,2,3,'-',0,'.','='].forEach(item=>{
            const button = document.createElement('DIV');
            button.textContent = item;
            if(item===0){
                button.className = 'double'
            }
            button.addEventListener('click', event =>this.clickEvent(event));
            this.container.appendChild(button)
        });
    }

    init() {
        document.body.appendChild(this.container)
    }

    clickEvent(event) {

        const key = event.target.textContent;

        switch (key) {
            case 'C':
                this.screen.textContent = '0';
                this.value = 0;
                this.op = 0;
                break;
            case '.':
                if (!this.screen.textContent.includes('.'))
                    this.screen.textContent += key;
                break;
            case '+':
                this.moveToBuffer();
                this.op = 1;
                this.screen.textContent = '0';
                break;
            case '-':
                this.moveToBuffer();
                this.op = -1;
                this.screen.textContent = '0';
                break;
            case '=':
                this.moveToBuffer();
                this.screen.textContent = this.value;
                this.op = 0;
                break;
            default:
                if (this.screen.textContent === '0') {
                    this.screen.textContent = key;
                }
                else {
                    this.screen.textContent += key; /*zmieniamy tekst na screenie*/
                }
        }
    }

get screenValue() {
    return parseFloat(this.screen.textContent);
}

set screenValue(value) {
    this.screenValue.textContent = value;
}

    moveToBuffer() {
        switch (this.op) {
            case 1:
                this.value += this.screenValue
                break;
            case 0:
                this.value = this.screenValue
                break;
            case -1:
                this.value -= this.screenValue
                break;
        }
    }
}

const calc = new Calc();

window.addEventListener('DOMContentLoaded',calc.init.bind(calc));
