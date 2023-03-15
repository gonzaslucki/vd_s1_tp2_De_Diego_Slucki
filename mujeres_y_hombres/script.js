d3.csv('astronautas.csv', d3.autoType).then(data => {
    //primer intento
    let chart = Plot.plot({
      marks: [
        Plot.barY(data, Plot.groupX({y: "count"}, {x: "genero"})),
        Plot.ruleY([0])
      ]
    })
    //con color
    let chart2 = Plot.plot({
      marks: [
        Plot.barY(data, Plot.groupX({y: "count"}, {x: "genero", fill:"genero"})),
        Plot.ruleY([0])
      ]
    })

    //el filtro permite filtrar por anio
    let dataFilter = data.filter(d => d.anio_mision == 2014)
    let chart3 = Plot.plot({
      marks: [
        Plot.barY(dataFilter, Plot.groupX({y: "count"}, {x: "genero", fill:"genero"})),
        Plot.ruleY([0])
      ]
    })
    
    //mujeres participantes en misiones por anio.
    let chart4 = Plot.plot({
      marks: [
        Plot.rectY(
          data, 
          Plot.binX(
            { y: "count" }, 
            {
              x: "anio_mision", 
              y: "mujeres", 
              fill: "blue", 
              fillOpacity: 0.5, 
              thresholds: 10
            }
          )
        )
      ],
      y:{
        label: "Cantidad de mujeres"
      },
      x:{
        label: "Anio"
      },
      marginLeft: 100, 
      height: 200,
      width: 714
    })

    

    d3.select('#chart').append(() => chart4)
})


  

