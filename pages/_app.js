import '../styles/globals.css'
import {MoralisProvider} from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://zeg35mceetqw.usemoralis.com:2053/server"
      appId="55mgzJHqNjep6YZ2cpe9yhZKHUg06dMMnrbe35Zc"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
