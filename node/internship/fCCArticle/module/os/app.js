// importing os module
const os = require('os');

// os.uptime()
const systemUptime = os.uptime();

//os.userInfo()
const userInfo = os.userInfo();

// We will store some other inforamtion about my WindowsOS in this object:
const otherInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

// Let's Check The Result:
console.log(systemUptime);
console.log(userInfo);
console.log(otherInfo);
