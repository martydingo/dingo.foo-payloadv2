import { Block } from 'payload/types'
import { CodeContent } from '../Fields/Code/CodeContent'
import { CodeLanguage } from '../Fields/Code/CodeLanguage'

const CodeBlock: Block = {
    slug: "codeBlock",
    interfaceName: "Code Block",
    fields: [
        CodeLanguage,
        CodeContent
    ]
}

export default CodeBlock