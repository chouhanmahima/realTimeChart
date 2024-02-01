const MY_CHART = document.querySelector("#myChart");


const data = {
  labels: [],
  datasets: [{
    label: 'A random number',
    data: [],
    fill: false,
    borderColor: 'green',
    tension: 0.1
  }]
};

const CONFIG = {
    type: 'line',
    data: data,
    options: {
        animations: {
        tension: {
            duration: 1500,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
        }
        },
        scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 100
        }
        }
    }
};

const chart = new Chart(MY_CHART,CONFIG);

setInterval(()=>{
    const randomNumber = Math.floor(Math.random() * 100);
    chart.data.labels.push(chart.data.datasets[[0]].data.length);
    chart.data.datasets[[0]].data.push(randomNumber);
    chart.update();
},2300)

anime({
    targets:MY_CHART,
    scale:1.5,
    duration:3000,
  })
  
  setTimeout(()=>{
    anime({
      targets:MY_CHART,
      scale:1,
      duration:5000
    })
  },3000);