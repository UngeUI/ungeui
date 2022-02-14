import { ref, onMounted } from 'vue'

const useWidth = (el) => {
  const width = ref('0%')
  const isShow = ref(true)
  let reqRef
  let startTime = 0
  const upWidth = (temp) => {
    // console.log(width.value)
    let value = Number.parseFloat(width.value)
    if (value < 40) {
      width.value = value + 0.4 + '%'
    } else if (value < 50) {
      width.value = value + 0.3 + '%'
    } else if (value < 60) {
      width.value = value + 0.2 + '%'
    } else if (value < 90) {
      width.value = value + 0.1 + '%'
    }
    if (value > 90) {
      cancelAnimationFrame(reqRef)
      return
    }
    reqRef = window.requestAnimationFrame(upWidth)
  }
  let gap
  const end = () => {
    let value = Number.parseFloat(width.value)

    width.value = value + gap + '%'

    if (value > 100) {
      isShow.value = false
      width.value = '100%'
      cancelAnimationFrame(reqRef)
      return
    }
    reqRef = window.requestAnimationFrame(end)
  }

  //想要在0.3秒内跑完剩下的路程，也就是跑 300ms / 16.6ms = 18次，每次跑gap%
  const endWidth = () => {
    gap = (100 - Number.parseFloat(width.value)) / (300 / 16.6)
    cancelAnimationFrame(reqRef)
    window.requestAnimationFrame(end)
  }

  reqRef = window.requestAnimationFrame(upWidth)

  return {
    width,
    isShow,
    endWidth,
  }
}

export default useWidth
