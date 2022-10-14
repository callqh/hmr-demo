import { render } from './render'
import { initState } from './state'

render()
initState()

console.log('main change')
// 第二步，接收依赖的accept
if (import.meta.hot) {
  import.meta.hot.accept(['./render.ts', './state.ts'], ([mod1, mod2]) => {
    console.log(mod1, mod2, '==')
    mod1?.render()
    mod2?.initState()
  })
}
