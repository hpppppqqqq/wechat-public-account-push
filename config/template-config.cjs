/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '最可爱的小猫咪, 早上好',
    desc: `
      **{{date.DATA}}**
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      温馨提示: {{notice.DATA}}
      
      ---
      
      今天是我们在一起的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{earthy_love_words.DATA}}     —— 爱你的鸭鸭 
                               
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
