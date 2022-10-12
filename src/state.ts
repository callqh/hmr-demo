let timerId: any

export const initState = () => {
  const countEle = document.querySelector<HTMLElement>('#count')!
  timerId = setInterval(() => {
    countEle.innerText = Number(countEle.innerText) + 1 + '    '
  }, 1000)
}

if (import.meta.hot) {
  console.log(import.meta.hot.data.count, 'data.count')
  import.meta.hot.data.count = 1
  import.meta.hot.dispose(() => {
    clearInterval(timerId)
  })
}
