import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
// import {Schema} from '../schema';

export default function(
  // schematics .:ng-add
): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
