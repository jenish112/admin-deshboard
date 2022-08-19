import React from 'react'
import { HtmlEditor, Image, RichTextEditorComponent, Inject, Link, QuickToolbar, Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { Header } from '../components'
import { Html } from '@syncfusion/ej2/diagrams'
import { EditorData } from '../data/dummy'

const editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData/>
        <Inject services={[Toolbar, Link, HtmlEditor, Image, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default editor