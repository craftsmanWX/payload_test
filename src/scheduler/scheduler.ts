// npm install node-schedule
const schedule = require('node-schedule');
import { fetchPosts } from '../fetch_data/fetchData';
import insertOrders from '../db_operation/insertOrders';
import insertRawJson from '../db_operation/insertRawJson';

function scheduleTask() {
  let job = schedule.scheduleJob('10 * * * * *', () => {
    console.log(new Date());
    const id = fetchPosts(insertRawJson);
  });

  return job;
}

module.exports = scheduleTask;
