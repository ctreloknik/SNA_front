var groupStoreChartConfig = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        40,
        60,
      ],
      backgroundColor: [
        window.chartColors.keke,
        window.chartColors.ppl,
      ],
      label: 'Group types'
    }],
    labels: [
      'Используется',
      'Не используется',
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Статус магазина в сообществе',
      fontSize: 15,
      fontColor: '#000'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}