let interviewList = [];
let rejectedList = [];
const mainContainer = document.querySelector("main");

const filterInterview = document.getElementById("interview-card-container");
const filterRejected = document.getElementById("rejected-card-container");

const countInterview = document.getElementById("interview-count");
const countRejected = document.getElementById("rejected-count");

mainContainer.addEventListener("click", function (event) {

  if (event.target.classList.contains("interview-btn-c")) {
    const parentNode = event.target.parentNode.parentNode;
    const titleName = parentNode.querySelector(".title-name").innerText;
    const subTitle = parentNode.querySelector(".sub-title").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const comment = parentNode.querySelector(".comment").innerText;
    const statusBtn = parentNode.querySelector(".status-bar").innerText;

    const cardInfo = {
      titleName,
      subTitle,
      location,
      salary,
      comment,
      statusBtn
    };

    const jobExist = interviewList.find(
      (item) => item.titleName == cardInfo.titleName,
    );
    const status = parentNode.querySelector(".status-bar");
    status.innerText = "Interview";
    status.className = " border border-accent text-accent p-2 rounded-md";

    if (!jobExist) {
      interviewList.push(cardInfo);
    }
    renderInterview();
    countInterview.innerText = interviewList.length;
  }


  if (event.target.classList.contains("rejected-btn-c")) {
    const parentNode = event.target.parentNode.parentNode;
    const titleName = parentNode.querySelector(".title-name").innerText;
    const subTitle = parentNode.querySelector(".sub-title").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const comment = parentNode.querySelector(".comment").innerText;
    const statusBtn = parentNode.querySelector(".status-bar").innerText;

    const cardInfo = {
      titleName,
      subTitle,
      location,
      salary,
      comment,
      statusBtn
    };

    const jobExist = rejectedList.find(
      (item) => item.titleName == cardInfo.titleName,
    );
    const status = parentNode.querySelector(".status-bar");
    status.innerText = "Rejected";
    status.className = " border border-error text-error p-2 rounded-md";

    if (!jobExist) {
      rejectedList.push(cardInfo);
    }
    renderRejected();
    countRejected.innerText = rejectedList.length;
  }


});

function renderInterview() {
  filterInterview.innerHTML = "";
  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement("div");
    div.className =
      "job-card bg-white border border-gray-200 p-6 flex justify-between rounded-md";

    div.innerHTML = `
    <div class="space-y-1">
          <h3 class=" title-name text-xl font-bold">${interview.titleName}</h3>
          <p class="text-lg">${interview.subTitle}</p>
          <p class="location">${interview.location}</p>
          <p class="text-sm my-5">${interview.salary}</p>
          <span class="status-bar border border-accent text-accent p-2 rounded-md ">Interview</span>
          <p class="my-4">${interview.comment}</p>
          <button class=" interview-btn-c btn btn-outline btn-accent">INTERVIEW</button>
          <BUtton class=" rejected-btn-c btn btn-outline btn-error">REJECTED</BUtton>
        </div>
        <button class=" deleted-btn btn btn-square btn-md">
          <i class="fa-regular fa-trash-can"></i>
        </button>
    `;
    filterInterview.append(div);
  }
}

function renderRejected() {
  filterRejected.innerHTML = "";
  for (let interview of rejectedList) {
    console.log(rejectedList);
    let div = document.createElement("div");
    div.className =
      "job-card bg-white border border-gray-200 p-6 flex justify-between rounded-md";

    div.innerHTML = `
    <div class="space-y-1">
          <h3 class=" title-name text-xl font-bold">${interview.titleName}</h3>
          <p class="text-lg">${interview.subTitle}</p>
          <p class="location">${interview.location}</p>
          <p class="text-sm my-5">${interview.salary}</p>
          <span class="status-bar border border-error text-error p-2 rounded-md ">Rejected</span>
          <p class="my-4">${interview.comment}</p>
          <button class=" interview-btn-c btn btn-outline btn-accent">INTERVIEW</button>
          <BUtton class=" rejected-btn-c btn btn-outline btn-error">REJECTED</BUtton>
        </div>
        <button class=" deleted-btn btn btn-square btn-md">
          <i class="fa-regular fa-trash-can"></i>
        </button>
    `;
    filterRejected.append(div);
  }
}
