'use strict';

import Koa from 'koa';
import middleware from './middleware';
import config from './config/config-development';
import logger from './lib/logger';
import LogType from './common/log-type';

const app = new Koa();
middleware(app);

const server = app.listen(config.app.port, '0.0.0.0', () => {
  logger.info({
    type: LogType.INIT,
    msg: 'Server listening on port: ' + server.address().port
  });
});

// session 会引入 app.js
export default app;