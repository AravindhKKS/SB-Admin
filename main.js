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

  checkBtn.onclick = function () {
    if (checkBtn.checked) {
      content.style.marginLeft = "330px";
    } else {
      content.style.marginLeft = "30px";
    }
  };

  element.style.border =
    element.style.border === "" ? "3px solid lightblue" : "";
}

const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const nav = document.querySelector("nav");

light.addEventListener("click", function () {
  nav.classList.remove("dark-mode");
  nav.classList.add("light-mode");
});

dark.addEventListener("click", function () {
  nav.classList.remove("light-mode");
  nav.classList.add("dark-mode");
});

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
            callback: function (value, index) {
              return index % 2 === 0 ? value : "";
            },
          },
        },
      ],
    },
  },
});

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
        },
      ],
    },
  },
});

const table = document.querySelector("#myTable");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const pageNumbersContainer = document.querySelector("#pageNumbers");
const itemCountSelect = document.getElementById("itemCount");

let currentPage = 1;
let rowsPerPage = itemCountSelect.value;

function showPage(page) {
  // Hide all rows
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].style.display = "none";
  }

  // Show only the rows for the current page
  for (let i = (page - 1) * rowsPerPage; i < page * rowsPerPage; i++) {
    if (table.rows[i]) {
      table.rows[i].style.display = "table-row";
    }
  }

  // Update the page numbers
  pageNumbersContainer.innerHTML = "";
  for (let i = 1; i <= table.rows.length / rowsPerPage; i++) {
    const pageNumber = document.createElement("span");
    pageNumber.classList.add("pageNumber");
    if (i === page) {
      pageNumber.classList.add("currentPage");
    }
    pageNumber.textContent = i;
    pageNumber.addEventListener("click", function () {
      currentPage = i;
      showPage(currentPage);
    });
    pageNumbersContainer.appendChild(pageNumber);
  }
}

itemCountSelect.addEventListener("change", function () {
  rowsPerPage = parseInt(itemCountSelect.value);
  showPage(1);
});

previousButton.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

nextButton.addEventListener("click", function () {
  if (currentPage < table.rows.length / rowsPerPage) {
    currentPage++;
    showPage(currentPage);
  }
});
showPage(currentPage);
