d3.csv('astronautas.csv', d3.autoType).then(data => {
    //primer intento
    
    let chart =   Plot.plot({
        width: 600,
        height: 200,
        line: true,
        nice: true,
        zero: true,
        grid: true,
        marks: [
          Plot.dot(data, {
            x: 'eva_mision_hs',
            y: 'ocupacion',
            fillOpacity: 0.6,
          }),
        ],
        marginLeft: 200
      })

      let chart2 =   Plot.plot({
        width: 600,
        height: 300,
        line: true,
        nice: true,
        zero: true,
        grid: true,
        marks: [
          Plot.tickX(data, {
            x: 'mision_hs',
            y: 'ocupacion',
            //fillOpacity: 0.6,
          }),
        ],
        margintTop: 50,
        marginLeft: 200,
        marginBottom: 40,
        x: {
          label:'Cantidad de horas en la mision',
        },
        y: {
          label: 'Ocupacion del astronauta',
        },
        style: {
          fontFamily: "sans-serif",
          fontSize: 12,
          // fontWeight: 'bold'
        }
      })                 

    d3.select('#chart').append(() => chart2)
})


  

