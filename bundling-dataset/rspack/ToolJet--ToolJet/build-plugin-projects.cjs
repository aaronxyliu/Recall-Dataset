// Preserve every production plugin's clean/build tasks without Nx's emulated IPC workers.
const fs = require('node:fs');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const projects = fs.readdirSync('packages').sort().filter(name => fs.existsSync(`packages/${name}/package.json`)).map(name => ({directory:`packages/${name}`, ...JSON.parse(fs.readFileSync(`packages/${name}/package.json`))}));
const byName = new Map(projects.map(project => [project.name, project]));
const ordered = [], visiting = new Set(), visited = new Set();
function visit(project) {
  if (visited.has(project.name)) return;
  if (visiting.has(project.name)) throw Error('Cyclic plugin dependencies: ' + project.name);
  visiting.add(project.name);
  for (const name of Object.keys({...project.dependencies, ...project.devDependencies, ...project.optionalDependencies}).sort()) if (byName.has(name)) visit(byName.get(name));
  visiting.delete(project.name); visited.add(project.name); ordered.push(project);
}
for (const project of projects) {
  if (project.scripts?.build !== 'tsc -b' || project.scripts?.clean !== 'rimraf ./dist && rimraf tsconfig.tsbuildinfo') throw Error('Upstream plugin tasks changed: ' + project.name);
  visit(project);
}
if (process.argv[2] === 'plan') {
  console.log(JSON.stringify(ordered.map(project => ({name:project.name, directory:project.directory, build:project.scripts.build, clean:project.scripts.clean})), null, 2));
} else if (process.argv[2] === 'clean') {
  for (const project of ordered) for (const file of ['dist', 'tsconfig.tsbuildinfo']) fs.rmSync(path.join(project.directory, file), {recursive:true, force:true});
  console.log('Cleaned all', ordered.length, 'production plugin projects');
} else if (process.argv[2] === 'build') {
  console.log('Building all', ordered.length, 'production plugin projects in dependency order:', ordered.map(project => project.name).join(', '));
  const result = spawnSync(process.execPath, [path.resolve('node_modules/typescript/bin/tsc'), '-b', ...ordered.map(project => project.directory)], {stdio:'inherit'});
  if (result.error) throw result.error;
  process.exit(result.status ?? 1);
} else throw Error('Expected clean or build');
