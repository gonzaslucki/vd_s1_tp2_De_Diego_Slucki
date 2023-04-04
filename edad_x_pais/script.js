d3.csv('astronautas.csv', d3.autoType).then(data => {
    
    data = data.filter((d) =>
    [
        "U.S.S.R/Rusia",
        "EE.UU.",
        "Japon",
        "Italia",
        "Reino Unido",
        "China"
    ].includes(d["nacionalidad"])
    );

    let chart =  Plot.plot({
        marginLeft: 100,
        x: {
          inset: 6,
          label: "Edad del astronauta",
          labelOffset: 30
        },
        y: {
          label: null, 
        },
        marks: [
          Plot.dot(data, {y: "nacionalidad", x: "edad_mision", fill:"black"}),
          Plot.ruleY(data, Plot.groupY({x1: "min", x2: "max"}, {y: "nacionalidad", x: "edad_mision"})),
          Plot.tickX(data, Plot.groupY({x: "mean"}, {y: "nacionalidad", x: "edad_mision", stroke: "red"}))
        ],
        style: {
            fontFamily: "sans-serif",
            fontSize: 12,
          }
      })

    d3.select('#chart').append(() => chart)
})