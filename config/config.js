import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'test-express-import'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/test-express-import-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'test-express-import'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/test-express-import-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'test-express-import'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/test-express-import-production'
  }
};

export default {
  root: config[env].root,
  app: config[env].app,
  port: config[env].port,
  db: config[env].db,
}
