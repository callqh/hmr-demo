export const render = () => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML = `
    <h1>Helloss Vite12d</h1>
    <p id="p">是是是fg发弟弟发发发是是是是f</p>
  `
}

export const other = () => {
  const p = document.querySelector<HTMLDivElement>('#p')!
  p.innerHTML = `
    <p>sjdflsjkddddfkdassssdfsdfdssddfdfsssdsdsdsddfdfd</p>
  `
}

if (import.meta.hot) {
  import.meta.hot.data.count = 1
}

// 第一步
// if (import.meta.hot) {
//   import.meta.hot.accept((mod) => console.log(mod))
// }
