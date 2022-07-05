const { deployProxy } = require('@openzeppelin/truffle-upgrades')

const Zero2HeroToken = artifacts.require('Zero2HeroToken')

module.exports = async function (deployer) {
  //   await deployProxy(Zero2HeroToken, ['zero2hero', 'Z2H'], {
  //     deployer,
  //     initializer: 'initialize',
  //   })
}
