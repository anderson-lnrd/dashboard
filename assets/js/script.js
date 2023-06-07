let myChart1 = document.getElementById("myChart").getContext('2d');


let chart1 = new Chart(myChart1, {

    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

});