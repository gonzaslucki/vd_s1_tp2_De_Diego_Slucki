d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_nacimiento',
        y: 'anio_mision',
        r: 'mision_hs',
        fill: 'nacionalidad',  // o estado civil 
        opacity: 0.5,
        title: 'nacionalidad',
      }),
    ],
    color: {
        legend: true,
    },
  })

let chart1 = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_nacimiento',
        y: 'anio_mision',
        r: 'mision_hs',
        fill: 'nacionalidad',  // o estado civil 
        opacity: 0.5,
        title: 'nacionalidad',
      }),
    ],
    color: {
    },
  })
  d3.select('#chart').append(() => chart)
})

  

