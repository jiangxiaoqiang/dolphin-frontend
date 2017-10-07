#!/bin/sh

#
# 一键部署前端项目到远程1台或多台服务器(欢迎改进)
# 发布流程为：编译构建-打包-发布包-拷贝包到指定目录-解压包
# 注：本机需要安装Ansible并与服务器做免密登录
#

# 当使用未初始化的变量时，程序自动退出
set -u
 
# 当任何一行命令执行失败时，自动退出脚本
set -e

# send=`date '+%Y-%m-%d %H:%M:%S'`
CURRENT_TIME=`date '+%Y%m%d%H%M%S'`
SERVER_IP='192.168.31.25'
APP_PATH='/opt/dolphin/frontend'
ANSIBLE_SERVER='piservers'

echo "$CURRENT_TIME"

echo "开始构建..."
# Build project
#npm run site-dev
npm run build

echo "开始打包..."
# Package project
rm -rf dist.tar.gz
tar zcf dist.tar.gz dist

echo "开始拷贝..."
# publish project
ansible ${ANSIBLE_SERVER} -m copy -a "src=./dist.tar.gz dest=/home/pi/app-soft/"
#scp dist.tar.gz root@$SERVER_IP:~/app-soft

ansible ${ANSIBLE_SERVER} -m command -a "date"

echo "备份站点..."
# 备份当前站点
ansible ${ANSIBLE_SERVER} -m command -a "mkdir -p /opt/dolphin/frontend/dist && mv /opt/dolphin/frontend/dist /opt/dolphin/frontend/dist-$CURRENT_TIME"

ansible ${ANSIBLE_SERVER} -a "mv /home/pi/app-soft/dist.tar.gz /opt/dolphin/frontend/"

echo "开始部署..."
#部署
ansible ${ANSIBLE_SERVER} -a "tar -xzvf /opt/dolphin/frontend/dist.tar.gz -C /opt/dolphin/frontend/"
echo "部署完成"
