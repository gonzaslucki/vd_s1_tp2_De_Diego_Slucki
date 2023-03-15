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
      x: {
        tickFormat: 'd',
      },
      color: {
        legend: true,
      }
    })

    d3.select('#chart').append(() => chart)
})


  

