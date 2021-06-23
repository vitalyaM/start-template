import { src } from 'gulp';
import { log as _log } from 'gutil';
import { create } from 'vinyl-ftp';
import paths from '../assets/paths';
import { projectName } from '../../../settings';

require('dotenv').config();

function getFtpConnection() {
  return create({
    host: process.env.FTP_HOST,
    port: 21,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    log: _log,
  });
}

const remoteLocation = `/public_html/${projectName}`;

const deploy = function () {
  const conn = getFtpConnection();
  return (
    src(paths.deployFiles)
      .pipe(conn.newer(remoteLocation))
      .pipe(conn.dest(remoteLocation))
  );
};

export default deploy;
