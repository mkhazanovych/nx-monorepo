import { libraryGenerator, componentGenerator } from '@nrwl/angular/generators';
import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { BikComponentGeneratorSchema, NormalizedSchema } from './schema';
function normalizeOptions(
  tree: Tree,
  options: BikComponentGeneratorSchema
): NormalizedSchema {
  const { projectType, root, sourceRoot } = readProjectConfiguration(
    tree,
    options.project
  );
  const projectSourceRoot = sourceRoot ?? joinPathFragments(root, 'src');

  const parsedName = options.name.split('/');
  const name = parsedName.pop();
  const namedPath = parsedName.join('/');

  const path =
    options.path ??
    joinPathFragments(
      projectSourceRoot,
      projectType === 'application' ? 'app' : 'lib',
      namedPath
    );

  return {
    ...options,
    name,
    type: options.type ?? 'component',
    changeDetection: options.changeDetection ?? 'Default',
    style: options.style ?? 'css',
    path,
    projectSourceRoot,
    projectRoot: root,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
    const templateOptions = {
      ...options,
      ...names(options.name),
      // offsetFromRoot: offsetFromRoot(options.projectRoot),
      template: ''
    };
    generateFiles(tree, path.join(__dirname, 'files'), options.path + '/' + options.name, templateOptions);
}

export default async function (tree: Tree, options: BikComponentGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  // const proj = readProjectConfiguration(tree, normalizedOptions.project)
  // await libraryGenerator(tree, normalizedOptions)
  await componentGenerator(tree, {
    ...options,
    name: normalizedOptions.name,
    project: normalizedOptions.project
  });
  // console.log('tree', tree.listChanges());

  // await remote(tree, {
  //   ...options,
  //   name: 'remote',
  //   host: 'shell',
  //   skipFormat: true,
  //   standalone: false
  // });
  // const pathToTemplateFile = joinPathFragments(
  //   joinPathFragments(normalizedOptions.path, normalizedOptions.name)
  //   , joinPathFragments(normalizedOptions.name , '.component.html')
  // );  
  // tree.delete(pathToTemplateFile);
  await addFiles(tree, normalizedOptions);
  await formatFiles(tree);


  
}
