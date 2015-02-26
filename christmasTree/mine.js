function christmasTree(height) {
  var tree = '';
  var spaces = Array(height).join(' ');
  
  for (var i = 0; i < height; i++) {
    var asterisks = Array((i * 2) + 2).join('*');
    if (tree !== '') tree += '\n';
    tree += spaces + asterisks + spaces;
    spaces = spaces.slice(0, -1);
  }
  
  return tree;
}