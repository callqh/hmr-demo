// home热更新时产生的result代码
// 这里也解释了为什么fontmatter更新后，页面没有进行热更新
// 因为我们页面中使用的fontmatter是一个对象，当改变后需要拿到这个对象去重新触发react rerender
import RefreshRuntime from '@react-refresh'
let prevRefreshReg
let prevRefreshSig
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs  plugin-react can't detect preamble. Something is wrong.  " + 'See https:    github.com  vitejs  vite-plugin-react  pull  11#discussion_r430879201 ')
  }
  prevRefreshReg = window.$RefreshReg$
  prevRefreshSig = window.$RefreshSig$
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, '  Users  lqh  lqh  island.js  docs  zh  index.md?.jsx ' + '  ' + id)
  }
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform
}
/*@jsxRuntime automatic @jsxImportSource react*/
import { Fragment as _Fragment, jsx as _jsx } from 'react  jsx-runtime '
export const frontmatter = {
  'pageType ': 'home ',
  'hero ': {
    'name ': 'Islandd ',
    'text ': '基于 Vite & MDX 语法的静态站点生成器 ',
    'tagline ': '简单、强大、高性能的现代化 SSG 方案 ',
    'image ': {
      'src ': '  island.png ',
      'alt ': 'Island ',
    },
    'actions ': [
      {
        'theme ': 'brand ',
        'text ': '快速开始 ',
        'link ': '  zh  guide  getting-started ',
      },
      {
        'theme ': 'alt ',
        'text ': 'GitHub 地址 ',
        'link ': 'https:    github.com  sanyuan0704  island ',
      },
    ],
  },
  'features ': [
    {
      'title ': 'Vite: 极速的开发响应速度 ',
      'details ': '基于 Vite 构建，开发时的响应速度极快，即时的热更新，带给你极致的开发体验。 ',
      'icon ': '🚀 ',
    },
    { 'title ': 'MDX: Markdown & React 组件来写内容 ', 'details ': 'MDX 是一种强大的方式来写内容。你可以在 Markdown 中使用 React 组件。 ', 'icon ': '📦 ' },
    { 'title ': '孤岛架构: 更高的生产性能 ', 'details ': '采用 Islands 架构，意味着更少的 JavaScript 代码、局部 hydration， 从而带来更好的首屏性能。 ', 'icon ': '✨ ' },
    { 'title ': '功能丰富: 一站式解决方案 ', 'details ': '对全文搜索、国际化等常见功能可以做到开箱即用。 ', 'icon ': '🛠️ ' },
    { 'title ': 'TypeScript: 优秀的类型支持 ', 'details ': '使用 TypeScript 编写，提供了优秀的类型支持，让你的开发更加顺畅。 ', 'icon ': '🔑 ' },
    { 'title ': '扩展性强: 提供多种自定义能力 ', 'details ': '通过其扩展机制，你可以轻松的扩展 Island 的主题 UI 和构建能力。 ', 'icon ': '🎨 ' },
  ],
}
export const toc = []
function _createMdxContent(props) {
  return _jsx(_Fragment, {})
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {}
  return MDXLayout
    ? _jsx(
        MDXLayout,
        Object.assign({}, props, {
          children: _jsx(_createMdxContent, props),
        })
      )
    : _createMdxContent(props)
}
n_c = MDXContent
export default MDXContent
var _c
$RefreshReg$(_c, 'MDXContent ')
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg
  window.$RefreshSig$ = prevRefreshSig
  if (!window.__vite_plugin_react_timeout) {
    window.__vite_plugin_react_timeout = setTimeout(() => {
      window.__vite_plugin_react_timeout = 0
      RefreshRuntime.performReactRefresh()
    }, 30)
  }
}
import.meta.hot.accept()
