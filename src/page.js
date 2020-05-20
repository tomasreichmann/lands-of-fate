/** @jsx jsx */
import { jsx } from '@emotion/core'

import Head from 'next/head'

import { css, Global } from '@emotion/core'
import theme from './theme';

const Page = ({children, ...restProps}) => {
  return (
    <div>
      <Global
        styles={css(theme.global)}
      />
      <Head>
        <title>Osudová zem</title>
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Roboto:400,700&amp;display=swap&amp;subset=latin-ext" rel="stylesheet" />
      </Head>
      <main css={theme.main} {...restProps}>
        {children}
      </main>
    </div>
  )
}

export default Page;