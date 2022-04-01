import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      typeorm: {
        // mysql
        type: 'mysql',
        host: 'localhost',
        username: 'root',
        password: '',
        database: 'EntrenateDB',
      },
    },
  };
});
