class Triangle {
    constructor(){
        this.side1 = prompt("Intruduce la longitud del lado 1");
        this.side2 = prompt("Intruduce la longitud del lado 2");
        this.side3 = prompt("Intruduce la longitud del lado 3");
        this.type;
        this.area;
    }
    getArea() {
        let s1 = Number(this.side1);
        let s2 = Number(this.side2);
        let s3 = Number(this.side3);

        if (s1 == s2 && s2 == s3) {
            const a = s1;
            let result = ((Math.round(Math.sqrt(3)*1000)/1000) / 4) * a**2;
            this.area = result;
            this.type = 'equilatero';
        } 
        else if (s1==s2 || s2==s3 || s1 == s3) {
            let a;
            let b;
            if (s1 == s2){
                a = s1;
                b = s3;
            }
            else if (s1 == s3){
                a = s1;
                b = s2;
            } else {
                a = s2;
                b = s1;
            }
            let result = (b * (Math.round(Math.sqrt(a**2 - ((b**2)/4))*1000)/1000))/2;
            this.area = result;
            this.type = 'isósceles';

        } else {
            const a = s1;
            const b = s2;
            const c = s3;
            let s = (a + b + c) / 2;
            let result = Math.round(Math.sqrt(s*(s-a)*(s-b)*(s-c))*1000)/1000;
            this.area = result;
            this.type = 'escaleno';
        }
    }
    print(){
        this.getArea();
        console.log(`Tu triángulo es ${this.type} y su área es ${this.area}u`);
    }
}

const myTriangle = new Triangle();
myTriangle.print();