window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    // searchParams.get() will properly handle decoding the values.
    console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
    console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
    console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
    document.querySelector('p').innerHTML = "Title: " + parsedUrl.searchParams.get('title') + "\n Text: " + 
    parsedUrl.searchParams.get('text') + "\n URL: " + parsedUrl.searchParams.get('url');
  });