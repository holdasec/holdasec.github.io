import { copyFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const docsDir = join(process.cwd(), 'docs');

// GitHub Pages 禁用 Jekyll，避免 _ 开头文件被忽略
writeFileSync(join(docsDir, '.nojekyll'), '');

// SPA 路由：404 时返回 index.html，React Router 可处理 /about 等路径
copyFileSync(join(docsDir, 'index.html'), join(docsDir, '404.html'));

console.log('GitHub Pages: wrote docs/.nojekyll and docs/404.html');
