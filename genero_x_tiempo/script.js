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

          ),
        ),
      ],
      marginBottom: 40,
      x: {
        label:"Año de la misión",
        tickFormat: 'd',
        line:true
      },
      y:{
        label: "Duración de la misión (en horas)",
        line: true
      },
      color: {
        scheme: 'ylgn',
        legend: true,
      },style: {
        fontFamily: "sans-serif",
        fontSize: 12,
      }
    })

    let chart2 = Plot.plot({
      marks: [
        Plot.lineY(data, 
          Plot.binX(
            {y: "mean"},
            {x: 'anio_mision',
             y: 'mision_hs',
             z: 'genero',
             stroke: 'genero',
             color: {value: 'black'},
             text: {field: 'genero', type: 'nominal', align: 'right', dx: 5}
            }
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
      style: {
        fontFamily: "sans-serif",
        fontSize: 12
      }
    });
    
    let chart3 = Plot.plot({
      marks: [
        Plot.lineY(data, 
          Plot.binX(
            {y:"mean"},
            {x: 'anio_mision',
            y: 'mision_hs',
            z: 'genero',
            stroke: 'genero',}
    
          ),
        ),
      ],
      marginBottom: 40,
      // x: {
      //   label:"Año de la misión",
      //   tickFormat: 'd',
      //   line:true,
      //   color: "white" 
      // },
      // y:{
      //   label: "Duración de la misión",
      //   line: true,
      //   color: "white" 
      // },
      // color: {
      //   scheme: 'ylgn',
      //   legend: true,
      // },
      // style: {
      //   fontFamily: "sans-serif",
      //   fontSize: 12,
      //   background: "#91B4EB" 
      // }
    })
    

    d3.select('#chart').append(() => chart)
})