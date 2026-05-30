export const BRAND = {
  logo: 'L',
  name: 'LEO',
  fullName: '你好，我是 LEO',
  systemName: 'LEO_SYSTEMS',
  title: '设计师 / 开发者',
  tagline: '一位专注于数字体验的创意技术者。',
};

export const NAV_ITEMS = [
  { id: 'home', label: '首页', path: '/' },
  { id: 'about', label: '关于', path: '/about' },
  { id: 'works', label: '作品', path: '/works' },
  { id: 'contact', label: '联系', path: '/contact' },
];

export const FOOTER_LINKS = [
  { label: '文档', href: '#' },
  { label: '源码', href: '#' },
  { label: '终端', href: '#' },
];

export const HERO_META = [
  { label: '所在地', value: '地球 // 远程' },
  { label: '技术栈', value: 'React / Tailwind / Node' },
  { label: '版本', value: '2024.v1' },
];

export const HERO_STATUS = '系统状态：运行中';

export const SERVICES = [
  'UI/UX 架构设计',
  '全栈工程开发',
  '技术策略咨询',
  '品牌视觉设计',
];

export const FEATURED_WORK = {
  title: '[ 精选作品 ]',
  placeholder: '[ 项目线框图_01 ]',
  description: '为去中心化数据可视化系统打造的高保真终端界面设计。',
};

export const HOME_SERVICES_TITLE = '[ 服务项目 ]';

export const BIO = {
  command: '$ cat bio.txt',
  paragraphs: [
    '我是一名创意技术者，专注于构建高性能系统，擅长赛博粗野主义美学与纯粹的技术表达。我的工作处于早期计算机文化与未来界面设计的交汇点。',
    '我相信线框图之美。通过暴露软件的"骨架"，我们能建立用户与机器之间更诚实的关系。没有阴影，没有冗余，只有逻辑与霓虹。',
  ],
  profileMeta: {
    location: '加密网络',
    status: '在线',
  },
  downloadLabel: '> 下载简历.PDF',
  profilePlaceholder: '[ 头像占位符 ]',
};

export const ABOUT_PAGE = {
  profileTag: '系统用户档案',
  title: '关于我',
  descriptionFile: '01_个人简介.EXE',
  skillsTitle: '技术栈与时间线',
};

export const SKILL_BLOCKS = [
  {
    id: 'BLOCK_01',
    title: '/开发',
    items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Python / FastAPI'],
  },
  {
    id: 'BLOCK_02',
    title: '/设计系统',
    items: ['赛博粗野主义', 'Figma 架构', 'UX 线框设计', '字体排版系统'],
  },
  {
    id: 'BLOCK_03',
    title: '/经历',
    isTimeline: true,
    items: [
      { period: '2023 - 至今', role: '首席系统架构师', active: true },
      { period: '2021 - 2023', role: '前端开发 @ LEO_LABS', active: false },
    ],
  },
];

export const INTERESTS = {
  title: '兴趣爱好',
  description:
    '离开终端之后，我喜欢探索模拟合成器、记录粗野主义建筑，以及参与开源隐私协议项目。',
  items: [
    { icon: 'album', label: '模块合成' },
    { icon: 'architecture', label: '混凝土艺术' },
  ],
};

export const WORKS_PAGE = {
  title: '作品',
  status: '系统状态：在线',
  catalogVersion: '目录版本：2.0.4',
  viewDetails: '> 查看详情 →',
  logTitle: '控制台日志快照',
  logTerminal: '终端：pts/0',
};

export const PROJECTS = [
  {
    id: 1,
    title: '神经仪表盘',
    placeholder: '[ 项目缩略图_01 ]',
    description: '面向亚毫秒级数据可视化与神经链路遥测处理的高性能分析界面。',
  },
  {
    id: 2,
    title: '赛博协议',
    placeholder: '[ 项目缩略图_02 ]',
    description: '通过自动化语义映射与加密重对齐脚本，解析遗留系统的工具链。',
  },
  {
    id: 3,
    title: '虚空互操作',
    placeholder: '[ 项目缩略图_03 ]',
    description: '连接分布式账本与低连通区域边缘节点的实验性桥接方案。',
  },
  {
    id: 4,
    title: '幽灵终端',
    placeholder: '[ 项目缩略图_04 ]',
    description: '内置混淆与变频指令传输的隐身优化终端模拟器。',
  },
  {
    id: 5,
    title: '粗野核心',
    placeholder: '[ 项目缩略图_05 ]',
    description: '基于严格 8px 网格与纯 CSS 几何的轻量硬件加速 UI 组件库。',
  },
  {
    id: 6,
    title: '语法错误',
    placeholder: '[ 项目缩略图_06 ]',
    description: '通过故意过载浏览器内存缓冲区生成的艺术化故障渲染合集。',
  },
];

export const TERMINAL_LOG = [
  '正在加载本地缓存资源...',
  '正在初始化 project_grid_v2.sys',
  '正在从 remote/origin/main 拉取仓库元数据',
  '发现 42 次提交，最近稳定构建于 04:20:00',
];

export const CONTACT_PAGE = {
  channelTag: '通讯频道',
  title: '联系我',
  commsFile: '02_通讯.EXE',
  prompt: '$ send_message --to leo',
  status: '系统状态：在线',
  emailLabel: '邮箱：',
  locationLabel: '位置：',
  roleLabel: '角色：',
  nameLabel: '> 姓名_',
  emailInputLabel: '> 邮箱_',
  messageLabel: '> 留言_',
  namePlaceholder: '请输入姓名...',
  emailPlaceholder: '请输入邮箱...',
  messagePlaceholder: '输入消息内容...',
  submitLabel: '> 发送消息',
  successMessage: '> 消息已入队：发送成功，等待回复中...',
};

export const CONTACT_INFO = {
  email: 'leo@example.com',
  status: '系统状态：在线',
  prompt: '$ send_message --to leo',
};

export const PERSONAL_INFO = {
  name: 'Leo',
  title: '设计师 / 开发者',
  email: 'leo@example.com',
  location: '地球 // 远程',
};

export const FOOTER_COPYRIGHT = '保留所有权利';

export const SITE_METADATA = {
  title: 'L | 设计师 & 开发者',
  description: 'Leo - 设计师与开发者个人作品集',
  author: 'Leo',
};

export const HERO_CTA = '> 联系我';
