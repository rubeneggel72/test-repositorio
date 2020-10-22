const monto=document.getElementById("id1")
const interesanual=document.getElementById("id2")
const cantidadcuotas=document.getElementById("id3")
const ayuda1=document.getElementById("ayuda1")
const textoAyuda1=document.getElementById("textoAyuda1")

monto.addEventListener ('keyup', function (e)
    {verificar("1",e.which)})   
interesanual.addEventListener ('keyup', function (e)
    {verificar("2",e.which)})
cantidadcuotas.addEventListener ('keyup', function (e)
    {verificar("3",e.which)})      
ayuda1.addEventListener ('mouseenter', function (e)
    {textoAyuda1.classList.remove('hide')
    ayuda1.style.color="orange"})
ayuda1.addEventListener ('mouseout', function (e)
    {textoAyuda1.classList.add('hide')
    ayuda1.style.color="orangered"})
ayuda2.addEventListener ('mouseenter', function (e)
    {textoAyuda2.classList.remove('hide')
    ayuda2.style.color="orange"})
ayuda2.addEventListener ('mouseout', function (e)
    {textoAyuda2.classList.add('hide')
    ayuda2.style.color="orangered"}) 
ayuda3.addEventListener ('mouseenter', function (e)
    {textoAyuda3.classList.remove('hide')
    ayuda3.style.color="orange"})
ayuda3.addEventListener ('mouseout', function (e)
    {textoAyuda3.classList.add('hide')
    ayuda3.style.color="orangered"})    

function datos()
    {   dato={}
        dato.monto = parseInt(document.getElementById('id1').value,10)
        dato.interesanual = parseFloat(document.getElementById('id2').value,10)
        dato.interesmensual=dato.interesanual/12/100
        dato.cantidadcuotas =parseInt(document.getElementById('id3').value,10)
        console.log(dato.monto+" "+dato.cantidadcuotas+" "+dato.interesmensual)
    return(dato)
    }

function verificar(id,e)
    { console.log("verificar"+id+" "+e)
    switch(id)
        {
        case "1":
        verificarEtapa2(10000,2000000,id,e,"2","3")
        break
        case "2":
        verificarEtapa2(0,200,id,e,"3","1")
        break
        case "3":
        verificarEtapa2(1,120,id,e,"1","2")
        break
        }
    }

function verificarEtapa2(min,max,id,e,ida,idb)
    {    console.log("tecla"+e+" "+String.fromCharCode(e))
            echar=String.fromCharCode(e)
            l=document.getElementById("id"+id).value

            a= parseFloat(l)
            if (l==0) {a=echar}
            console.log("a="+ a +" l="+ l.length)
           
        if (a<min || a>max)
            {
            document.getElementById('checkid'+id).className=""
            } 
        else 
            {            
            document.getElementById('checkid'+id).className="fa fa-check small"
            document.getElementById('checkid'+id).style="color:green"
            } 
        if (isNaN(a))
            {            
            document.getElementById('checkid'+id).className=""
            } 
        habilitarCalculo()          
    }

function habilitarCalculo()
    {   
        var a=0
        for(i=1;i<4;i++)
            {b=document.getElementById('checkid'+i).className
            if (b=="fa fa-check small"){a++}
            }
        if (a==3)
            {document.getElementById('btnCalcular').classList.remove('hide')}
            else
            {document.getElementById('btnCalcular').classList.add('hide')}
    }

function limpiarCalculo()
        {
        document.getElementById("id1").value=""
        document.getElementById("id2").value=""
        document.getElementById("id3").value=""
        document.getElementById('checkid1').className=""
        document.getElementById('checkid2').className=""
        document.getElementById('checkid3').className=""
        document.getElementById('resultado').classList.add('hide')
        document.getElementById('btnCalcular').classList.add('hide')
        document.getElementById('textoAyuda1').classList.add('hide')
        document.getElementById('textoAyuda2').classList.add('hide')
        document.getElementById('textoAyuda3').classList.add('hide') 
        }
        
function calcularprestamo()
        {  datos()
            var cuota=Math.round(100*dato.monto*(((1+dato.interesmensual)**dato.cantidadcuotas)*dato.interesmensual/(((1+dato.interesmensual)**dato.cantidadcuotas)-1)))/100
            var montodevuelto=Math.round(100*cuota*dato.cantidadcuotas)/100
            var montointeres= Math.round(100*(montodevuelto-dato.monto))/100
            document.getElementById("montoCuota").innerText=": $ "+cuota
            document.getElementById("montodevuelto").innerText=": $ "+montodevuelto
            document.getElementById("montointeres").innerText=": $ "+montointeres
            document.getElementById('resultado').classList.remove('hide');
            



        }

       