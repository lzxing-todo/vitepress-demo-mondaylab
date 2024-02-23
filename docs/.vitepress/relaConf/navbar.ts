import { DefaultTheme } from 'vitepress';
export const newnav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '上课教学',
    items: [
      {
        text: 'Java基础',
        link: '/column/Java/' // 表示docs/column/Travel/index.md
      },
      {
        text: 'JavaWeb',
        link: '/column/JavaWeb/' // 表示docs/column/JavaWeb/index.md
      },
      {
        text: 'SpringBoot',
        link: '/column/SpringBoot/' // 表示docs/column/SpringBoot/index.md
      },
      {
        text: 'SpringCloud',
        link: '/column/SpringCloud/' // 表示docs/column/SpringCloud/index.md
      },
      {
        text: '数据结构与算法',
        link: '/column/Algorithm/' // 对应docs/column/Algorithm下的idnex.md文件
      },
      {
        text: '前端',
        link: '/column/Front/' // 表示docs/column/Front/index.md
      },
      {
        text: 'SQL',
        link: '/column/SQL/' // 表示docs/column/SQL/index.md
      }
    ]
  },
  {
    text: '动一动手',
    items: [
      {
        text: 'Linux 基础',
        link: '/column/Linux/' // 表示docs/column/Linux/index.md
      },
      {
        text: 'Linux 安装',
        link: '/column/Algorithm/' // 对应docs/column/Algorithm下的idnex.md文件
      },
      {
        text: 'Linux 部署',
        link: '/column/Python/' // 表示docs/column/Python/index.md
      },
      {
        text: '云计算&云开发',
        link: '/column/Go/' // 表示docs/column/Go/index.md
      }
    ]
  },
  {
    text: '即将开始',
    items: [
      {
        text: '软件设计师',
        link: '/column/Java/' // 表示docs/column/Travel/index.md
      },
      {
        text: '软件架构师',
        link: '/column/Algorithm/' // 对应docs/column/Algorithm下的idnex.md文件
      },
      {
        text: 'Python',
        link: '/column/Python/' // 表示docs/column/Python/index.md
      },
      {
        text: 'Go',
        link: '/column/Go/' // 表示docs/column/Go/index.md
      }
    ]
  },
  {
    text: '工具分享',
    items: [
      {
        text: 'Window',
        link: '/column/Window/' // 表示docs/column/Window/index.md
      },
      {
        text: 'Mac',
        link: '/column/Mac/' // 表示docs/column/Mac/index.md
      }
    ]
  },
  {
    text: '个人成长',
    items: [
      {
        text: '小李·游记',
        link: '/column/Travel/' // 表示docs/column/Travel/index.md
      },
      {
        text: '所思·所想',
        link: '/column/Growing/' // 表示docs/column/Growing/index.md
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/3131845139247960/posts'
      },
      {
        text: '飞书社区',
        link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink'
      }
    ]
  }
];
