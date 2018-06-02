var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
  lime: 'lime',
  kek: '#007bff',
  keke: 'gold',
  cyan: 'cyan',
  ppl: 'purple',
  violet: 'violet',
  neko: 'orangered',
  supercool: 'forestgreen'
};

var config = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        876,
        1893,
        2312,
        864,
        3897, // <5k
        5476, // <10k
        4554, //25-
        1258, //50-
        845,  //100-
        423, //250-
        121,//500k-
        20, //1kk-
        10, //1kk+
      ],
      backgroundColor: [
        window.chartColors.red,
        window.chartColors.orange,
        window.chartColors.yellow,
        window.chartColors.green,
        window.chartColors.blue,
        window.chartColors.lime,
        window.chartColors.kek,
        window.chartColors.cyan,
        window.chartColors.violet,
        window.chartColors.keke,
        window.chartColors.ppl,
        window.chartColors.neko,
        window.chartColors.supercool,
      ],
      label: 'Dataset 1'
    }],
    labels: [
      '<250',
      '<500',
      '<1000',
      '<2500',
      '<5000',
      '<10000',
      '<25000',
      '<50000',
      '<100000',
      '<250000',
      '<500000',
      '<1000000',
      '>1000000',
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Распределение групп по количеству участников',
      fontSize: 15,
      fontColor: '#000'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
};

window.onload = function() {
  var ctx = document.getElementById('group-stats1').getContext('2d');
  window.myDoughnut = new Chart(ctx, config);
};