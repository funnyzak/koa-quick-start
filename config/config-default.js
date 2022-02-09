const path = require('path')

const config = {
  app: {
    name: 'koa quick start',
    host: 'http://127.0.0.1:5000', // app主页地址
    port: '2058', // 服务启动监听端口
    upload: {
      // 文件上传临时文件夹
      tmpDir: path.join(__dirname, '../public/upload/tmp'),
      // 最终保存路径
      saveDir: path.join(__dirname, '../public/upload'),
      // 虚拟路径
      virtualPath: '/upload'
    },
    fileObject: {
      objectPrefix: '/transfer',
      expiration: 600 // oss 文件对象有效期，单位（秒）
    },
    apiUrlPrefix: '/api/v1', // api url path

    // 启用数据库
    mongodb: false,
    mysql: false,
    redis: false
  },
  // https://github.com/koajs/koa-body
  koaBody: {
    multipart: false,
    urlencode: true,
    text: true,
    json: true,
    encoding: 'utf-8',
    jsonLimit: '2mb',
    textLimit: '2mb',
    formLimit: '2mb',
    patchNode: false
  },
  koaSession: {
    keys: ['arjMcv3Bnabsdke'],
    config: {
      /** (string) cookie key (default is koa.sess) */
      key: 'koa.sess',
      /** (number || 'session') maxAge in ms (default is 1 days) */
      /** 'session' will result in a cookie that expires when session/browser is closed */
      /** Warning: If a session cookie is stolen, this cookie will never expire */
      maxAge: 86400000,
      /** (boolean) automatically commit headers (default true) */
      autoCommit: true,
      /** (boolean) can overwrite or not (default true) */
      overwrite: true,
      /** (boolean) httpOnly or not (default true) */
      httpOnly: true,
      /** (boolean) signed or not (default true) */
      signed: true,
      /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
      rolling: false,
      /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
      renew: true,
      /** (boolean) secure cookie*/
      secure: false,
      /** (string) session cookie sameSite options (default null, don't set it) */
      sameSite: null
    }
  },
  /**
   * 数据库配置
   */
  db: {
    // config for mongodb => https://docs.mongodb.com/drivers/node/current/fundamentals/connection/
    mongoDb: {
      logging: process.env.NODE_ENV === 'development',
      // uri: 'mongodb+srv://<clusterUrl>/?replicaSet=rs&writeConcern=majority', // mongodb 连接地址（优先）
      db: 'koa-quick-start',
      // username: 'user',
      // password: 'password',
      host: 'localhost',
      port: 27017,
      options: {
        authSource: 'admin',
        maxPoolSize: 50,
        w: 'majority',
        connectTimeoutMS: 10000
      }
    },
    redis: {
      // logging: process.env.NODE_ENV === 'development',
      // uri: 'redis://:authpassword@127.0.0.1:6380/4', // redis 连接地址（优先）
      host: '127.0.0.1',
      port: 6380, // redis 端口
      // username: 'alice',
      password: 'foobared',
      db: 2
      // tls: {
      //   key: fs.readFileSync('path_to_keyfile', (encoding = 'ascii')),
      //   cert: fs.readFileSync('path_to_certfile', (encoding = 'ascii')),
      //   ca: [fs.readFileSync('path_to_ca_certfile', (encoding = 'ascii'))]
      // }
    },
    mysql: {
      username: 'root',
      password: '123456',
      database: 'test',
      options: {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        logging: false, //是否打开SQL日志
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        }
      }
    }
  },
  aliyun: {
    /**
     * 阿里云OSS配置
     */
    oss: [
      {
        accessKeyId: 'accessKeyId',
        accessKeySecret: 'accessKeySecret',
        endpoint: 'https://oss-cn-beijing.aliyuncs.com',
        bucket: 'abcdef',
        region: 'oss-cn-beijing',
        domain: 'http://oss-cn-beijing.aliyuncs.com'
      }
    ]
  }
}

module.exports = config
