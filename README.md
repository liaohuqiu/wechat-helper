##  微信助手 - Chrome 插件

1.  检查被谁删除

2.  检查黑名单

3.  支持大量好友

>   微信助手 Chrome 插件开发手记 -- Chrome 插件开发参考:

>   http://www.liaohuqiu.net/cn/posts/wechat-helper/

### 如何运行和调试

代码已开源，本项目可作为 

1.  安装依赖

    ```
    npm install
    ```

2.  build 插件的 `content_scripts` 和 `background`

    ```
    npm run build
    ```

3.  另外一个终端，build 插件的 `popup`.

    ```
    npm run build-popup
    ```

4.  扩展管理里面，选中 `extension` 文件夹，加载扩展

    从导航栏上图标点开网页版微信，插件会自动加载。

5.  代码修改后，自动会 build ，重新加载插件，刷新页面即可。

    推荐使用 [Extensions Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) + Spark 全局快捷键重新加载插件。

6.  支持 source-map 源码调试。

>   Happy coding!

---

### 使用方法

1. 安装

    1. 从 Chrome 商店安装。
    
        https://chrome.google.com/webstore/detail/bdfbkchemknlpmmopkncahjdmocnambd/
    
    2.  本插件会频繁升级，暂不支持手动安装扩展。

        ~~**Windows版本** 也在开发中，即将发布。~~

        **Windows 用户，请到这里**: [WeChat Helper -- Windows App](https://github.com/freedombird9/wechat-deletion-check)

2.  使用
    
    1.  时间间隔设置为 **60** 秒以上

    2.  **如果提示操作过于频繁，请稍后再试，下次会跳过已经检查过的好友。**


3.  截图

    <div><img src='https://raw.githubusercontent.com/liaohuqiu/wechat-helper/master/art/1.png'/></div>

    <div><img src='https://raw.githubusercontent.com/liaohuqiu/wechat-helper/master/art/2.png'/></div>


### 原理

1.  检查联系人，即创建群组并加人，如果不是好友，无法加入。

2.  如果联系人多，将会分批操作，下次会略过之前检查过的联系人。

### 其他

1.  反馈

    1.  有任何问题和建议，请提交到这里: https://github.com/liaohuqiu/wechat-helper/issues

2.  感谢

    感谢 [@0x5e](https://github.com/0x5e) 同学的 [wechat-deleted-friends](https://github.com/0x5e/wechat-deleted-friends), 所谓巨人的肩膀。^_^


### 许可

MIT
