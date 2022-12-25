'use strict'
validoLogin()

function validoLogin(){
    let nombreUsuario 
    let intentos = 0
    let correoElectronico 
    let clave 
        
        for (let i = 0; i < 3; i++) {
            correoElectronico = prompt("Ingrese un correo electronico valido")
            nombreUsuario = prompt("Ingrese nombre de usuario")
            clave = prompt("Ingrese la clave")
            intentos++
        
        if (!correoElectronico.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi) || nombreUsuario == '' || clave == null) {
                alert("Por favor complete Correo, nombre y clave")
                if (intentos == 3) {
                    alert("Demasiados intentos, pruebe mas tarde")
                }               
            } else {
                alert(`Bienvenido:  ${nombreUsuario} a nuestro sistema de Creditos Personales`)        
                return 
            }
        }
    }

        
       
    function prestamoPersonal(){
        let montoSolicitado = Number(prompt("Ingrese el Monto solicitado"))   
            if (montoSolicitado <= 0) {
                alert("Ingrese un monto superior a 0")
                montoSolicitado = Number(prompt("Vuelva a ingresar el Monto solicitado"))
            }
        let salario = Number(prompt("Ingreso el monto de sus ingresos mensuales que debe superar el credito solicitado"))
            while (salario < montoSolicitado) {
            alert("debe ingresar un monto menor a sus ingresos")
            salario = Number(prompt("Vuela a ingresar un importe menor a sus ingresos"))
                
            }
            
            let plazo = Number(prompt("Ingrese el plazo en cantidad de meses para la devolucion"))
                alert(`El Monto solicitado es  $${montoSolicitado} a devolver en ${plazo} Meses, si es correcto haga click en Ok para continuar.`)
            const porcentajeInteres = 10
            let interes = Number(montoSolicitado) * Number(porcentajeInteres) / 100
            
            let interesTotal = Number(interes) * Number(plazo) 
            let valorTotalDevolucion = Number(montoSolicitado) + Number(interesTotal)
                alert(`el Interes mensual es $${interes} y el interes total es: $${interesTotal}`)
            let valorCuota = Number(valorTotalDevolucion) / Number(plazo) 
                alert("Por Favor verifique los datos y si esta deacuerdo haga click en Ok.\n El Monto inicial solicitado es de: $" + montoSolicitado + "\n El monto total a devolver es: $" + valorTotalDevolucion + "\n El valor de la cuata mensual es de: $" + valorCuota.toFixed(2))

    }
    prestamoPersonal()











