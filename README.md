## Wechart Helper - Chrome plug-in

1. check who deleted your wechat contact

2. check black list

### How to run and debug

>   Wechart helper Chrome plug-in developing note -- reference of Chrome plug-in:

>   http://www.liaohuqiu.net/cn/posts/wechat-helper/


1.  Installing dependencies 

    ```
    npm install
    ```

2.  build plug-in's `content_scripts` and `background`

    ```
    npm run build
    ```

3.  Another terminal，build plug-in's `popup`.

    ```
    npm run build-popup
    ```

4.  In the extension manage，select `extension` folder，load the extension.

    Click the icon to open web-wechart from navigation bar，plug-in will loading automatically. 

5.  After editing, code will build automatically. Please reloading the plug-in and fresh the page.

    Suggests: Use [Extensions Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) + Spark shotcut key reloading plug-in.

6.  Support source-map code debug.

>   Happy coding!

---

### How to use

1. install

    1. Install from Chrome plug-in store
    
        https://chrome.google.com/webstore/detail/bdfbkchemknlpmmopkncahjdmocnambd/
    
    2.  wechart helper plug-in will upgrade continually, manually installing extension is not supported.

        **Windows users，Please click here**: [WeChat Helper -- Windows App](https://github.com/freedombird9/wechat-deletion-check)

2.  Use
    
    1.  The interval between each time set would be more than **60s**.

    2.  **If the notic shows "You're doing it too frequently," please try later. Next time will skip the friends that already checked.**


3.  screenshot

    <div><img src='https://raw.githubusercontent.com/liaohuqiu/wechat-helper/master/art/1.png'/></div>

    <div><img src='https://raw.githubusercontent.com/liaohuqiu/wechat-helper/master/art/2.png'/></div>


### Theory 

1.  Checking contact and adding contact to chart group. Contacts don't have friendship with you would not be added into the chart group.

2.  Large numbers of contacts will be checked in batches, and each check will skip the already-checked contacts. 

### Other

1.  Feedback

    1.  If you have any question or suggestion, please send to:  https://github.com/liaohuqiu/wechat-helper/issues

2.  Thanks

    Thanks [@0x5e](https://github.com/0x5e) 's [wechat-deleted-friends](https://github.com/0x5e/wechat-deleted-friends)


### permit

MIT
