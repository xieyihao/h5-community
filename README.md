# h5-community
React Express Demo
---------------

Install package
-------------------
```
npm install
```

How to use it
------------
*DEV ONLY CLIENT*

See changes at
[http://localhost:8181](http://localhost:8181)
```
npm run dev
```

路由表
---------------
测试环境host:
[http://dev.gstzy.cn](http://dev.gstzy.cn)
&
线上环境host;
[http://wx.gstzy.cn](http://wx.gstzy.cn)

医管主页
```
/mecindex/:id"
```

搜索:/search/020/doct/[关键字]
type为搜索类型:
doct搜索医生， mec搜索医馆
```
/search/:city/:type/:char
```

我的预约
```
/appointmentlist
```

医生主页
```
/doctorinfo/:doctorid/:misdoctorid
```

义诊列表
```
/lecturelist
```
义诊详情
```
/lecturelist/:id
```

<<<<<<< HEAD
全部专家团队列表
```
/expertteamlist
```
专家团队详细页
```
/expertteamlist/:id
```
