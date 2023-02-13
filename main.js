const calculateButton = document.getElementById('calculate-button');

function daysToClearInbox () {
  const pendingMails = document.getElementById('inbox-mails').value;
  const incomingMails = document.getElementById('incoming-mails').value;
  const outgoingMails = document.getElementById('outgoing-mails').value;
  const resultDays = document.getElementById('result-days');
  const resultMessage = document.getElementById('result');
  const daysToComplete = Math.round(pendingMails / (outgoingMails - incomingMails));

  console.log(typeof incomingMails, typeof outgoingMails)
  if (daysToComplete < 0) {
    resultDays.innerText = '';
    resultMessage.innerText = 'As the emails we receive outweigh the number of the emails we are sending, we cannot empty the inbox!';
    resultMessage.color = 'amber';
  } else {
    resultDays.innerText = `We need ${daysToComplete - 1} to ${daysToComplete + 1} days to sweep the inbox!`;
    resultDays.style.accentColor = 'olive';
    resultMessage.innerText = `Currently we have ${pendingMails} pending emails. 
    As we receive ${incomingMails} emails a day and we can send ${outgoingMails} emails per day, we require ${daysToComplete} days to empty the inbox!`;
  }
}
  

calculateButton.addEventListener('click', daysToClearInbox);
