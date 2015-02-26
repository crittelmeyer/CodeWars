function christmasTree(height) {
  var tree = [];
  for(var i = 1; i <= height; i++) {
    var spaces = " ".repeat(height - i);
    tree.push(spaces + "*".repeat((i - 1) * 2 + 1) + spaces);
  }
  return tree.join("\n");
}

String.prototype.repeat = function(n)
{
    return new Array(n+1).join(this);
}








function christmasTree(height) {
  var tree = [];
  var spaces = " ".repeat(height - 1);

  for(var i = 0; i < height; i++) {
    tree.push(spaces + "*".repeat(i * 2 + 1) + spaces);
    spaces = spaces.slice(0, -1);
  }

  return tree.join("\n");
}

String.prototype.repeat = function(n)
{
    return new Array(n+1).join(this);
}








function christmasTree(height) {
  var tree = '';
  var spaces = ' '.repeat(height - 1);
  
  for (var i = 0; i < height; i++) {
    var asterisks = Array((i * 2) + 2).join('*');
    if (tree !== '') tree += '\n';
    tree += spaces + asterisks + spaces;
    spaces = spaces.slice(0, -1);
  }
  
  return tree;
}

String.prototype.repeat = function(n)
{
    return new Array(n+1).join(this);
}









function christmasTree(height) {
  var tree = '';
  var spaces = ' '.repeat(height);
  
  for (var i = 0; i < height; i++) {
    var asterisks = Array((i * 2) + 2).join('*');
    if (tree !== '') tree += '\n';
    tree += spaces + asterisks + spaces;
    spaces = spaces.slice(0, -1);
  }
  
  return tree;
}

String.prototype.repeat = function(n)
{
    return new Array(n).join(this);
}