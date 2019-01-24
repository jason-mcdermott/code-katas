//  CHALLENGE:
//
//  Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to 
//  their corresponding HTML entities.

function convertHTML(str) {
    var temp = str.split('');
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case '<':
          temp[i] = '&lt;';
          break;
        case '&':
          temp[i] = '&amp;';
          break;
        case '>':
          temp[i] = '&gt;';
          break;
        case '"':
          temp[i] = '&quot;';
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    return temp.join('');
}
  
console.log(convertHTML("<>")); // should return &​lt;&​gt;.
console.log(convertHTML("abc")); // should return abc.
console.log(convertHTML("Dolce & Gabbana")); // should return Dolce &amp; Gabbana
console.log(convertHTML("Sixty > twelve")); // should return Sixty &​gt; twelve.
console.log(convertHTML("Schindler's List")); // should return Schindler&​apos;s List.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML('Stuff in "quotation marks"')); // should return Stuff in &​quot;quotation marks&​quot;.