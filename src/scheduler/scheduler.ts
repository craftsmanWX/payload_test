// npm install node-schedule
const schedule = require('node-schedule');

function scheduleTask() {
  let job = schedule.scheduleJob('10 * * * * *', () => {
    console.log(new Date());
  });

  return job;
}

module.exports = scheduleTask;
