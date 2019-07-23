const errorHandler = e => {
 
  if (document.body.querySelector('#error-log'))
    return
 
  const container = document.createElement('DIV')
  const errorDetails = document.createElement('PRE') 

  container.id = 'error-log'
  errorDetails.innerHTML = `
    error: ${e.error}
    message: ${e.message}
    filename: ${e.filename}
    line: ${e.lineno}, col: ${e.colno}
  `
  container.appendChild(errorDetails)
  document.body.appendChild(container)

}
 
const init = () => {
  window.addEventListener('error', errorHandler, true)
  window.onerror = errorHandler
}

init()

