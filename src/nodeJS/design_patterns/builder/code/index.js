const AccountBuilder = require('./AccountBuilder');

/**
 * BEFORE : 
 * 
 * const BillTheManager = new Account('Bill', true, true, true, true, 15)
 * 
 * What is true, true, true, true, 15? 
 * This is called Telescoping Constructor Promblem
 */

//Accounts
const BillTheManager = new AccountBuilder('Bill')
  .makeEmployee()
  .makeManager()
  .makeActive()
  .makeAdmin()
  .giveAccessLevel(5)
  .build();

const MarkTheCallCenterAgent_level_II = new AccountBuilder('Mark')
  .makeEmployee()
  .makeActive()
  .makeAdmin()
  .giveAccessLevel(2)
  .build();

const CharlyTheCallCenterAgent_level_III = new AccountBuilder('Charlly')
  .makeEmployee()
  .makeActive()
  .makeAdmin()
  .giveAccessLevel(3)
  .build();

const FrankTheCustomer_active = new AccountBuilder('Frank')
  .saveDoctors(['PWID1', 'PWID2'])
  .makeActive()
  .build();

const SaraTheCustomer_inactive = new AccountBuilder('Sara')
  .build();
  
  console.log('SaraTheCustomer_inactive \n', SaraTheCustomer_inactive.toString());
  console.log('  ')
  console.log('FrankTheCustomer \n', FrankTheCustomer.toString());
  console.log('  ')
  console.log('CharlyTheCallCenterAgent_level_III \n', CharlyTheCallCenterAgent_level_III.toString());
  console.log('  ')
  console.log('MarkTheCallCenterAgent_level_II \n', MarkTheCallCenterAgent_level_II.toString());
  console.log('  ')
  console.log('BillTheManager \n', BillTheManager.toString());
  console.log('  ')
