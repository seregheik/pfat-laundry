import Link from "next/link";
import Image from "next/image";
import {auth, signIn, signOut} from "@/auth";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="">
                    <Image
                        src="/logo.png" alt="logo" width={144} height={30}></Image>
                </Link>
                <div className="flex items-center gap-5">
                    {/*using ternary operator */}
                    {session && session?.user ?
                        // this is the code for when users are signed in
                        (<>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <form action={async ()=> {
                                "use server"
                                await signOut()
                            }}>
                                <button type="submit">
                                    Sign Out
                                </button>

                            </form>
                            <Link href={`/user/${session?.user?.id}`}>
                                <span>
                                    {session?.user?.email}
                                </span>
                            </Link>
                        </>)
                        // this is the tenary operator else
                        :
                        // this is what runs when users are signed out
                        (<form action={async () => {
                            "use server"
                            await signIn("Google")
                        }}>
                            <button type="submit">Log In</button>
                        </form>)}
                </div>
            </nav>
        </header>
    )
}
export default Navbar
