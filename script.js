var ctx1 = document.getElementById('chart1').getContext('2d');
  var chart1 = new Chart(ctx1, {
    type: 'bar',

    data: {
      labels: ['Usuários Ativos', 'Clientes', 'Banidos ou Expulsos'],
      datasets: [{
        label: 'Dados',
        data: [93, 33, 4],
        backgroundColor: [
          'rgba(0,128,0, 0.5)',
          'rgba(255, 255, 0, 0.6)',
          'rgba(255,0,0, 0.6)'
        ],
        borderColor: [
        'rgba(0,128,0, 1)',
          'rgba(260, 255, 0, 0.6)',
          'rgba(255,0,0, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Gráficos de Usuários'
      }
    }
  });


  var ctx1 = document.getElementById('chart2').getContext('2d');
  var chart2 = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Positiva', 'Razoável', 'Negativa'],
      datasets: [{
        label: 'Dados',
        data: [18, 1, 1],
        backgroundColor: [
          'rgba(0,128,0, 0.5)',
          'rgba(255, 255, 0, 0.6)',
          'rgba(255,0,0, 0.6)'
        ],
        borderColor: [
          'rgba(0,128,0, 1)',
          'rgba(260, 255, 0, 0.6)',
          'rgba(255,0,0, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      
      responsive: true,
      title: {
        display: true,
        text: 'Gráfico 2'
      }
    }
  });

  
  var ctx1 = document.getElementById('chart3').getContext('2d');
  var chart2 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['10/12/2022', '01/01/2023', '01/03/2023'],
      datasets: [{
        label: 'Dados',
        data: [118, 102, 93],
        backgroundColor: [
          'rgba(0,128,0, 0.5)',
          'rgba(255, 255, 0, 0.6)',
          'rgba(255,0,0, 0.6)'
        ],
        borderColor: [
          'rgba(0,128,0, 1)',
          'rgba(260, 255, 0, 0.6)',
          'rgba(255,0,0, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {     
      responsive: true,
      title: {
        display: true,
        text: 'Gráfico 3'
      }
    }
  });