安装 nuxt3 报错：Error: Failed to download template from registry: fetch failed
pnpm dlx nuxi@latest init nuxt-app
解决方案：
配置 hosts，Mac 中路径是 /etc/hosts，在下面追加一行
185.199.108.133 raw.githubusercontent.com
