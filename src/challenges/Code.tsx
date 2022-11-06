import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from 'prism-react-renderer/themes/vsDark';

const exampleCode = `
import { useState } from 'react'

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean> // Return success

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const copy: CopyFn = async text => {

    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)
      return false
    }
  }

  return [copiedText, copy]
}

export default useCopyToClipboard
`.trim();


const Code = () => (
	<div className="bg-black rounded-xl border-solid border border-neutral-800 text-sm">
		<Highlight {...defaultProps} theme={vsDark} code={exampleCode} language="tsx">
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={{ textAlign: 'left', margin: '1em 0', padding: '0.5em', overflow: 'scroll' }}>
					{tokens.map((line, i) => (
						<div style={{ display: 'table-row' }} key={i} {...getLineProps({ line, key: i })}>
							<span style={{ display: 'table-cell', textAlign: 'right', paddingRight: '1em', userSelect: 'none', opacity: '0.5' }}>{i + 1}</span>
							<span style={{ display: 'table-cell' }}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</span>
						</div>
					))}
				</pre>
			)}
		</Highlight>
	</div>
);

export default Code;


