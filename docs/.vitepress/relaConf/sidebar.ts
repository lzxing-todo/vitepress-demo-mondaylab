import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/Algorithm/': [
    // 第一部分
    {
      text: '栈和队列',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/column/Algorithm/001_Stack'
        },
        {
          text: '队列-事件循环',
          link: '/column/Algorithm/002_Queue'
        }
      ]
    },
    // 第二部分
    {
      text: '字典和树',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/column/Algorithm/003_Dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/column/Algorithm/004_Tree'
        }
      ]
    }
  ],
  //前端
  '/column/Front/': [
    // 第一部分
    {
      text: 'Vue：前端梦的开始',
      items: [
        {
          text: 'What is Vue',
          link: '/column/Front/001_Vue前端梦的开始'
        },
        {
          text: '玩些简单指令',
          link: '/column/Front/002_指令'
        },
        {
          text: '搞些复杂指令',
          link: '/column/Front/003_复杂指令'
        },
        {
          text: '1️⃣生命周期1️⃣',
          link: '/column/Front/004_生命周期'
        },
        {
          text: '♾️组件通信♾️',
          link: '/column/Front/005_组件通信'
        },
        {
          text: '自定义指令♾️插槽',
          link: '/column/Front/006_绝招'
        },
        {
          text: '浅用路由❗',
          link: '/column/Front/007_浅用路由'
        },
        {
          text: '重用路由❗❗',
          link: '/column/Front/008_重用路由'
        },
        {
          text: 'Vuex 状态管理器📇',
          link: '/column/Front/009_Vuex'
        },
        {
          text: 'Vue3 新特性',
          link: '/column/Front/009_Vue3'
        },
        {
          text: 'Pinia 入门',
          link: '/column/Front/010_Pinia'
        }
      ]
    },
    // 第二部分
    {
      text: '综合案例',
      items: [
        {
          text: '小黑记事本',
          link: '/column/Front/0001_note'
        },
        {
          text: '成绩案例',
          link: '/column/Front/0002_score'
        },
        {
          text: '购物车案例',
          link: '/column/Front/0003_shopcar'
        },
        {
          text: '小黑记账清单',
          link: '/column/Front/0004_note2'
        },
        {
          text: '小兔仙',
          link: '/column/Front/0005_mall'
        },
        {
          text: '小黑记账本（组件拆分版）',
          link: '/column/Front/0006_noteplus'
        },
        {
          text: 'MyTag',
          link: '/column/Front/0007_MyTag'
        },
        {
          text: '面经面板',
          link: '/column/Front/0008_面经面板'
        },
        {
          text: '购物车',
          link: '/column/Front/0009_购物车'
        },
        {
          text: '',
          link: '/column/Front/0009_购物车'
        }
      ],

    },
    {
      text: '项目案例',
      items: [
        {
          text: '智慧商城',
          link: '/column/Front/01_智慧商城'
        }
      ],

    },
    {
      text: '一些小TIP',
      items: [
        {
          text: ' 单页应用程序',
          link: '/column/Front/00001_SPA'
        },
        {
          text: 'ESlint代码规范及手动修复',
          link: '/column/Front/00002_ESlint代码规范及手动修复'
        }
      ],

    }
  ],
  '/column/SQL/': [
    // 第一部分
    {
      text: 'SQL 教程',
      items: [
        {
          text: 'SQL基础知识',
          link: '/column/SQL/001_Stack'
        },
        {
          text: 'SQL约束',
          link: '/column/SQL/001_Stack'
        },
        {
          text: 'SQL运算符',
          link: '/column/SQL/001_Stack'
        },
        {
          text: 'SQL子句',
          link: '/column/SQL/001_Stack'
        },
        {
          text: 'SQL语句',
          link: '/column/SQL/001_Stack'
        },
        {
          text: 'SQL分组数据',
          link: '/column/SQL/001_Stack'
        },
        {
          text: 'SQL联结',
          link: '/column/SQL/001_Stack'
        },
        {
          text: 'SQL函数',
          link: '/column/SQL/002_Queue'
        }
      ]
    },
    // 第二部分
    {
      text: 'SQL 练习',
      items: [
        {
          text: 'SELECT 基礎',
          link: '/column/SQL/003_Dictionary'
        },
        {
          text: 'SELECT name',
          link: '/column/SQL/003_Dictionary'
        },
        {
          text: 'SELECT from World',
          link: '/column/SQL/003_Dictionary'
        },
        {
          text: 'SELECT from Nobel',
          link: '/column/SQL/003_Dictionary'
        },
        {
          text: '子查询',
          link: '/column/SQL/003_Dictionary'
        },
        {
          text: '群組函數',
          link: '/column/SQL/003_Dictionary'
        },
        {
          text: '合并两个表格',
          link: '/column/SQL/003_Dictionary'
        },
        {
          text: '更多的合拼操作',
          link: '/column/SQL/003_Dictionary'
        },
        {
          text: 'NULL值',
          link: '/column/SQL/004_Tree'
        }
      ]
    }
  ],
};