var typesChartConfig = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        300,
        245,
        76
      ],
      backgroundColor: [
        window.chartColors.red,
        window.chartColors.kek,
        window.chartColors.lime,
      ],
      label: 'Group types'
    }],
    labels: [
      'Группа',
      'Публичная страница',
      'Событие',
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Типы сообществ',
      fontSize: 15,
      fontColor: '#000'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}