import { exec } from 'child_process';

const baseAction = ({ order }) => new Promise((resolve, reject) => {
  exec(order, (err, stdout, stderr) => {
    if (err) {
      console.log(`order: ${order} has err: ${stderr}`);
      reject(err);
    } else {
      resolve(stdout);
    }
  });
});

const getLocalList = ({ key }) => {
  const order = `brew list ${key || ''}`;
  return baseAction({ order });
};

const uninstall = (name) => {
  const order = `brew uninstall ${name}`;
  return baseAction({ order });
};

export default { getLocalList, uninstall };
