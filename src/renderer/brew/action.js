import { exec } from 'child_process';

const getLocalList = ({ key }) => new Promise((resolve, reject) => {
  exec(`brew list ${key || ''}`, (err, stdout, stderr) => {
    if (err) {
      console.log(`get brew list err${stderr}`);
      reject(err);
    } else {
      resolve(stdout);
    }
  });
});

export default { getLocalList };
