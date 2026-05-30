# GitHub Pages 部署说明

仓库：`git@github.com:holdasec/holeasec.github.io.git`  
访问地址：**https://holdasec.github.io/**（用户站点，仓库名须为 `用户名.github.io`）

## 在 GitHub 上开启 Pages（首次）

1. 打开仓库 **Settings → Pages**
2. **Build and deployment → Source** 选择 **Deploy from a branch**
3. **Branch** 选 `main`（或你推送的分支）
4. **Folder** 选 **`/docs`**
5. 保存后等待 1～3 分钟，站点即可访问

## 本地更新并发布

```bash
cd /Users/wj/Desktop/xianxia_vibecoding/0530_test_web_per
npm run build:pages
git add .
git commit -m "chore: update GitHub Pages build in docs"
git push origin main
```

## 构建产物说明

| 文件/目录 | 作用 |
|-----------|------|
| `docs/` | Vite 构建输出，Pages 从此目录发布 |
| `docs/.nojekyll` | 禁用 Jekyll，避免静态资源路径异常 |
| `docs/404.html` | 与 `index.html` 相同，支持 `/about`、`/works` 等前端路由 |

## 注意事项

- 用户站点 `base` 为 `/`，不要用子路径 `/仓库名/`
- 修改代码后需重新 `npm run build:pages` 再提交 `docs`
- `node_modules` 不会上传，仅提交源码与 `docs` 构建结果
