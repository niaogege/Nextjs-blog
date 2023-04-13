待办计划

## 功能介绍

- 完全自定义主题，页面静态化渲染，SSG
- 标签页和时间线以及关于自己页面
- 评论功能，现在还不知道对接哪一个评论系统
- 根据文档自动生成网站索引
- 文章页面，md 格式代码高亮
- 国际化(中英文)
- 黑白主题切换
- 输出 npm,开源

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Docker

```bash
// Dockerfile
FROM node:16
COPY . /nestjs
WORKDIR /nestjs
RUN npm install && npm run build
CMD npm run start
EXPOSE 3002
```

- docker image build -t next-demo . 创建镜像
- docker container run --rm -p 8000:3002 -it next-demo 创建容器
  // -p 参数：容器的 3000 端口映射到本机的 8000 端口。
  // -it 参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。
- docker login
<!-- 为本地的 image 标注用户名和版本。 -->
- docker image tag next-demo:0.0.1 niaogege/next-demo:0.0.1
- docker image push niaogege/next-demo:0.0.1

// 本地拉下来之后
docker container run --rm -p 3002:3002 -it niaogege/next-demo：0.0.1
