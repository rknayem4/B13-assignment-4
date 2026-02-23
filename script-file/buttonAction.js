function onlyShow(id){
  const allCard = document.getElementById('all-card-container');
  allCard.classList.add('hidden');

  const interviewCard = document.getElementById('interview-card-container');
  interviewCard.classList.add('hidden');

  const rejectedCard = document.getElementById('rejected-card-container');
  rejectedCard.classList.add('hidden');
  const selected = document.getElementById(id)
  selected.classList.remove('hidden')

  
}



const allBtn = document.getElementById('all-btn');
  const interviewBtn =  document.getElementById('interview-btn')
  const rejectedBtn =  document.getElementById('rejected-btn');

function btnStyle (id){

allBtn.classList.add('btn-outline')
interviewBtn.classList.add('btn-outline')
rejectedBtn.classList.add('btn-outline')

allBtn.classList.remove('btn-info', 'text-white')
interviewBtn.classList.remove('btn-info', 'text-white')
rejectedBtn.classList.remove('btn-info', 'text-white')


  const selected = document.getElementById(id)
  selected.classList.remove('btn-outline');
  selected.classList.add('btn-info', 'text-white')
}









