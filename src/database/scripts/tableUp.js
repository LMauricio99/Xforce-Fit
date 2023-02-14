const { logger } = require('../../utils/logger');
const { createTableUSers: createTableUSersQuery } = require('../queries');

(() => {    
   require('../../config/db.config').query(createTableUSersQuery, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('Tabla de usuarios creada');
        process.exit(0);
    });
})();
