const countdown = require("node-countdown");
const notifier = require('node-notifier');


module.exports = function timer(minute) {
  let options = {
    // prefix: '前缀',
    // suffix: '后缀',
    // 循环任务
    loop: false,
    // 时间单位格式化数组
    // eg: ['years', 'months', ...]
    // format: ['年', '月', '天', '小时', '分', '秒']
    format: ["年", "月", "天", "小时", "分", "秒"],
  };

  countdown.start(minute * 1000 * 60, options, function (err) {
    notifier.notify({
        title: 'CountDown',
        message: '倒计时结束⏰',
        sound: 'Tink'
      });
  });
};
