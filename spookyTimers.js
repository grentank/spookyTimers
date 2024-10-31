function logCalc() {
  let dots = 1;
  return setInterval(() => {
    console.clear();
    console.log(`Вычисляю${'.'.repeat(dots++)}`);
    if (dots === 4) dots = 1;
  }, 300);
}

let result = 1;
function spookyTimers() {
  const logId = logCalc();
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          result += 3;
        }, 300);
        setTimeout(() => {
          result *= 2;
        }, 200);
        setTimeout(() => {
          setTimeout(() => {
            result -= 1;
          }, 200);
          setTimeout(() => {
            result += 4;
            setTimeout(() => {
              result *= 5;
              setTimeout(() => {
                result -= 7;
              }, 30);
            }, 500);
          }, 400);
        }, 600);
      }, 100);
      setTimeout(() => {
        result += 10;
        setTimeout(() => {
          result *= 3;
        }, 0);
        setTimeout(() => {
          result *= 2; // МОЖНО МЕНЯТЬ ТОЛЬКО ЭТУ СТРОЧКУ
        }, 1000);
        setTimeout(() => {
          result -= 5;
          setTimeout(() => {
            result *= 0;
          }, 300);
        }, 400);
      }, 500);
      setTimeout(() => {
        result *= -1;
        setTimeout(() => {
          result *= -1;
          setTimeout(() => {
            result *= -1;
            setTimeout(() => {
              result *= -1;
            }, 6);
          }, 6);
        }, 6);
      }, 6);
    }, 500);
    setTimeout(() => {
      result += 13;
      setTimeout(() => {
        result *= 2;
      }, 300);
    }, 400);
    setTimeout(() => {
      setTimeout(() => {
        result *= 7;
      }, 100);
      result *= 6;
      setTimeout(() => {
        result += 4;
        setTimeout(() => {
          result += 2;
        }, 666);
      }, 666);
    }, 666);
  }, 5);
  setTimeout(() => {
    clearInterval(logId);
    console.clear();
    console.log(`Вычисление завершено!\nРезультат: ${result}`);
  }, 5000);
  return new Promise((res) => setTimeout(() => res(result), 5000));
}

module.exports = spookyTimers;
