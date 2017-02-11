// What this plugin does:
// 0. Input: a list of variable names to be replaced
// 1. Determine all possible one-letter variable names that haven’t been used.
// 2. Sort the one-letter variable names by whether the characters already
//    appear in the program. Reusing characters means better compression.
// 3. If the list is too short to replace all identifiers in the list, print
//    information about how to refactor the program to free more characters.
// 4. Replace variable names as long as there are characters.

module.exports = function({types: t}) {

  const listOneLetterVariableNamesVisitor = {
    Identifier(path) {
      if (path.key !== 'property' && path.node.name.length === 1) {
        this.variables.add(path.node.name);
      }
    }
  };

  const replaceVariableNamesVisitor = {
    Identifier(path) {
      if (path.key === 'property' && !path.parent.computed) {
        return;
      }
      if (path.parent.type === 'ObjectProperty' && path.key === 'key') {
        return;
      }

      if (this.variableMap.has(path.node.name)) {
        path.replaceWith(t.Identifier(this.variableMap.get(path.node.name)));
      }
    }
  };

  return {
    visitor: {
      Program(path, state) {
        const namesToReplace = state.opts.namesToReplace;
        const excludedCharacters = state.opts.excludedCharacters;

        const usedNames = new Set();
        path.traverse(listOneLetterVariableNamesVisitor, {variables: usedNames});

        let availableNames = '_$ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz'.split('');
        availableNames = availableNames.filter(name => !usedNames.has(name) && !excludedCharacters.includes(name));
        const programCode = path.hub.file.code.replace(new RegExp(namesToReplace.map(r => `\\b${r}\\b`).join('|'), 'g'), '');
        const charsInProgram = new Set(programCode.split(''));
        availableNames.sort((a, b) => charsInProgram.has(b) - charsInProgram.has(a));

        const nameMap = new Map();
        for (const name of namesToReplace) {
          if (availableNames.length === 0) {
            console.log('Warning: not all variables could be replaced because all available characters');
            console.log('         are used as variable names. Try reusing variables where possible.');
            break;
          }
          nameMap.set(name, availableNames.shift());
        }

        path.traverse(replaceVariableNamesVisitor, {variableMap: nameMap});

        console.log('Names in input:', [...usedNames.values()].join(''));
        console.log('Assigned names:', [...nameMap.values()].join(''));
        console.log('Free names:', availableNames.join(''));
      }
    }
  }
}
