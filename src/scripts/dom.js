export const createHTMLElement = (parentElement, valueObject) => {
  const wrapper = document.createElement('article')

  const status = document.createElement('span')
  const statusText = document.createTextNode(valueObject.status)
  status.appendChild(statusText)
  wrapper.appendChild(status)

  const message = document.createElement('span')
  const messageText = document.createTextNode(valueObject.message)
  message.appendChild(messageText)
  wrapper.appendChild(message)

  const input = document.createElement('span')
  const inputText = document.createTextNode(valueObject.data.input)
  input.appendChild(inputText)
  wrapper.appendChild(input)

  const output = document.createElement('span')
  const outputText = document.createTextNode(valueObject.data.output)
  output.appendChild(outputText)
  wrapper.appendChild(output)

  parentElement.appendChild(wrapper)
}
