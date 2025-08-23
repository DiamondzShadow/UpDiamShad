import { ArrowRight, Shield, Zap, Globe } from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Solutions</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Diamondz Shadow provides comprehensive solutions for various blockchain use cases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <Shield className="h-10 w-10 text-primary mb-6" />
          <h2 className="text-2xl font-bold mb-4">Security</h2>
          <p className="text-gray-400 mb-4">
            Diamondz Shadow employs advanced cryptographic techniques to ensure the security of transactions and smart
            contracts. The platform's consensus mechanism is designed to prevent common attack vectors and provide
            robust protection against malicious actors.
          </p>
          <ul className="space-y-2 text-gray-400 mb-6">
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
              <span>Multi-layered security architecture</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
              <span>Formal verification of critical components</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
              <span>Regular security audits and bug bounties</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <Zap className="h-10 w-10 text-primary mb-6" />
          <h2 className="text-2xl font-bold mb-4">Scalability</h2>
          <p className="text-gray-400 mb-4">
            Diamondz Shadow is designed to handle a high volume of transactions without compromising on security or
            decentralization. The platform's architecture enables horizontal scaling, allowing it to adapt to increasing
            demand.
          </p>
          <ul className="space-y-2 text-gray-400 mb-6">
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
              <span>High throughput transaction processing</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
              <span>Efficient state management</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
              <span>Layer 2 solutions for specific use cases</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-16">
        <Globe className="h-10 w-10 text-primary mb-6" />
        <h2 className="text-2xl font-bold mb-4">Interoperability</h2>
        <p className="text-gray-400 mb-4">
          Diamondz Shadow is designed to work seamlessly with other blockchain networks, enabling the free flow of
          assets and information across different platforms. This interoperability is essential for creating a connected
          blockchain ecosystem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Cross-Chain Bridges</h3>
            <p className="text-sm text-gray-400">
              Secure bridges for transferring assets between Diamondz Shadow and other blockchain networks.
            </p>
          </div>
          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Protocol Adapters</h3>
            <p className="text-sm text-gray-400">
              Standardized interfaces for interacting with different blockchain protocols.
            </p>
          </div>
          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Message Passing</h3>
            <p className="text-sm text-gray-400">
              Mechanisms for exchanging information and triggering actions across different blockchains.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
          <p className="text-gray-400 mb-6">
            Diamondz Shadow is designed to support a wide range of applications across different industries. The
            platform's flexibility and scalability make it suitable for various use cases.
          </p>
          <div className="space-y-4">
            <div className="bg-black/40 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Decentralized Finance (DeFi)</h3>
              <p className="text-sm text-gray-400">
                Lending, borrowing, trading, and asset management on a secure and efficient platform.
              </p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Non-Fungible Tokens (NFTs)</h3>
              <p className="text-sm text-gray-400">
                Creation, trading, and management of digital assets with provable ownership and scarcity.
              </p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Supply Chain Management</h3>
              <p className="text-sm text-gray-400">
                Tracking and verification of goods as they move through complex supply chains.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`// Example of a supply chain contract on Diamondz Shadow
pragma solidity ^0.8.0;

contract SupplyChain {
    enum Status { Created, InTransit, Delivered }
    
    struct Product {
        uint256 id;
        string name;
        address manufacturer;
        Status status;
        uint256 timestamp;
    }
    
    mapping(uint256 => Product) public products;
    uint256 public productCount;
    
    event ProductCreated(uint256 id, string name, address manufacturer);
    event ProductUpdated(uint256 id, Status status);
    
    function createProduct(string memory _name) public {
        productCount++;
        products[productCount] = Product(
            productCount,
            _name,
            msg.sender,
            Status.Created,
            block.timestamp
        );
        
        emit ProductCreated(productCount, _name, msg.sender);
    }
    
    function updateStatus(uint256 _id, Status _status) public {
        Product storage product = products[_id];
        product.status = _status;
        product.timestamp = block.timestamp;
        
        emit ProductUpdated(_id, _status);
    }
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
