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
          // Plot.tickY(data, {
          //   x: 'mision_hs',
          //   y: 'ocupacion',
          //   color: (d, i) => {
          //     const colors = ['#FF5733', '#33FF57', '#337FFF', '#FF33E6', '#FFFF33'];
          //     const valueToColor = {
          //       'ingeniero aeroespacial': colors[0],
          //       'comandante': colors[1],
          //       'piloto': colors[2],
          //       'especialista aeroespacial': colors[3]
          //     }
          //     return valueToColor[d.y];
          //   }
          // })
          Plot.dot(data, {
            x: 'eva_mision_hs',
            y: 'ocupacion',
            fillOpacity: 0.8,
          }),
        ],
        marginLeft: 200,
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
          label:'Cantidad de horas en la misión',
        },
        y: {
          label: 'Ocupación del astronauta',
        },
        style: {
          fontFamily: "sans-serif",
          fontSize: 12,
          // fontWeight: 'bold'
        }
      })                 

    d3.select('#chart').append(() => chart2)
})


  

