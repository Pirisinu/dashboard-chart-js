<script>
import store from '../partials/data/store'
import { Bar, Doughnut, Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, ArcElement, CategoryScale, LinearScale, PointElement, Filler);

export default {
  name: 'Main',
  components: {
    Bar,
    Doughnut,
    Line
  },
  props: {},
  data() {
    return {
      store,
      monthlyConnectionsData: {
        labels: [],
        datasets: []
      },
      ageRangeData: {
        labels: [],
        datasets: []
      },
      operatingSystemData: {
        labels: [],
        datasets: []
      },
      solarPowerData: {
        labels: [],
        datasets: []
      },
      todayAgeRangeData: {
        labels: [],
        datasets: []
      },
      todayOperatingSystemData: {
        labels: [],
        datasets: []
      },
      chartData: {
        labels: [],
        datasets: []
      },
      

    }
  },
  mounted() { 
    this.getData(); 
  },
  beforeDestroy() { },
  methods: {
    async getData() {
      try {
        const dataRes = await store.dataResponse;
        const connectionsRes = await store.connectionsResponse;

        /* LINE CHART MONTHLY CONNECTIONS */
        const months = dataRes.MonthlyConnections.map((element) => element.month);
        const monthlyCon = dataRes.MonthlyConnections.map((element) => element.connections);
        this.monthlyConnectionsData = {
          labels: months,
          datasets: [
            { data: monthlyCon, 
              label: 'Monthly Connections',
              backgroundColor: store.backgroundColor,
              pointStyle: 'circle',
              pointRadius: 10,
              pointHoverRadius: 15,
              fill: true,
              animations: {
                tension: {
                  duration: 800,
                  easing: 'easeInSine',
                  from: .5,
                  to: 0,
                  loop: true
                }
              },
            }
          ],
        };
        
        /* BAR CHART MONTHLY AGE-RANGE CONNECTIONS */
        const usersAgeRange = dataRes.UsersAgeRange.map((element) => element.range);
        const usersAgeConnections = dataRes.UsersAgeRange.map((element) => element.connections);
        this.ageRangeData = {
          labels: usersAgeRange,
          datasets: [
            { data: usersAgeConnections,
              label: 'Connections',
              backgroundColor: store.backgroundColor,
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
              animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
              },
            },
          ],
        };

        /* DOUGHNUT CHART MONTHLY DEVICE CONNECTIONS */
        const usersDevice = dataRes.devices.map((element) => element.os);
        const usersDeviceConnections = dataRes.devices.map((element) => element.connections);
        this.operatingSystemData = {
          labels: usersDevice,
          datasets: [
            { data: usersDeviceConnections,
              label: 'Monthly Connections',
              backgroundColor: store.backgroundColor,
              animation: {
                duration: 3000,
                easing: 'easeInOutQuart'
              },
             }
          ],
        };

        /* BAR CHART TODAY AGE-RANGE CONNECTIONS */
        const ageRangeCounts = [];
        for (const connection of connectionsRes) {
          const age = connection.age;
          const existingDevice = ageRangeCounts.find(item => item.age === age);

          if (existingDevice) {
            existingDevice.count++;
          } else {
            ageRangeCounts.push({ age, count: 1 });
          }
        }
        const sortedAgeRangeCounts = ageRangeCounts.map((element) => element);
        sortedAgeRangeCounts.sort((a, b) => {
          const ageA = parseInt(a.age.split('-')[0]);
          const ageB = parseInt(b.age.split('-')[0]);

          return ageA - ageB;
        });
        const todayAge = sortedAgeRangeCounts.map((element) => element.age);
        const todayAgeCount = sortedAgeRangeCounts.map((element) => element.count);
        this.todayAgeRangeData = {
          labels: todayAge,
          datasets: [
            { data: todayAgeCount,
              label: 'Monthly Connections',
              backgroundColor: store.backgroundColor,
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
              animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
              },
            }
          ],
        };

        /* DOUGHNUT CHART TODAY DEVICE CONNECTIONS */
        const deviceCounts = [];
        for (const connection of connectionsRes) {
          const device = connection.device;
          const existingDevice = deviceCounts.find(item => item.device === device);

          if (existingDevice) {
            existingDevice.count++;
          } else {
            deviceCounts.push({ device, count: 1 });
          }
        }
        const todayDevice = deviceCounts.map((element) => element.device);
        const todayDeviceCounts = deviceCounts.map((element) => element.count);
        this.todayOperatingSystemData = {
          labels: todayDevice,
          datasets: [
            { data: todayDeviceCounts,
              label: 'Monthly Connections',
              backgroundColor: store.backgroundColor,
              animation: {
                duration: 3000,
                easing: 'easeInOutQuart'
              }, }
          ],
        };
        
      } catch (error) {
        console.error(error);
      }
    }

  }

}
</script>

<template>

  <div id="content" class="w-100 bg-body-secondary">

    <section id="chart_monthly" class="w-100">

      <div id="monthly_connections" class="my-card ">
        <div class="long-chart w-100 h-100">
          <h5>Montly Connection</h5>
          <div class="box-canvas w-100" style="height: 40vh;">
            <Line :options="store.barLineOptions" :data="monthlyConnectionsData" class="p-4 w-100 h-100" />
          </div>
        </div>
      </div>

      <div id="age_range" class="my-card">
        <div class="mid-chart w-100 h-100">
          <h5>User Age Range</h5>
          <div class="box-canvas w-100" style="height: 40vh;">
            <Bar :options="store.barLineOptions" :data="ageRangeData" class="p-4 w-100 h-100" />
          </div>
        </div>
      </div>

      <div id="operating_system" class="my-card">
        <div class="mid-chart w-100 h-100">
          <h5>Operating System</h5>
          <div class="box-canvas w-100" style="height: 40vh;">
            <Doughnut :options="store.doughnutOptions" :data="operatingSystemData" class="p-4 w-100 h-100" />
          </div>
        </div>
      </div>

    </section>

    <section id="solar">

      <div id="solar_power" class="my-card">
        <div class="long-chart w-100 h-100">
          <h5>Solar Power</h5>
          <div class="box-canvas w-100" style="height: 60vh;">
            <Line :options="store.barLineOptions" :data="chartData" class="p-4 w-100 h-100" />
          </div>
        </div>
      </div>

    </section>

    <section id="chart_today">

      <div id="today_age_range" class="my-card">
        <div class="mid-chart w-100 h-100">
          <h5>User Age Range</h5>
          <div class="box-canvas w-100" style="height: 40vh;">
            <Bar :options="store.barLineOptions" :data="todayAgeRangeData" class="p-4 w-100 h-100" />
          </div>
        </div>
      </div>

      <div id="today_operating_system" class="my-card">
        <div class="mid-chart w-100 h-100">
          <h5>Operating system</h5>
          <div class="box-canvas w-100" style="height: 40vh;">
            <Doughnut :options="store.doughnutOptions" :data="todayOperatingSystemData" class="p-4 w-100 h-100" />
          </div>
        </div>
      </div>

    </section>

  </div>

</template>

<style lang="scss" scoped>
#content {
  height: calc(100% - 60px);
  width: 100%;
  padding: 7px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;

  section {
    text-align: center;
  }

  section#chart_monthly {
    grid-row: 1;
  }

  section#solar {
    grid-row: 2;
  }

  section#chart_today {
    grid-row: 3;
  }

  .my-card {
    border-radius: 15px;
    background-color: white;
    padding: 8px 15px;
    width: 100%;
    height: 100%;

    h5 {
      border-bottom: 1px solid rgb(223, 220, 220);
      padding-bottom: 10px;
      color: rgb(124, 124, 124);
      font-weight: bolder;
    }
  }

  #chart_monthly,
  #chart_today {
    display: grid;
    grid-template-columns: auto;
    gap: 10px;
    grid-template-rows: auto;
  }

  #chart_monthly {
    #monthly_connections {
      grid-area: 1/1/1/3;
    }

    #age_range {
      grid-area: 2/1/2/2;
    }

    #operating_system {
      grid-area: 2/2/3/3;
    }
  }

  #chart_today {
    grid-template-rows: 1fr;
    grid-template-columns: auto;

    #today_age_range {
      grid-area: 1/1/1/2;
    }

    #today_operating_system {
      grid-area: 1/2/1/3;
    }
  }

}
</style>
