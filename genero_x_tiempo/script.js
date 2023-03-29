d3.csv('astronautas.csv', d3.autoType).then(data => {
    //primer intento
    let chart =  Plot.plot({
      marks: [
        Plot.lineY(data, 
          Plot.binX(
            {y:"mean"},
            {x: 'anio_mision',
            y: 'mision_hs',
            z: 'genero',
            stroke: 'genero',}

          )
        ),
      ],
      marginBottom: 40,
      x: {
        label:"Año de la misión",
        tickFormat: 'd',
        line:true
      },
      y:{
        label: "Duración de la misión",
        line: true
      },
      color: {
        scheme: 'ylgn',
        legend: true,
      },style: {
        fontFamily: "sans-serif",
        fontSize: 12
      }
    })

    let chart2 =  Plot.plot({
      marks: [
        Plot.lineY(data, 
          Plot.binX(
            {y:"mean"},
            {x: 'anio_mision',
            y: 'mision_hs',
            z: 'genero',
            stroke: 'genero',}

          )
        ),
        Plot.text(data, Plot.selectLast(Plot.normalizeY({
          x: "anio_mision",
          y: "mision_hs",//no se donde poner,
          z: "genero",
          text: "genero",
          textAnchor: "start",
          dx: 3
        })))
      ],
      marginBottom: 40,
      x: {
        label:"Año de la misión",
        tickFormat: 'd',
        line:true
      },
      y:{
        label: "Duración de la misión",
        line: true
      },
      color: {
        scheme: 'ylgn',
        legend: true,
      },style: {
        fontFamily: "sans-serif",
        fontSize: 12
      }
    })

    d3.select('#chart').append(() => chart2)
})