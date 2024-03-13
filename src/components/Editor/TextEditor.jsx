import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function TextEditor({ data, onChange }) {
  const editorConfiguration = {
    toolbar: {
      items: [
        '|',
        'heading',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'undo',
        'redo'
      ]
    },
    language: 'vi',
    image: {
      toolbar: [
        'imageTextAlternative',
        'toggleImageCaption',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    }

  };
  return (
    <>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={data}
        onChange={(event, editor) => {
          const newData = editor.getData();
          onChange(newData);
        }}
      />
    </>
  )
}