import Link from 'next/link';

export default function NavBar(){
    return(
        <div className="flex flex-row sticky top-0 h-24 w-1/2 mobile:w-full border-4 border-white bg-theme-stone-blue
                        ml-auto mr-auto">
            <div className="align-middle w-full h-full flex justify-between text-lg">
                <Link href="/" className="h-1/3 w-1/5 m-auto text-center">Home</Link>
                <Link href="/pages/projects" className="h-1/3 w-1/5 m-auto text-center">Projects</Link>
                <a href="/resume.pdf" target="_blank" className="h-1/3 w-1/5 m-auto text-center">Resume</a>
            </div>
        </div>
    );
}