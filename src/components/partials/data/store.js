import { reactive } from 'vue';
import axios from 'axios';

let dataResponse = axios.get('http://localhost:3001/data')
  .then(function (response) {
    dataResponse = {
      "devices": response.data.Devices,
      "MonthlyConnections": response.data.MonthlyConnections,
      "UsersAgeRange": response.data.UsersAgeRange,

    };

    return dataResponse;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


let connectionsResponse = axios.get('http://localhost:3001/connections')
  .then(function (response) {
    connectionsResponse = response.data;
    return connectionsResponse;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  

export const store = reactive({
  userName: 'Mario',
  userSurname: 'Rossi',
  dataResponse: dataResponse,
  connectionsResponse: connectionsResponse,
  backgroundColor: ['rgba(255, 99, 132, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(255, 205, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(10, 70, 222, 0.4)',
                'rgba(70, 10, 222, 0.4)',
                'rgba(222, 10, 70, 0.4)'],

  barLineOptions: {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      }
    },
  },

  doughnutOptions: {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2 / 1,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      tooltip: {
        enabled: true,
      },
    },
  },
}) 
export default store;