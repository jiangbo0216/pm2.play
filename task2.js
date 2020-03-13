var CronJob = require('cron').CronJob;
console.log('1111111111')
var job = new CronJob('*/5 * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
job.start();