# copilot for CNB

![](https://img.shields.io/npm/v/tdesign-react.svg?sanitize=true)
![](https://img.shields.io/npm/v/tdesign-react.svg?sanitize=true)
![](https://img.shields.io/npm/v/tdesign-react.svg?sanitize=true)
![](https://img.shields.io/npm/v/tdesign-react.svg?sanitize=true)

## 使用方式

### 从 自定义环境 起步

```dockerfile
FROM node:20

RUN curl -fsSL https://code-server.dev/install.sh | sh &&\
    code-server --install-extension redhat.vscode-yaml &&\
    code-server --install-extension eamodio.gitlens &&\
    echo done

COPY --from=cnbcool/copilot:latest /cnb/copilot.vsix /tmp/copilot.vsix

RUN code-server --install-extension /tmp/copilot.vsix
```

### 从 code-server 起步

```dockerfile
FROM codercom/code-server

COPY --from=cnbcool/copilot:latest /cnb/copilot.vsix /tmp/copilot.vsix

RUN code-server --install-extension /tmp/copilot.vsix

# 安装自定义软件
```
