#!/usr/bin/env bash
###
# Author: shuisheng
# Email: 2274751790@qq.com
# Github: https://github.com/galaxy-s10
# Date: 2022-01-03 16:12:54
# LastEditTime: 2022-03-23 05:03:59
# Description:https://github.com/galaxy-s10/react-webpack-template
###

# 约定$1为任务名, $2为环境, $3为Jenkins工作区
JOBNAME=$1 # 注意: JOBNAME=$1,这个等号左右不能有空格！
ENV=$2
WORKSPACE=$3
PUBLICDIR=/node

echo 删除node_modules:
rm -rf node_modules

echo 查看npm版本:
npm -v

echo 设置npm淘宝镜像:
npm config set registry http://registry.npm.taobao.org/

echo 查看当前npm镜像:
npm get registry

if ! type yarn >/dev/null 2>&1; then
  echo 'yarn未安装,先全局安装yarn'
  npm i yarn -g
else
  echo 'yarn已安装'
fi

echo 查看yarn版本:
yarn -v

echo 设置yarn淘宝镜像:
yarn config set registry https://registry.npm.taobao.org

echo 查看当前yarn镜像:
yarn config get registry

echo 开始安装依赖:
yarn install

if [ $ENV = 'beta' ]; then
  echo 开始构建测试环境:
elif [ $ENV = 'preview' ]; then
  echo 开始构建预发布环境:
elif [ $ENV = 'prod' ]; then
  echo 开始构建正式环境:
else
  echo 开始构建$ENV环境:
fi

npx cross-env REACT_APP_RELEASE_PROJECT_NAME=$JOBNAME REACT_APP_RELEASE_PROJECT_ENV=$ENV craco build
# npx cross-env REACT_APP_RELEASE_PROJECT_NAME=$JOBNAME REACT_APP_RELEASE_PROJECT_ENV=$ENV webpack --config ./config/webpack.common.ts --env production
