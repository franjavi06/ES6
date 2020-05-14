const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const exito = true;
        if(exito){
            resolve('La operacion tuvo exito');
        }
        else{
            reject('La operacion no tuvo exito');
        }
    },5000);
});

promesa.then((mensaje)=>{
    alert(mensaje);
});

promesa.catch((mensaje)=>{
    alert(mensaje);
});