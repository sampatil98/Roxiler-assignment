
const container=document.getElementById("table_body");
const searchbox=document.getElementById("search");
const selectmonths=document.getElementById("months");
const nextbtn=document.getElementById("next");
const previousbtn=document.getElementById("previous");
const sale=document.getElementById("sale");
const soldItm=document.getElementById("sold-itm");
const unsoldItem=document.getElementById("unsold-item");
const displayMonth=document.getElementById("stat-month");
const displaybarmonth=document.getElementById("stat1-month");

let base_URL="https://lazy-red-ladybug-hem.cyclic.app"

let search="";
let month="";
let page=1;
let datacount=0;
let flag=false;
window.addEventListener("load",()=>{
    fetchdata(search,month,page);
    
});


function fetchdata(search,month,page){

    fetch(`${base_URL}/transcation/?search=${search}&month=${month}&page=${page}`)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);
        if(!data.isError){
            datacount=data.data.length;
            if(data.data.length>0){
                showTabledata(data.data);
                flag=true;
            }
            
        }
    })
};

function fetchStatData(){
    fetch(`${base_URL}/transcation/statistics?month=${month}`)
    .then(res=>res.json())
    .then((data)=>{
        if(!data.isError){
            console.log(data);
            showStat(data);
        }
    })
}

function fetchPiechartData(){
    fetch(`${base_URL}/transcation/pie_chart?month=${month}`)
    .then(res=>res.json())
    .then((data)=>{
        if(!data.isError){
            console.log(data);
            showPiechart(data.PiChartData);
        }
    }) 
}

function fetchBarchartData(){
    fetch(`${base_URL}/transcation/bar_chart?month=${month}`)
    .then(res=>res.json())
    .then((data)=>{
        if(!data.isError){
            console.log(data);
            showBarChart(data.dataObject);
        }
    })

    
}

searchbox.addEventListener("keyup",()=>{
    search=searchbox.value;
    page=1;
    fetchdata(search,month,page);
});

let monthobj={
    "01":"January",
    "02":"February",
    "03":"March",
    "04":"April",
    "05":"May",
    "06":"June",
    "07":"July",
    "08":"August",
    "09":"September",
    "10":"October",
    "11":"November",
    "12":"December",
    "no":"(data for all months)"
}
selectmonths.addEventListener("change",()=>{
    month=selectmonths.value;
    displayMonth.innerText=(month=="")?monthobj["no"]:monthobj[month];
    displaybarmonth.innerText=(month=="")?monthobj["no"]:monthobj[month];
    page=1;
    fetchdata(search,month,page);
    fetchStatData();
    fetchPiechartData();
    fetchBarchartData();
});

nextbtn.addEventListener("click",()=>{

    
    if(datacount==0 && flag){
        page--;
    }else{
        page++;
        fetchdata(search,month,page);
    }
    
});

previousbtn.addEventListener("click",()=>{

    if(page>1){
        page--;
        flag=true;
        fetchdata(search,month,page)
    }
    
    
});

function showStat(data){
    sale.innerText=data.totalSaleAmount.toFixed(3);
    soldItm.innerText=data.totalSoldItems;
    unsoldItem.innerText=data.totalUnsoldItems;
}

function showTabledata(actualdata){
    container.innerHTML=null;
    console.log(actualdata);

    actualdata.forEach(ele => {
        
        let row=document.createElement("tr");
        row.setAttribute("class","row");

        let id=document.createElement("td");
        id.innerText=ele.id;


        let title=document.createElement("td");
        title.innerText=ele.title;

        let description=document.createElement("td");
        description.innerText=ele.description.substring(0,100);

        let price=document.createElement("td");
        price.innerText=ele.price;

        let category=document.createElement("td");
        category.innerText=ele.category;

        let sold=document.createElement("td");
        sold.innerText=ele.sold;

        let image=document.createElement("td");
        image.innerHTML=`<img class="image" src="${ele.image}" alt="image">`;

        row.append(id,title,description,price,category,sold,image);

        container.append(row);

    });
}

// pie chart

function showPiechart(obj){

    const pieChartData = {
        labels: [],
        datasets: [{
          data: [], 
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      };

      for(let key in obj){
        pieChartData.labels.push(key);
        pieChartData.datasets[0].data.push(obj[key])
      }

      console.log(pieChartData.labels)
      
       let ctx = document.getElementById('myChart').getContext('2d');

       if (showPiechart.chart) {
        showPiechart.chart.destroy();
      }
  
      // Create the pie chart
       showPiechart.chart = new Chart(ctx, {
        type: 'pie',
        data: pieChartData,
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });

}

// bar chart

function showBarChart(obj) {

  if (showBarChart.chart) {
    showBarChart.chart.destroy();
  }
    const barChartData = {
      labels: ["0-100","101-200","201-300","301-400","401-500","501-600","601-700","701-800","801-900","901-above"],
      datasets: [{
        label: 'Data',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
    console.log(obj);
    for (let key in obj) {
      barChartData.datasets[0].data.push(obj[key]);
    }

    const ctx = document.getElementById('myBarChart').getContext('2d');

    // if (showBarChart.chart) {
    //   showBarChart.chart.destroy();
    // }

    showBarChart.chart = new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }