import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from 'prism-react-renderer/themes/vsDark';

const Code = ({code}) => (
	<div className="bg-black rounded-xl border-solid border border-neutral-800 text-[13px]">
		<Highlight {...defaultProps} theme={vsDark} code={code} language="tsx">
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


