function selectLocalImage() {

}

const quill = new Quill("#text-editor", {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline"],
      ["link", "image", "blockQuote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
    handlers: {
      image: selectLocalImage,
    },
  },
  placeholder: "Compose an epic...",
  theme: "snow", // or 'bubble'
});
