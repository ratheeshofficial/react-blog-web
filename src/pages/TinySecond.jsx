import { Grid, GridItem } from "@chakra-ui/react";
import { Editor } from "@tinymce/tinymce-react";

function TinySecond() {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  return (
    <>
      <Editor
        apiKey="YOUR_API_KEY"
        initialValue="<h2>Insert a custom HTML tag stucture in TinyMCE</h2><p>A basic example to insert tag structures in the TinyMCE editor, even with custom tags.</p><p>Press the stamp icon to insert a tag structure in the editor. Press the code icon to see the tags entered.</p><p>More information: https://www.tiny.cloud/docs/plugins/opensource/template/</a></p>"
        init={{
          height: 500,
          plugins: "template code",
          toolbar: "template code",

          // extended_valid_elements: "emstart[*],emend[*]",
          templates: [
            {
              title: "Add custom tag &lt;emstart&gt;&lt;emend&gt;",
              description:
                "Add a personal tag structure with personal tags <emstart></emstart> <emend></emend>.",
              content:
                '<p class="classname"><emstart class="openImg"></emstart>Input text<emend class="closeImg"></emend></p>',
            },
          ],
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px}",
        }}
        onEditorChange={handleEditorChange}
      />
    </>
  );
}

export default TinySecond;
