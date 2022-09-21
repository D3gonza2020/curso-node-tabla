const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {        

        let salida = '';
        let consola ='';

        for(let i=1; i <= hasta;i++){
            //console.log(`${base} x ${i}: ${base*i}`);
            salida +=`${base} x ${i} = ${ base * i}\n`;
            consola +=`${base} ${'x'.blue} ${i} ${' = '.blue}${ base * i}\n`;
        }
        if (listar) {
            console.log('==================='.red);
            console.log('  Tabla del: '.green, colors.blue(base));
            console.log('==================='.red);   
            console.log(consola)
        };

        /*fs.writeFile(`tabla-${base}.txt`,salida,(err) => {
            if(err)throw err;
            console.log(`tabla-${base}.txt creado`);
        })*/
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
        return `tabla-${ base }.txt`;  
    } catch (err) {
        throw err;
    }  
        
}

module.exports = {
    crearArchivo
}