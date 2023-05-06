import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, background } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const TinyMceEditor = () => {
  const editorRef = useRef(null);

  const log = () => {
    console.log("editorRef.current", editorRef.current);
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const toolbarButtons = [
    "undo redo | bold italic underline | alignleft aligncenter alignright | customButton | code",
  ];

  const plugins = [
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
    "code",
  ];

  const handleCustomButtonClick = (api) => {
    console.log("api", api);
    console.log("_editor", editorRef.current);

    editorRef.current.windowManager.open({
      onSubmit: (api) => {
        const usecaseData = api.getData();
        const ID = uuidv4();
        console.log("ID", ID);

        // TODO: generate id here

        editorRef.current.insertContent(`
          <usecase data-id=${ID}>
            <hr />
            <h5> Use Case - #generatedID</h5>
            <h4>${usecaseData.usecaseTitle}</h4>
          </usecase>
        `);
        console.log(api.getData());
        api.close();
      },
      title: "Dialog Title", // The dialog's title - displayed in the dialog header
      body: {
        type: "panel", // The root body type - a Panel or TabPanel
        items: [
          // A list of panel components
          {
            type: "input", // component type
            name: "usecaseTitle", // identifier
            label: "Title",
            placeholder: "Use Title",
          },
          {
            type: "textarea", // component type
            name: "content", // identifier
            label: "Content",
            placeholder: "Brief your use case",
            // disabled: true, // disabled state
            maximized: true, // grow width to take as much space as possible
          },
        ],
      },
      buttons: [
        // A list of footer buttons
        {
          onclick: (e) => {
            console.log(e);
          },
          type: "submit",
          text: "OK",
        },
      ],
    });
    console.log("Custom button clicked");
  };
  // editorRef.current.windowManager.close();
  // handleCustomButtonClick(ed.getBody().lastChild)

  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };
  return (
    <>
      <Editor
        id="template"
        apiKey="your-api-key"
        // onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          // formats: {
          //   customtag: { inline: true, classes: "custom-class" },
          // },
          menubar: true,
          plugins: plugins,
          toolbar: toolbarButtons,
          setup: (editor) => {
            editorRef.current = editor;
            // editor.windowManager.open({
            //   body: [{

            //     type: "panel",
            //   }]
            // })
            editor.ui.registry.addButton("customButton", {
              icon: "arrow",
              tooltip: "Custom Button",
              onAction: handleCustomButtonClick,
            });
          },
          extended_valid_elements: `usecase[data-id|contenteditable=false]`,
          custom_elements: "usecase",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }" +
            "pre { background-color: #f4f4f4; }",
          // content_css: "../App.css",
        }}
        onEditorChange={handleEditorChange}
      />
      <Button onClick={log} colorScheme="blue" mt="5">
        Log editor content
      </Button>
    </>
  );
};

export default TinyMceEditor;
