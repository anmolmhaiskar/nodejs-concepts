// Read this before going through the code (VVVVVVVIMP)
// https://nodejs.org/en/learn/modules/anatomy-of-an-http-transaction

const http = require("node:http");

const server = http.createServer((req, res) => {
  // Server is an eventEmitter object
  // req is a readableStream object and res is a writeableStream object

  res.writeHead(200);
  res.end("Hello World!!"); // we end the stream using res.end(<message>) since res is writeableStream
  //   res.end(
  //     "<html><body style='text-align:center'><h5>Hello, World!</h5></body></html>"
  //   );

  //To send JSON data do the following

  //   const jsonResponse = {
  //     name: "Priyansh",
  //     age: 26,
  //   };

  //   res.writeHead(200, {
  //     "Content-Type": "application/json",
  //   });
  //   res.end(JSON.stringify(jsonResponse));
});

server.listen(2000, () => console.log("Server started successfully !!"));

// Breakdown of application/json
// application: This part of the media type specifies the primary type. In this case, application indicates that the content is intended to be processed by an application rather than displayed directly to the user (as opposed to text or image types).

// json: This part is the subtype, specifying that the data format is JSON. JSON is a lightweight data-interchange format that's easy for humans to read and write and easy for machines to parse and generate. It is widely used for transmitting data in web applications.

/*

Common Content-Type Values
1. Text
text/plain: Plain text.
text/html: HTML documents.
text/css: Cascading Style Sheets (CSS).
text/javascript: JavaScript files.
text/xml: XML documents.
text/csv: Comma-separated values (CSV).



2. Application
application/json: JSON format.
application/xml: XML data.
application/x-www-form-urlencoded: Form data in URL-encoded format.
application/javascript: JavaScript files.
application/pdf: PDF documents.
application/octet-stream: Binary data (default for unknown content types).
application/zip: ZIP archives.
application/vnd.api+json: JSON API format.
application/ld+json: JSON-LD (Linked Data).



3. Image
image/jpeg: JPEG images.
image/png: PNG images.
image/gif: GIF images.
image/svg+xml: SVG vector images.
image/webp: WebP images.



4. Audio
audio/mpeg: MP3 audio.
audio/wav: WAV audio.
audio/ogg: Ogg Vorbis audio.



5. Video
video/mp4: MP4 video.
video/webm: WebM video.
video/ogg: Ogg video.



6. Multipart
multipart/form-data: Form data with file uploads.
multipart/byteranges: Byte range parts of a document.
Specialized Content-Type Values



1. Font
font/woff: Web Open Font Format (WOFF).
font/woff2: Web Open Font Format (WOFF2).



2. Message
message/http: HTTP messages.
message/imdn+xml: Instant Message Disposition Notification.
message/partial: E-mail partial messages.
message/rfc822: E-mail messages.

*/
