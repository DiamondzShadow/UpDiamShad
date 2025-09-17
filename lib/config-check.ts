import { validateContracts } from './contracts';

export function checkMarketplaceConfiguration() {
  console.log('🔍 Checking NFT Marketplace Configuration...\n');
  
  // Check contract configuration
  const contractIssues = validateContracts();
  if (contractIssues.length > 0) {
    console.log('❌ Contract Configuration Issues:');
    contractIssues.forEach(issue => console.log(`   - ${issue}`));
  } else {
    console.log('✅ Contract configuration looks good');
  }
  
  // Check environment variables
  const envIssues: string[] = [];
  
  if (!process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID) {
    envIssues.push('NEXT_PUBLIC_THIRDWEB_CLIENT_ID is missing');
  }
  
  if (envIssues.length > 0) {
    console.log('\n❌ Environment Variable Issues:');
    envIssues.forEach(issue => console.log(`   - ${issue}`));
  } else {
    console.log('✅ Environment variables configured');
  }
  
  // Summary
  const totalIssues = contractIssues.length + envIssues.length;
  if (totalIssues === 0) {
    console.log('\n🎉 Marketplace is ready to use!');
    console.log('\nNext steps:');
    console.log('1. Deploy your NFT collection contract');
    console.log('2. Update NFT_COLLECTION address in lib/contracts.ts');
    console.log('3. Test minting, listing, and buying workflow');
  } else {
    console.log(`\n⚠️  Found ${totalIssues} configuration issues that need to be resolved.`);
  }
  
  return { contractIssues, envIssues, totalIssues };
}
