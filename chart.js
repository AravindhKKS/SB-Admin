var ctx = document.getElementById("areaChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Mar 1",
      "Mar 2",
      "Mar 3",
      "Mar 4",
      "Mar 5",
      "Mar 6",
      "Mar 7",
      "Mar 8",
      "Mar 9",
      "Mar 10",
      "Mar 11",
      "Mar 12",
      "Mar 13",
    ],
    datasets: [
      {
        backgroundColor: " transparent",
        label: "My Data",
        data: [
          10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159,
          32651, 31984, 38451,
        ],
        backgroundColor: "rgb(153, 200, 300,0.5)",
        borderColor: "#007bff",
        borderWidth: 4,
        pointBackgroundColor: "#007bff",
      },
    ],
  },
  options: {
    element: {
      rectangle: {
        backgroundColor: "transparent",
      },
    },
    tooltips: {
      enabled: true,
    },
    legend: {
      display: false,
    },
    layout: {
      padding: 100,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
            color: " rgb(165, 157, 157)",
          },
          display: true,
          ticks: {
            stepSize: 10000,
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          display: true,
          ticks: {
            callback: function (value, index, values) {
              return index % 2 === 0 ? value : "";
            },
          },
        },
      ],
    },
  },
});

function toggleMenu() {
  const menu = document.getElementById("dropdown-content");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function toggleBorder(element) {
  const checkBtn = document.querySelector("#toggle");
  const content = document.querySelector("#dashboard");
  const chart = document.querySelector("#barPieChart");

  checkBtn.onclick = function () {
    if (checkBtn.checked) {
      content.style.marginLeft = "330px";
    } else {
      content.style.marginLeft = "30px";
      chart.style.marginLeft = "20px";
    }
  };

  checkBtn.element.style.border =
    element.style.border === "" ? "3px solid lightblue" : "";
}

const downlayout = (target) => {
  const dropdownContent = document.getElementById("layout-content");
  const icon = target.lastElementChild || target.children[2];
  console.log(icon);
  if (dropdownContent.style.display !== "block") {
    dropdownContent.style.display = "block";
    icon.classList.add("rotate-arrow");
  } else {
    dropdownContent.style.display = "none";
    icon.classList.remove("rotate-arrow");
  }
};

const downpage = (target) => {
  const down = document.getElementById("page");
  const icon = target.lastElementChild || target.children[2];
  if (down.style.display !== "block") {
    down.style.display = "block";
    icon.classList.add("rotate-arrow");
  } else {
    down.style.display = "none";
    icon.classList.remove("rotate-arrow");
  }
};

const downauth = (target) => {
  const down = document.getElementById("auth");
  const icon = target.lastElementChild || target.children[1];
  if (down.style.display !== "block") {
    down.style.display = "block";
    icon.classList.add("rotate-arrow");
  } else {
    down.style.display = "none";
    icon.classList.remove("rotate-arrow");
  }
};

const downerror = (target) => {
  const down = document.getElementById("error");
  const icon = target.lastElementChild || target.children[1];
  if (down.style.display !== "block") {
    down.style.display = "block";
    icon.classList.add("rotate-arrow");
  } else {
    down.style.display = "none";
    icon.classList.remove("rotate-arrow");
  }
};

// bar chart

var ctx = document.getElementById("barChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        backgroundColor: " transparent",
        label: "My Data",
        data: [4215, 5312, 6251, 7841, 9821, 14984],
        backgroundColor: "blue",
        borderWidth: 4,
        pointBackgroundColor: "transparent",
      },
    ],
  },
  options: {
    element: {
      rectangle: {
        backgroundColor: "transparent",
      },
    },
    tooltips: {
      enabled: true,
    },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 100,
        top: 50,
        right: 0,
        bottom: 50,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
            color: " rgb(165, 157, 157)",
          },
          display: true,
          ticks: {
            stepSize: 5000,
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          display: true,
          ticks: {
            callback: function (value, index, values) {
              return index % 2 === 0 ? value : "";
            },
          },
        },
      ],
    },
  },
});

// pie  Chart

var ctx = document.getElementById("pieChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Blue", "Red", "Yellow", "Green"],
    datasets: [
      {
        backgroundColor: [" blue", " red", "yellow", "green"],
        label: "My Data",
        data: [12.21, 15.58, 11.25, 8.32],
      },
    ],
  },
  options: {
    tooltips: {
      enabled: true,
    },
    legend: {
      display: true,
      layout: {
        padding: {
          top: 50,
        },
      },
    },
    layout: {
      padding: {
        left: 150,
        top: 50,
        right: 0,
        bottom: 50,
      },
    },
    scales: {
      yAxes: [
        {
          display: false,
        },
      ],
      xAxes: [
        {
          display: false,
        },
      ],
    },
  },
});
