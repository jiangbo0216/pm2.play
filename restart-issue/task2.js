var {CronJob, CronTime} = require('cron');
let a = 0
var job = new CronJob('* * * * * *', function() {
  ++a > 5 && (job.setTime(new CronTime('*/5 * * * * *')), job.start())
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
job.start();