import ReactApexChart from 'react-apexcharts';

export const Chart = () => {
    
    const options = {
        chart: {
          id: "basic-line"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          labels: {
            style: {
              colors: ["#ffffff"]
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#ffffff"]
            }
          }
        }
      };
      
      const series = [
        {
          name: "Series 1",
          data: [30, 40, 25, 50, 49, 21, 70, 51, 42, 62, 60, 70]
        }
        
      ];
      
  return (
    <div className="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};
