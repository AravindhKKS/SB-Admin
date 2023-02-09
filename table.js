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
