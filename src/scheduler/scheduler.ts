// npm install node-schedule
const schedule = require('node-schedule');
import { fetchPosts } from '../fetch_data/fetchData';
import insertOrders from '../db_operation/insertOrders';

function scheduleTask() {
  let job = schedule.scheduleJob('10 * * * * *', () => {
    console.log(new Date());
    const id = fetchPosts(insertOrders);
  });

  return job;
}

module.exports = scheduleTask;
