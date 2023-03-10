import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'
import { AiOutlineTwitter } from 'react-icons/ai'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src="/static/images/avatar.jpg"
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full xl:rounded-full"
              placeholder="blur"
              blurDataURL="/static/images/avatar.jpg"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">Muhammad Irsyad Aliyahya</h3>
            <div className="text-gray-500 dark:text-gray-400">Student</div>
            <div className="text-gray-500 dark:text-gray-400">SMK N 2 Depok Sleman</div>
            {/* <div className="flex flex-col pt-3">
              <a
                className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:shadow dark:text-white"
                href="https://twitter.com/messages/compose?recipient_id=4302974298&text=Hey Parth"
                data-screen-name="@lone_Musk"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineTwitter className="mr-2 mb-0.5 inline h-5 w-5" />
                Say Hi!
              </a>
            </div> */}
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
                animationDelay={300}
                animationDuration={3000}
              >
                Hello, I am Muhammad Irsyad Aliyahya, I am a student at SMK N 2 Depok, Sleman. I like to study technology, especially in {' '}
                <Link
                  
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  Web Programming.
                </Link>
              </RoughNotation>
            </p>
            <br />
            <br />
            <p className="sm:block md:hidden lg:hidden">
              I am always looking to learn new things. I am currently working on a few projects
              related to
              <span className="font-semibold">
                {' '}
               Web proggraming using Laravel and Javascript{' '}
              </span>
              At the same time I am{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#FBCFE8"
                animationDelay={1500}
                animationDuration={3000}
                multiline={true}
              >
                actively on the lookout for remote internships.
              </RoughNotation>
            </p>
            <p className="hidden md:block">
              I am always looking to learn new things. I am currently working on a few projects
              related to{' '}
              <RoughNotation
                animationDelay="1000"
                animationDuration="3000"
                type="highlight"
                color="#0ea4e9"
                strokeWidth="3"
                show={true}
              >
                <span className="text-black dark:text-white">
                 Web proggraming using Laravel and Javascript{' '}
                </span>
              </RoughNotation>
              At the same time I am{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#FBCFE8"
                animationDelay={1500}
                animationDuration={3000}
                multiline={true}
              >
                actively on the lookout for remote internships
              </RoughNotation>
            </p>
            <br />
            <p>
             I am always interested in working on new
              projects with new people. Feel free to reach out if you have anything to talk about,
              you can reach me through{' '}
              <Link
                href={'mailto:irsyadalyahya5@gmail.com'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Mail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                    </g>
                  </g>
                </svg>
              </Link>{' '}
              or{' '}
              <Link
                href={'https://api.whatsapp.com/send?phone=6289528940894&text=hi irsyad!'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Whatsapp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                    </g>
                  </g>
                </svg>
              </Link>
            </p>
            <br />

            <br />

          </div>
        </div>
        <div className="mt-10 md:pl-16">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Achievement
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
          <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">2nd Place</span>{' '}
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primary-color-500">
          <Link  className="company">
            "AWS & Sagasitas"
          </Link>
        </span>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">2021</div>
        <div className="p-2">
          <div className="flex flex-row ">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">Cloud Computing Club Competition - Regional Daerah Istimewa Yogyakarta</div>
          </div>
          {/* <div className="flex flex-row">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text2}</div>
          </div>
          <div className="items-top flex flex-row">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text3}</div>
          </div> */}
        </div>
      </div>
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">3rd Place</span>{' '}
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primary-color-500">
          <Link  className="company">
            "Festival of innovation and entrepreneurship in technology"
          </Link>
        </span>
        <br></br>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">2022</div>
        <div className="p-2">
          <div className="flex flex-row ">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">Create mobile applications for SMEs</div>
          </div>
          {/* <div className="flex flex-row">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text2}</div>
          </div>
          <div className="items-top flex flex-row">
            <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
            <div className="text-gray-500 dark:text-gray-400">{text3}</div>
          </div> */}
        </div>
      </div>
    </div>
          </div>
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
