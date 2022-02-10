'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    'favorite',
    {
      id: { type: 'int', primaryKey: true, unique: true, autoIncrement: true },
      user_id: { type: 'int' },
      repo_id: { type: 'int', notNull: true },
      node_id: { type: 'string', notNull: true },
      name: { type: 'string', notNull: true },
      full_name: { type: 'string', notNull: true },
      size: { type: 'string', notNull: true },
      raw_data: { type: 'jsonb', notNull: true },
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable('favorite', callback);
};
exports._meta = {
  version: 1,
};
