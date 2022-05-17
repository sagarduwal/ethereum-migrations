const {deployment} = require('../../../src/templates/contracts');
const {getContractAddress} = require('../../../src/helpers');

module.exports = deployment('ERC20Facet@0.0.5', 'ERC20Facet', [{name: 'ForwarderRegistry', value: getContractAddress('ForwarderRegistry@0.0.5')}], {
  importPath: 'node_modules/@animoca/ethereum-contracts-0.0.5/artifacts',
  deterministicDeployment: true,
  dependencies: ['ForwarderRegistry@0.0.5_deploy'],
});
