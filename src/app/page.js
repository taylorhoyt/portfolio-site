import NavBar from "@/app/components/NavBar";
import Image from 'next/image';
import linkedinIcon from '/public/linkedin.svg'
import githubIcon from '/public/github.svg'
import emailIcon from '/public/email.svg'
import stackShareIcon from '/public/stackshare.svg'
import profilePic from '/public/me.jpg'
import Link from "next/link";

export default function Home() {
  return (
      <body className="bg-gradient-to-b from-theme-navy via-theme-navy to-black">
        <NavBar />

        <div className="flex justify-center">
            <h1 className="text-3xl pt-10 mobile:pt-5">Taylor Hoyt</h1>
        </div>

        <div className="flex justify-center ml-auto mr-auto w-3/4 mobile:w-4/5 desktop:p-10 mobile:pb-5 mobile:pt-5">
            <Image
                src={profilePic}
                alt="picture of me"
                className="w-2/5 mobile:w-full border-4 border-white"
            />
        </div>

        <div className="flex flex-col justify-center w-1/2 mobile:w-4/5 ml-auto mr-auto">
            <p className="indent-12">
                Howdy! I am a senior computer science major at the University of Arkansas in Fayetteville, AR. I am
                known as a hard working and detail oriented engineer and am also known to collaborate well in a team
                environment. I have intern experience with working as a backend software engineer at Walmart Global Tech,
                and as a result I have a strong knowledge of creating RESTful APIs in Spring Boot Java backend. I also
                have strong knowledge in C++, React, Next.js, Kotlin, and Python. <br/>
                <br/>
            </p>
            <p className="indent-12">
                I have an intense passion for engineering and problem solving. I love learning new languages and
                frameworks, as well as learning deployment and build processes. I eagerly await graduation in May 2024
                so that I can enter the industry and use my skills to benefit both the company and customers. <br/>
                <br/>
            </p>
            <hr/>
            <h2 className="text-center text-2xl pt-3 ml-auto mr-auto">Contact</h2>
            <div className="flex flex-row justify-between desktop:w-3/4 mobile:w-full m-auto pt-3 pb-3">
                <Link href="https://www.linkedin.com/in/taylorchoyt" target="_blank">
                    <Image src={linkedinIcon}
                           alt="linkedin"
                           className="m-auto mobile:w-3/4"
                    />
                </Link>
                <Link href="https://www.github.com/taylorhoyt" target="_blank">
                    <Image src={githubIcon}
                           alt="github"
                           className="m-auto mobile:w-3/4"
                    />
                </Link>
                <Link href="mailto:tchoyt@uark.edu">
                    <Image src={emailIcon}
                           alt="email"
                           className="m-auto mobile:w-3/4"
                    />
                </Link>
                <Link href="https://stackshare.io/taylorhoyt" target="_blank">
                    <Image src={stackShareIcon}
                           alt="stackshare"
                           className="m-auto mobile:w-3/4"
                    />
                </Link>
            </div>
        </div>
      </body>
  )
}
