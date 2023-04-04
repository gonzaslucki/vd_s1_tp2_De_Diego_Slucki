d3.csv('astronautas.csv', d3.autoType).then(data => {
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
            stroke: (d) => d.ocupacion === "ingeniero aeroespacial" ? 'red' : 'black'
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

// fill: (d) => d.ocupacion == "ingeniero aeroespacial" ? "red" : "grey"
  

