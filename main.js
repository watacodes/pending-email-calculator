const calculateButton = document.getElementById('calculate-button');

function daysToClearInbox () {
  const pendingEmail = document.getElementById('inbox-email').value;
  const incomingEmail = document.getElementById('incoming-email').value;
  const outgoingEmail = document.getElementById('outgoing-email').value;
  const resultDays = document.getElementById('result-days');
  const resultMessage = document.getElementById('result');
  const daysToSweep = Math.round(pendingEmail / (outgoingEmail - incomingEmail));

  if (daysToSweep < 0) {
    resultDays.innerText = '';
    resultMessage.innerText = 'As the number of email we receive outweighs our daily output, we cannot empty the inbox!';
  } else {
    resultDays.innerText = `We need ${daysToSweep - 1} - ${daysToSweep + 1} days to sweep the inbox!`;
    resultMessage.innerText = `Currently, we have ${pendingEmail} pending email. 
    As we receive ${incomingEmail} email a day and we can send ${outgoingEmail} email per day, we require ${daysToSweep - 1} - ${daysToSweep + 1} days to empty the inbox!`;
  }
}
  

calculateButton.addEventListener('click', daysToClearInbox);
