import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, background } from "@chakra-ui/react";

const TinyMceEditor = () => {
  const editorRef = useRef(null);
  const log = () => {
    console.log("editorRef.current", editorRef.current);
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="your-api-key"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic underline strikethrough | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | " +
            "link unlink image media | " +
            "table | " +
            "forecolor backcolor removeformat | " +
            "code | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }" +
            "pre { background-color: #f4f4f4; }",
          // content_css: "../App.css",
        }}
      />
      <Button onClick={log} colorScheme="blue" mt="5">
        Log editor content
      </Button>
    </>
  );
};

export default TinyMceEditor;
