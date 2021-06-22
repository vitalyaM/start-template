const gulp = require('gulp');
const gutil = require('gutil');
const ftp = require('vinyl-ftp');
const paths = require('../assets/paths');
const settings = require('../../../settings');

require('dotenv').config();

function getFtpConnection() {
  return ftp.create({
    host: process.env.FTP_HOST,
    port: 21,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    log: gutil.log,
  });
}

const remoteLocation = `/public_html/${settings.projectName}`;

const deploy = function () {
  const conn = getFtpConnection();
  return (
    gulp
      .src(paths.deployFiles)
      .pipe(conn.newer(remoteLocation))
      .pipe(conn.dest(remoteLocation))
  );
};

module.exports = deploy;
