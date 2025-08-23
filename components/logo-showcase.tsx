import Image from "next/image"

export default function LogoShowcase() {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-20">
      {/* Very dramatic black border */}
      <div className="relative bg-black border-8 border-black rounded-lg p-12">
        <div className="flex justify-center mb-10">
          <div className="relative h-[400px] w-full">
            <Image
              src="https://i.ibb.co/kVSYnmNL/can-you-make-this-a-black-and-white-logo-like-a-blockchain-logo-and-add-the-words-diamondzchain-wri.png"
              alt="Diamondz Shadow Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Diamondz Shadow</h2>
          <p className="text-gray-400 text-xl">
            Revolutionizing game and movie development through blockchain technology and community governance.
          </p>
        </div>
      </div>
    </div>
  )
}
