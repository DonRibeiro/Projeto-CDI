let buttonC = document.getElementById("resul")
buttonC.addEventListener("click", calcular) // Adiciona ação de calcular

function calcular() {
  
    const invest = document.getElementById("invest") // Integrar com a DOM
    const perio = document.getElementById('perio')
    const taxa = document.getElementById('taxa')
    const cdi = document.getElementById('cdi')
    const res = document.getElementById('res')
  
    const investVal = Number(invest.value) //Inverter a string para number
    const perioVal = Number(perio.value)
    const taxaVal = Number(taxa.value)
    const cdiVal = Number(cdi.value)
    if(invest.value.length == 0|| invest.value.length == 0 || taxa.value.length == 0|| cdi.value.length == 0) {
        window.alert("Erro ao executar, por favor informe todos os valores.") } // Erro caso não seja digitado nenhum valor.
    else {
      
      const rend = investVal * (cdiVal/100) * (taxaVal/100) //Cálculo para o rendimento
        
        const valorf = investVal * (1 + taxaVal/100)**perioVal //Juros compostos para descobrir o montante
        
        let rendB = valorf - investVal
       
       let total= rendB + investVal
       
       
       const convert = perioVal * 365
       //Conversão de ano para dia
       
       
        
        res.innerHTML = `<p> O rendimento no primeiro ano é R$ ${rend.toFixed(2)} </p> <br> 
        <p> O total de rendimentos no final da data informada é R$ ${rendB.toFixed(2)} </p><br>
        
       <p> Totalizando um valor de R$${total.toFixed(2)} </p> <br> 
       <p> Em ${convert} dias </p> <br>`
    } 
}