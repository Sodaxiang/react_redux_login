# react_redux_login
#### 该登录系统Demo基于react，redux，react-router,服务器端采用express搭建，数据库使用非关系型数据库MongoDB存储用户信息。
> 项目结构大致如下：
![pro_structure](https://img-blog.csdnimg.cn/20201214144552211.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)

### 1.Demo简介
> * 1）该demo使用react脚手架搭建的一个登录系统，包括用户注册，登录，权限处理等模块；
> * 2） 前端使用react构建，页面结构布局方面采用bootstrap，服务器端使用express搭建，数据库采用非关系型数据库mongodb，在操作数据库方面采用mongoose；
> * 3）demo中涉及redux，react-router，axios，react高阶组件，jwt(json web token)，validator库，lodash库,bootsrap等的使用。

### 2. 通过Demo能够学到什么
> * 1）react，redux，react-router，express，mongodb的熟练使用；
> * 2）组件化思想，模块化开发，工程化思想；
> * 3）项目开发的基本流程以及调试方法（devtools的使用）；
> * 4）前后端联动，包括跨域的解决， 响应状态码的使用等。

### 3. Demo部分截图展示
###### 1）注册页面
> 该部分会对用户输入的注册信息进行验证，包括信息是否填入完整，该信息是否已存在等。最后，注册成功则跳转至登录页面。
>
 ![signup1](https://img-blog.csdnimg.cn/20201214203420256.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)
 ![signup2](https://img-blog.csdnimg.cn/20201214203553847.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)
 ![signup3](https://img-blog.csdnimg.cn/202012142036409.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)

###### 2）登录页面
> 登录会对用户信息进行校验并提示相应信息。
>
 ![login1](https://img-blog.csdnimg.cn/20201214203858354.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)
 ![login2](https://img-blog.csdnimg.cn/20201214203929905.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)

###### 3）页面的权限控制（使用React高阶组件实现）
> 对于某些页面，需要用户登录之后才能访问，对于未登录的用户，会让其在访问该页面将其导向登录页面；在用户登录之后便可以访问该页面。
>
 ![cart1](https://img-blog.csdnimg.cn/20201214204235334.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)
 ![cart2](https://img-blog.csdnimg.cn/20201214204300121.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3MTU1NTgy,size_16,color_FFFFFF,t_70)


### 4.该Demo非常适合React实战练手，并对前后端同时联动非常有帮助，能够有效提升以及理解对react全家桶的综合运用。
> 如有帮助，请给一个star喔~
