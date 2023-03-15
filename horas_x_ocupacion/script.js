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
        height: 200,
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
        marginLeft: 200
      })

      // let chart3 =   Plot.plot({
      //   width: 600,
      //   height: 200,
      //   line: true,
      //   nice: true,
      //   zero: true,
      //   grid: true,
      //   marks: [
      //     Plot.tickX(data, {
      //       x: 'mision_hs',
      //       y: 'genero',
      //       //fillOpacity: 0.6,
      //     }),
      //   ],
      //   marginLeft: 200
      // })
                 

    d3.select('#chart').append(() => chart2)
})


  

