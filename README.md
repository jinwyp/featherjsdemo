# featherjsdemo
Demo for http://feathersjs.com/


https://teddysun.com/392.html

Shadowsocks-go一键安装脚本

本脚本适用环境：
系统支持：CentOS，Debian，Ubuntu
内存要求：≥128M
日期：2016 年 05 月 12 日

关于本脚本：
一键安装 Go 版的 shadowsocks 最新版本 1.1.5。据说 go 版本有 buff 。与 Python 版不同的是，其客户端程序能使用多个服务端配置，本脚本安装的是服务端程序。作者默认推荐 aes-128-cfb 加密，基于一致性，脚本使用了 aes-256-cfb 加密方式。
友情提示：如果你有问题，请先参考这篇《Shadowsocks Troubleshooting》后再问。


默认配置：
服务器端口：自己设定（如不设定，默认为 8989）
客户端端口：1080
密码：自己设定（如不设定，默认为teddysun.com）

客户端下载：
https://github.com/shadowsocks/shadowsocks-windows/releases

使用方法：
使用root用户登录，运行以下命令：
```
wget --no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-go.sh
chmod +x shadowsocks-go.sh
./shadowsocks-go.sh 2>&1 | tee shadowsocks-go.log
```

安装完成后，脚本提示如下：
```
Congratulations, shadowsocks-go install completed!
Your Server IP:your_server_ip
Your Server Port:your_server_port
Your Password:your_password
Your Local Port:1080
Your Encryption Method:aes-256-cfb

Welcome to visit:https://teddysun.com/392.html
Enjoy it!
```

卸载方法：
使用 root 用户登录，运行以下命令：
```
./shadowsocks-go.sh uninstall
```

其他事项：
客户端配置的参考链接：https://teddysun.com/339.html

安装完成后即已后台启动 shadowsocks-go ，运行：
```
/etc/init.d/shadowsocks status
```

可以查看 shadowsocks-go 进程是否已经启动。
本脚本安装完成后，已将 shadowsocks-go 加入开机自启动。

统一回复：
在 Bandwagonhost 的 VPS 上出现 Trace/breakpoint trap 现象的，初步认为是 Bandwagonhost 的系统问题。
经过测试发现，和版本升级无关，唯独在 Bandwagonhost 才会出现这个现象。建议换成 libev 版，或者将系统换为 CentOS 7 可以解决该问题。
本人不是 Shadowsocks Go 作者，安装程序均来自于这里。

使用命令：
启动：/etc/init.d/shadowsocks start
停止：/etc/init.d/shadowsocks stop
重启：/etc/init.d/shadowsocks restart
状态：/etc/init.d/shadowsocks status

多用户多端口配置文件 sample（2015年01月08日）：
配置文件路径：/etc/shadowsocks/config.json
``` 
{
    "port_password":{
         "8989":"password0",
         "9001":"password1",
         "9002":"password2",
         "9003":"password3",
         "9004":"password4"
    },
    "method":"aes-256-cfb",
    "timeout":600
}

```

官方版本的 sample ，详见这里。

更多版本 Shadowsocks 服务端一键安装脚本：
ShadowsocksR 版一键安装脚本（CentOS，Debian，Ubuntu）
Shadowsocks Python 版一键安装脚本（CentOS，Debian，Ubuntu）
CentOS 下 shadowsocks-libev 一键安装脚本
Debian 下 shadowsocks-libev 一键安装脚本

更新日志：
更新（2016年05月12日）：新增在 CentOS 7 下的防火墙规则设置。 
更新（2016年05月04日）：更新 Shadowsocks-go 到版本 1.1.5。 
更新（2015年08月01日）：新增自定义服务器端口功能（如不设定，默认为 8989）。 
更新（2015年05月11日）：更新 Shadowsocks-go 到版本 1.1.4。 
更新（2015年03月09日）：新增支持在 Debian，Ubuntu 下安装。 
更新（2015年01月08日）：修改了启动脚本 /etc/init.d/shadowsocks ，按照 CentOS 的 chkconfig 标准语法修改了一下（原来使用的是作者 Github 上自带的）。去掉了以 nobody 用户启动 shadowsocks 的方式，改为直接以当前登录用户直接启动（一般是 root 用户）。开机自启动，以及修改端口号提示无权限的问题已经解决。 

参考链接：
https://github.com/shadowsocks/shadowsocks-go