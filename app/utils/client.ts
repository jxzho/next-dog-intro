export const copyToClipboard = (str: string) => {
  return new Promise ((resolve, reject) => {
    if (!str) {
      return reject()
    }

    try {
      const el = document.createElement('textarea')
      el.value = str
      el.setAttribute('readonly', 'true')
      el.style.position = 'absolute'
      el.style.top = '-9999px'
      el.style.left = '-9999px'
      el.style.opacity = '0'
      document.body.appendChild(el)

      el.select()
      
      const isCopied = document.execCommand('copy')

      document.body.removeChild(el)

      isCopied
        ? resolve(isCopied)
        : reject()
    } catch (error) {
      reject(error)
    }
  })
}
