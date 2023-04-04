d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_nacimiento',
        y: 'anio_mision',
        r: 'mision_hs',
        fill: 'eva_mision_hs',  
        opacity: 0.5,
        title: 'nacionalidad',
      }),
    ],
    marginBottom: 40,
    marginRight: 10,
    x: {
      label:"Año de la misión",
      tickFormat: 'd',
      line:true
    },
    y:{
      label: "Duración de la misión",
      line: true
    },
    x: {
      label:"Año de nacimiento de los astronautas",
      tickFormat: 'd',
      line:true
    },
    y:{
      label: "Año de la mision",
      line: true
    },
    style: {
      fontFamily: "sans-serif",
      fontSize: 13
    },
    color:{
      scheme: 'reds',
      legend: true,
    },
  })

  d3.select('#chart').append(() => chart)
})

  

