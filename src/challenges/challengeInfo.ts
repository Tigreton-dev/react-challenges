export const challenge1 = `
<pre><code>/**
 * 🇬🇧
 * Given this API:
 *  - https://openlibrary.org/developers/api - Open Library API
 *
 * Create a way to input a text.
 * Use Search API with the input to list the books found.
 * We only want to show the title, first year published and,
 * finally, the cover.
 * 
 * Everything should be centered in the screen.
 * The list of books should be horizontal and scrollable. 
 * 
 * > Limit the results to 25.
 * > Can we filter books with only one Edition Count?
 * > Can we grab only the fields we need to optimize
 *   the network request?
 * > Can we debounce the fetch of the data after input to avoid
 *   firing too much requests while typing?
 */
</pre></code>
`;

export const code = `
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
