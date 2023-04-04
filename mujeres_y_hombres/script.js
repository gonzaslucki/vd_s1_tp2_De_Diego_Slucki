d3.csv('astronautas.csv', d3.autoType).then(data => {

    let chart5 = Plot.plot({
      marks: [
        Plot.barY(data, 
          Plot.binX(
            {y:"count"},
            {
            x: 'anio_mision',
            y:'genero',
            fill: 'genero',
          }),
        ),                  
      ],
      marginLeft: 70,
      marginBottom: 40,
      color: {
        scheme: 'Blues',
        legend: true,
      },
      x: {
        label:'Año de la mision',
        line:true,
        tickFormat: "d",
        ticks: {values: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]}
      },
      y: {
        label: 'Cantidad de astronautas',
        grid: true, line: true
      },
      style: {
        fontFamily: "sans-serif",
        fontSize: 12
      }
    })   

    d3.select('#chart').append(() => chart5)
})


  

