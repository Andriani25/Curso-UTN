const calcularAreaTriangulo = (base: number, altura: number) => (console.log((base * altura) / 2))

calcularAreaTriangulo(5,10)

const calcularCircunferencia = (radio: number) => (console.log(Math.floor(2 * Math.PI * radio)))

calcularCircunferencia(7)

const calculoFactorial = function(n: number){
    let calculo = (n: number) => {

        let result = 1
       
        let index = 1
       
        while(index < n){
       
        result = result * (index + 1)
       
        index++

        }

        return console.log(result)
       
       }
       calculo(n)
}

calculoFactorial(5)

const calcularPotencia = function(base: number, exponente: number){

 const calculo = (base: number, exponente: number) => {

 const result = base ** exponente

 return console.log(result)

 }

 calculo(base, exponente)

}

calcularPotencia(2,3)