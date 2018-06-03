var activityChartConfig = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        80,
        7,
        13
      ],
      backgroundColor: [
        window.chartColors.violet,
        window.chartColors.green,
        window.chartColors.yellow,
      ],
      label: 'Group types'
    }],
    labels: [
      'Активные',
      'Удалённые',
      'Заблокированные                         ',
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Активность сообществ',
      fontSize: 15,
      fontColor: '#000'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}