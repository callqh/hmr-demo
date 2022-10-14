export const render = () => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML = `
    <h1>Helloss Vite12d</h1>
    <p id="p">是是？</p>
  `
}

export const other = () => {
  const p = document.querySelector<HTMLDivElement>('#p')!
  p.innerHTML = `
    <p>other</p>
  `
}

if (import.meta.hot) {
  import.meta.hot.data.count = 1
  import.meta.hot.accept((mod) => mod?.render())
}

// 第一步
// if (import.meta.hot) {
//   import.meta.hot.accept((mod) => console.log(mod))
// }

// {
//   "id": "/src/render.ts",
//   "callbacks": [
//     {
//       "deps": [
//         "/src/render.ts"
//       ]
//     }
//   ]
// }
