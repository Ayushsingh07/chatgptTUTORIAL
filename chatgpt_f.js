import { ChatGPTAPIBrowser } from 'chatgpt'

const api = new ChatGPTAPIBrowser({
  email: process.env.OPENAI_EMAIL,
  password: process.env.OPENAI_PASSWORD
})
await api.initSession()

const result = await api.sendMessage('Hello World!')
console.log(result.response)