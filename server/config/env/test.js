'use strict';

// 测试环境配置
// ===========================
module.exports = {
    mysql: {
        host: 'db',
        port: '3306',
        user: 'root',
        password: 'root',
        database:'docker'
    },
   port:  process.env.PORT || 8080
};
