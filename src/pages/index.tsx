import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ThirdwebProvider,
  localWallet,
  smartWallet,
  magicLink,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
} from "@thirdweb-dev/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-5 pt-24 text-center ${inter.className}`}
    >
      <div className="radial-gradient absolute blur-3xl rounded-full opacity-10 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 z-0 h-64 w-1/2 top-8 left-1/4 " />

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Wallet Connect Buttons
      </h1>

      <p className="leading-7 mt-6 text-xl">
        A demonstration of the various options available for connecting to, or
        creating user wallets.
      </p>

      <div className="flex flex-col items-center justify-center mt-24 w-full sm:w-2/3">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Try it out
        </h2>

        <p className="leading-7 mt-6 text-md">
          Navigate through the tabs below to see the options in action.
        </p>

        <Tabs defaultValue="local" className="z-10 mt-4">
          <TabsList>
            <TabsTrigger value="local">Local Wallet</TabsTrigger>
            <TabsTrigger value="local-and-smart">
              Local Wallet + Smart Wallet
            </TabsTrigger>
            <TabsTrigger value="service">
              Non-custodial service wallet
            </TabsTrigger>
            <TabsTrigger value="browser">Browser wallets</TabsTrigger>
            <TabsTrigger value="safe">Safe Wallet</TabsTrigger>
            <TabsTrigger value="smart">Smart Wallet</TabsTrigger>
          </TabsList>

          {/* Local Wallet */}
          <TabsContent value="local">
            <Card>
              <ThirdwebProvider
                activeChain="mumbai"
                theme="dark"
                supportedWallets={[localWallet()]}
              >
                <CardHeader className="justify-start">
                  <CardTitle className="text-left">Local Wallet</CardTitle>
                  <CardDescription className="pt-1 text-left pb-1 flex-wrap max-w-2xl">
                    Generate a wallet, and encrypt the private key in local
                    storage. The password used to encrypt the private key is
                    what is used to decrypt it. The user can export the wallet
                    at any time.
                  </CardDescription>
                  <div className="text-sm text-muted-foreground text-left pb-3 flex-wrap max-w-xl">
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Pro: </strong>Seamless onboarding experience.
                      </li>
                      <li>
                        <b>Con: </b>Easy to lose access to the wallet if local
                        storage is deleted.
                      </li>
                    </ul>
                  </div>
                  <CardDescription className="pt-1 text-left">
                    <ConnectWallet />
                  </CardDescription>
                </CardHeader>
              </ThirdwebProvider>
            </Card>
          </TabsContent>

          {/* Local Wallet as EOA for Generated Smart Wallet */}
          <TabsContent value="local-and-smart">
            <Card>
              <ThirdwebProvider
                activeChain="mumbai"
                theme="dark"
                supportedWallets={[
                  smartWallet({
                    factoryAddress:
                      "0x05c5870f911FC2077d4abEA68BDfD0E6C1763652", // https://thirdweb.com/mumbai/0x05c5870f911FC2077d4abEA68BDfD0E6C1763652
                    gasless: true,
                    thirdwebApiKey:
                      "8a4719688317c7bfbce9bc19c905dd31727dca421e471abe1fb1a2ec958f6148283b1003938163ae97dce2b2a11e843a5e293b13c6309e710aa2541e2dbc1297",
                    personalWallets: [localWallet()],
                  }),
                ]}
              >
                <CardHeader className="justify-start">
                  <CardTitle className="text-left">
                    Local Wallet as a signer for Smart Wallet
                  </CardTitle>
                  <CardDescription className="pt-1 text-left pb-1 flex-wrap max-w-2xl">
                    Generate a wallet, and encrypt the private key in local
                    storage. The password used to encrypt the private key is
                    what is used to decrypt it. The user can export the wallet
                    at any time. The generated EOA wallet is used as the signer
                    for a generated EIP-4337 Account abstraction smart wallet.
                    The user can update/change the signer of the smart wallet.
                  </CardDescription>
                  <div className="text-sm text-muted-foreground text-left pb-3 flex-wrap max-w-xl">
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Pro: </strong>Seamless onboarding experience.
                      </li>
                      <li>
                        <strong>Pro: </strong>Can change the signer of the smart
                        wallet to another wallet.
                      </li>
                      <li>
                        <strong>Con: </strong>Easy to lose access to the EOA
                        wallet if local storage is deleted.
                      </li>
                    </ul>
                  </div>
                  <CardDescription className="pt-1 text-left">
                    <ConnectWallet />
                  </CardDescription>
                </CardHeader>
              </ThirdwebProvider>
            </Card>
          </TabsContent>

          {/* Non-custodial service wallet */}
          <TabsContent value="service">
            <Card>
              <ThirdwebProvider
                activeChain="mumbai"
                theme="dark"
                supportedWallets={[
                  magicLink({
                    apiKey: "pk_live_151F12DF754A79CE",
                  }),
                ]}
              >
                <CardHeader className="justify-start">
                  <CardTitle className="text-left">
                    Non-custodial wallet from a service
                  </CardTitle>
                  <CardDescription className="pt-1 text-left pb-1 flex-wrap max-w-2xl">
                    Using a service such as{" "}
                    <a
                      href="https://magic.link/"
                      className="font-semibold underline"
                      target="_blank"
                    >
                      Magic Link
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://docs.withpaper.com/reference/embedded-wallet-service-overview"
                      className="font-semibold underline"
                      target="_blank"
                    >
                      Paper Wallet
                    </a>
                    , the user ties their social media account / email address /
                    phone number to a wallet that is generated for them. Using
                    the same &ldquo;web2&rdquo; login method, they can then
                    re-connect to the same wallet from any device at a later
                    time.
                  </CardDescription>
                  <div className="text-sm text-muted-foreground text-left pb-3 flex-wrap max-w-xl">
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Pro: </strong>Familiar web2 onboarding
                        experience.
                      </li>
                      <li>
                        <strong>Pro: </strong>Private keys cannot be
                        reconstructed by the service.
                      </li>
                      <li>
                        <strong>Con: </strong>Dependency on third party service
                        to access wallet (unless exported).
                      </li>
                    </ul>
                  </div>
                  <CardDescription className="pt-1 text-left">
                    <ConnectWallet />
                  </CardDescription>
                </CardHeader>
              </ThirdwebProvider>
            </Card>
          </TabsContent>

          {/* Browser Wallets */}
          <TabsContent value="browser">
            <Card>
              <ThirdwebProvider
                activeChain="mumbai"
                theme="dark"
                supportedWallets={[
                  metamaskWallet(),
                  coinbaseWallet(),
                  walletConnect(),
                ]}
              >
                <CardHeader className="justify-start">
                  <CardTitle className="text-left">Browser Wallets</CardTitle>
                  <CardDescription className="pt-1 text-left pb-1 flex-wrap max-w-2xl">
                    Browser extension and mobile applications that create EOA
                    wallets that only you know the private key of, such as
                    MetaMask.
                  </CardDescription>
                  <div className="text-sm text-muted-foreground text-left pb-3 flex-wrap max-w-xl">
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Pro: </strong>You are the only holder of the
                        private key.
                      </li>
                      <li>
                        <strong>Pro: </strong>Can change the signer of the smart
                        wallet to another wallet.
                      </li>
                      <li>
                        <strong>Con: </strong>Single point of failure; no
                        recovery from loss/compromisation of private key.
                      </li>
                      <li>
                        <strong>Con: </strong>Requires user to install
                        complicated software to use.
                      </li>
                    </ul>
                  </div>
                  <CardDescription className="pt-1 text-left">
                    <ConnectWallet />
                  </CardDescription>
                </CardHeader>
              </ThirdwebProvider>
            </Card>
          </TabsContent>

          {/* Safe Multi-sig Wallet (formerly Gnosis) */}
          <TabsContent value="safe">
            <Card>
              <ThirdwebProvider
                activeChain="mumbai"
                theme="dark"
                supportedWallets={[safeWallet()]}
              >
                <CardHeader className="justify-start">
                  <CardTitle className="text-left">
                    Safe Wallets (multi-sig)
                  </CardTitle>
                  <CardDescription className="pt-1 text-left pb-1 flex-wrap max-w-2xl">
                    Smart contract wallets that require multiple signatures to
                    execute a transaction.
                  </CardDescription>
                  <div className="text-sm text-muted-foreground text-left pb-3 flex-wrap max-w-xl">
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Pro: </strong>Multiple signers required to send
                        a transaction.
                      </li>
                      <li>
                        <strong>Pro: </strong>Recoverable if one private key is
                        lost.
                      </li>
                      <li>
                        <strong>Con: </strong>Very complicated for new users.
                        Requires knowledge of wallets and smart contracts.
                      </li>
                    </ul>
                  </div>
                  <CardDescription className="pt-1 text-left">
                    <ConnectWallet />
                  </CardDescription>
                </CardHeader>
              </ThirdwebProvider>
            </Card>
          </TabsContent>

          {/* Smart Wallet - Account Abstraction EIP4337 */}
          <TabsContent value="smart">
            <Card>
              <ThirdwebProvider
                activeChain="mumbai"
                theme="dark"
                supportedWallets={[
                  smartWallet({
                    factoryAddress:
                      "0x05c5870f911FC2077d4abEA68BDfD0E6C1763652", // https://thirdweb.com/mumbai/0x05c5870f911FC2077d4abEA68BDfD0E6C1763652
                    gasless: true,
                    thirdwebApiKey:
                      "8a4719688317c7bfbce9bc19c905dd31727dca421e471abe1fb1a2ec958f6148283b1003938163ae97dce2b2a11e843a5e293b13c6309e710aa2541e2dbc1297",
                  }),
                ]}
              >
                <CardHeader className="justify-start">
                  <CardTitle className="text-left">
                    Smart Wallets (EIP-4337 Account Abstraction)
                  </CardTitle>
                  <CardDescription className="pt-1 text-left pb-1 flex-wrap max-w-2xl">
                    Smart contract wallets that can have any custom
                    functionality.
                  </CardDescription>
                  <CardDescription className="text-left pb-3 flex-wrap max-w-2xl">
                    <a
                      className="font-semibold underline"
                      href="https://blog.jarrodwatts.com/what-is-account-abstraction-and-how-does-eip-4337-work"
                    >
                      Read my full blog post on EIP-4337 Account abstraction
                    </a>
                  </CardDescription>
                  <CardDescription className="pt-1 text-left">
                    <ConnectWallet />
                  </CardDescription>
                </CardHeader>
              </ThirdwebProvider>
            </Card>
          </TabsContent>
        </Tabs>

        <a
          href="https://github.com/jarrodwatts/wallets"
          target="_blank"
          className="text-md text-muted-foreground mt-8 underline semibold"
        >
          View the source code on GitHub.
        </a>
      </div>
    </main>
  );
}
