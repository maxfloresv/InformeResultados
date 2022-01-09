function graficos() {
    Highcharts.chart("contenedor", {
        chart: { type: "line" },
        title: { text: "" },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                }
            },
            series: {
                dataLabels: {
                    style: {
                        fontSize: "7px"
                    },
                    enabled: true
                }
            }
        },
        xAxis: {
            categories: [
                "Axiomas",
                "Inecuaciones",
                "Geometría Analítica",
                "Secciones Cónicas",
                "Funciones",
                "Trigonometría",
                "Acotamiento",
                "Sucesiones",
                "Límites y orden",
                "Función exponencial",
                "Límite de funciones",
                "Derivadas"
            ]
        },
        yAxis: {
            title: { text: "% que no domina el tema" }
        },
        series: [{
            color: "rgb(235, 112, 5)",
            data: [2.8, 1.1, 7.3, 30.7, 0.6, 1.1, 10.6, 12.3, 7.3, 7.8, 5, 1.7],
            name: "Muestra que aprobó (presencial + online)"
        }, {
            color: "rgb(31, 119, 180)",
            data: [1.1, 0.7, 10.1, 34.1, 5.5, 6.1, 10.3, 8.4, 6.5, 2.2, 1.9, 1.8],
            name: "Muestra que aprobó online"
        }, {
            color: "rgb(44, 160, 44)",
            data: [2.4, 7.7, 23.1, 11.1, 8.5, 8.4, 15.3, 1.9, 0.1, 3.2, 4.9, 3.1],
            name: "Muestra que aprobó presencial" 
        }]
    });
}
