  const setCountAll = document.getElementById('total-count');
  const setCountAllC = document.getElementById('total-counts');
const setCountInterview = document.getElementById('interview-count');
const setCountRejected = document.getElementById('rejected-count');
  
  const allCards = document.getElementById('all-card-container');
const interviewCard =document.getElementById('interview-card-container');
const rejectedCard =document.getElementById('rejected-card-container');

  // console.log(allCards.children.length)
  
  function countSet(){
  setCountAll.innerText = allCards.children.length;
  setCountAllC.innerText = allCards.children.length;
  setCountInterview.innerText = interviewList.length;
  setCountRejected.innerText = rejected.children.length;
}
countSet()




