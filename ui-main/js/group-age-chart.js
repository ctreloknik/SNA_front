var ageChartConfig = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        40,
        28,
        28
      ],
      backgroundColor: [
        window.chartColors.lime,
        window.chartColors.ppl,
        window.chartColors.keke,
      ],
    }],
    labels: [
      'Нет',
      'Старше 16                                 ',
      'Старше 18',
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Возрастные ограничения',
      fontSize: 15,
      fontColor: '#000'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}