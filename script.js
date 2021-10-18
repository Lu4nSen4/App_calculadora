
      function calcular(tipo, valor) {
        console.log(tipo, valor)
        
        if(tipo === 'acao') {
          if(valor === 'c') {
            //limpando o campo (id result) através da tecla C (clear)
            document.getElementById('result').value = ''
          }
          
          if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            //fazendo a verificação para a operação matemática correspondente
            document.getElementById('result').value += valor
          }
          
          if(valor === '=') {
            //recuperando o valor do campo (id result) para fazer a operação matemática.
            var valor_Campo = eval(document.getElementById('result').value)
            document.getElementById('result').value = valor_Campo
          }
          
        } else if(tipo === 'valor') {
         // var valor_Campo = document.getElementById('result').value
          document.getElementById('result').value += valor
       
        }
     
      }
      