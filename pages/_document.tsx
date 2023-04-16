import {Html, Head, Main, NextScript} from 'next/document';

export default function _document() {
  return (
    <Html lang='en' 
      className='scroll-smooth scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-300 overflow-y-scroll'>
        <Head/>
        <body >
            <Main/>
            <NextScript/>
        </body>
    </Html>
  )
}
