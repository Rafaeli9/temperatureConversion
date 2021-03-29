let celsiusInput = document.querySelector('#celsius > input');
let resultado = document.querySelector('#resultado > input');


celsiusInput.addEventListener('input', function () {
    let valor = celsiusInput.value;
        if (valor === ''){
            resultado.value = '';
        }

        else { 
            let fTemp = (valor * 1.8) + 32;
            resultado.value = fTemp; 
        }
});
