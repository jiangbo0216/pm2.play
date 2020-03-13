module.exports = {
  apps : [{
    name: 'task1',
    script: 'task1.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    "error_file": "logs/task1_error.log",
    "out_file": "logs/task1_out.log",
    "log_file": "logs/task1.log",
    "merge_logs": true,
    "log_date_format": "YYYY-MM-DD HH:mm Z",
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    "ignore_watch": [
      "node_modules",
      "logs",
    ],
  },
  {
    name: 'task2',
    script: 'task2.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    instances: 1,

    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    "error_file": "logs/task2_error.log",
    "out_file": "logs/task2_out.log",
    "log_file": "logs/task2.log",
    "merge_logs": true,
    "log_date_format": "YYYY-MM-DD HH:mm Z",
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    "ignore_watch": [
      "node_modules",
      "logs",
    ],
  }],

};
