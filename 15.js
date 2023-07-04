const xmlString = `
  <books>
    <book>
      <title>Book 1</title>
      <author>Author 1</author>
    </book>
    <book>
      <title>Book 2</title>
      <author>Author 2</author>
    </book>
  </books>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

const books = xmlDoc.getElementsByTagName('book');
for (let i = 0; i < books.length; i++) {
  const title = books[i].getElementsByTagName('title')[0].textContent;
  const author = books[i].getElementsByTagName('author')[0].textContent;

  console.log(`Book ${i + 1}: ${title} by ${author}`);
}