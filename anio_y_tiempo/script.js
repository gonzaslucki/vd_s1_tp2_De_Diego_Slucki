d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)

let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_nacimiento',
        y: 'anio_mision',
        r: 'mision_hs',
        fill: 'eva_mision_hs',  // o estado civil 
        opacity: 0.5,
        title: 'nacionalidad',
      }),
    ],style: {
      fontFamily: "sans-serif",
      fontSize: 12
    },
    color:{
      scheme: 'reds',
      legend: true
    }
  })

let chart1 = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_nacimiento',
        y: 'anio_mision',
        r: 'mision_hs',
        fill: 'eva_mision_hs',  // o estado civil 
        opacity: 0.5,
        title: 'nacionalidad',
      }),
    ],
    style: {
      fontFamily: "sans-serif",
      fontSize: 12
    },
    color:{
      scheme: 'reds',
      legend: true
    }
  })

  d3.select('#chart').append(() => chart)
})

  

