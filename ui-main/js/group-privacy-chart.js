var privacyChartConfig = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        50,
        40,
        10
      ],
      backgroundColor: [
        window.chartColors.kek,
        window.chartColors.neko,
        window.chartColors.ppl,
      ],
    }],
    labels: [
      'Открытые сообества',
      'Закрытые сообщества',
      'Частные сообщества',
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Ограничения по доступу',
      fontSize: 15,
      fontColor: '#000'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}