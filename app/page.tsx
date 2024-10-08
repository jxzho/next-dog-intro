import styles from './styles/home.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import TypeWriter from './components/client/typewriter'

export default function Home () {
  return (
    <>
      <main className={styles.home + " p-5 text-[#333] dark:text-slate-300"}>
        <header className='header-greeting'>
          <div className='font-bold text-3xl sm:text-4xl'>
            <i className={styles['wave-hand']}></i> Hi,&nbsp;I&#39;&nbsp;m&nbsp;
          </div>
          <div className={clsx([styles.whoiam, 'whoiam text-black dark:text-slate-200'])}>
            <span className='leading-none'></span>
          </div>
        </header>

        <ul className="my-8 flex flex-col gap-y-2.5 text-sm text-gray-500">
          <li className='flex items-center gap-x-2'>
            <svg strokeLinejoin="round" viewBox="0 0 16 16" width="12" height="12" style={{ color: 'currentcolor' }}><path fillRule="evenodd" clipRule="evenodd" d="M13.2642 3.5H2.73578L8 8.01219L13.2642 3.5ZM1.5 4.41638V11.5C1.5 12.0523 1.94772 12.5 2.5 12.5H13.5C14.0523 12.5 14.5 12.0523 14.5 11.5V4.41638L8.48809 9.56944L8 9.98781L7.51191 9.56944L1.5 4.41638ZM0 2H1.5H14.5H16V3.5V11.5C16 12.8807 14.8807 14 13.5 14H2.5C1.11929 14 0 12.8807 0 11.5V3.5V2Z" fill="currentColor"></path></svg>
            junxio220@gmail.com
          </li>
          <li className='flex items-center gap-x-2'>
            <svg strokeLinejoin="round" viewBox="0 0 16 16" width="12" height="12" style={{ color: 'currentcolor' }}><path fillRule="evenodd" clipRule="evenodd" d="M11.5253 10.2634L8 13.8578L4.47471 10.2634C2.50843 8.25857 2.50843 4.99627 4.47471 2.99144C6.42507 1.00285 9.57493 1.00285 11.5253 2.99144C13.4916 4.99627 13.4916 8.25857 11.5253 10.2634ZM12.5962 11.3137L9.05051 14.9289L8 16L6.94949 14.9289L3.40381 11.3137C0.865397 8.72554 0.865399 4.52929 3.40381 1.94113C5.94222 -0.647042 10.0578 -0.647042 12.5962 1.94113C15.1346 4.52929 15.1346 8.72554 12.5962 11.3137ZM9 6.5C9 7.05228 8.55228 7.5 8 7.5C7.44772 7.5 7 7.05228 7 6.5C7 5.94772 7.44772 5.5 8 5.5C8.55228 5.5 9 5.94772 9 6.5ZM8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9Z" fill="currentColor"></path></svg>
            ShenZhen
          </li>
        </ul>

        <nav className={clsx([styles['nav-links'], 'text-[#333] dark:text-slate-200'])}>
          <a className='bg-white dark:bg-[#151B23] dark:border dark:border-solid dark:border-[#3D444E] dark:shadow-none' href="https://blog.junxio.cc" aria-label='blog' target="_blank">
            <svg strokeLinejoin="round" viewBox="0 0 16 16" width="12" height="12"><path fillRule="evenodd" clipRule="evenodd" d="M8.75 0.189331L9.28033 0.719661L15.2803 6.71966L15.8107 7.24999L15.2803 7.78032L13.7374 9.32322C13.1911 9.8696 12.3733 9.97916 11.718 9.65188L9.54863 13.5568C8.71088 15.0648 7.12143 16 5.39639 16H0.75H0V15.25V10.6036C0 8.87856 0.935237 7.28911 2.4432 6.45136L6.34811 4.28196C6.02084 3.62674 6.13039 2.80894 6.67678 2.26255L8.21967 0.719661L8.75 0.189331ZM7.3697 5.43035L10.5696 8.63029L8.2374 12.8283C7.6642 13.8601 6.57668 14.5 5.39639 14.5H2.56066L5.53033 11.5303L4.46967 10.4697L1.5 13.4393V10.6036C1.5 9.42331 2.1399 8.33579 3.17166 7.76259L7.3697 5.43035ZM12.6768 8.26256C12.5791 8.36019 12.4209 8.36019 12.3232 8.26255L12.0303 7.96966L8.03033 3.96966L7.73744 3.67677C7.63981 3.57914 7.63981 3.42085 7.73744 3.32321L8.75 2.31065L13.6893 7.24999L12.6768 8.26256Z" fill="currentColor"></path></svg>
            Blog
          </a>
          <a className='bg-white dark:bg-[#151B23] dark:border dark:border-solid dark:border-[#3D444E] dark:shadow-none;' href="https://github.com/jxzho" aria-label='github' target="_blank">
            <svg strokeLinejoin="round" viewBox="0 0 16 16" width="12" height="12"><g clipPath="url(#clip0_872_3147)">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"></path>
              </g>
              <defs>
              <clipPath id="clip0_872_3147">
              <rect width="16" height="16" fill="white"></rect>
              </clipPath>
              </defs>
            </svg>
            GitHub
          </a>
          <a className='block bg-white dark:bg-[#151B23] dark:border dark:border-solid dark:border-[#3D444E] dark:shadow-none;' aria-label='twitter' href="https://twitter.com/Rjunxio" target="_blank">
            <svg strokeLinejoin="round" viewBox="0 0 16 16" width="12" height="12"><path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z" fill="currentColor"></path></svg>
            Twitter
          </a>
          <a  className='bg-white dark:bg-[#151B23] dark:border dark:border-solid dark:border-[#3D444E] dark:shadow-none;' href="https://www.zhihu.com/people/xioxio96" aria-label='zhihu' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32">
              <path fill='currentColor'  d="M 30.628906 8.9882812 C 30.263281 9.0304687 29.699219 9.1992188 29.699219 9.1992188 C 29.699219 9.1992188 21.499609 10.099219 18.099609 10.199219 C 18.199609 10.699219 18.500391 11.099219 18.900391 11.199219 C 19.600391 11.299219 20.100391 11.199219 21.400391 11.199219 C 22.600391 11.099219 23.599219 11.099609 24.199219 11.099609 L 24.199219 16 L 18 16 C 18 16 18.099219 17.199219 19.199219 17.199219 L 24.199219 17.199219 L 24.199219 20.599609 C 24.199219 21.299609 23.7 21.699219 23 21.699219 C 22.3 21.699219 21.8 21.599609 21 21.599609 C 21.1 21.799609 21.200391 22.299219 21.900391 22.699219 C 22.400391 22.899219 22.699219 23 23.199219 23 C 24.699219 23 25.5 22.099219 25.5 20.699219 L 25.5 17.199219 L 31.599609 17.199219 C 31.999609 17.199219 32.000391 15.999609 31.900391 16.099609 L 25.400391 16.099609 L 25.400391 11.199219 C 25.600391 11.199219 26 11.099609 26.5 11.099609 C 28.6 10.999609 30.000391 10.699219 30.900391 10.699219 C 30.900391 10.699219 31.500391 9.3 30.900391 9 C 30.850391 8.975 30.750781 8.9742188 30.628906 8.9882812 z M 3.3007812 9 C 3.3007813 9 2.0992188 8.9996094 1.6992188 10.099609 C 1.5992187 10.499609 0.9 12.100391 0 13.900391 C 0.3 13.900391 1.2007812 13.800781 1.8007812 12.800781 C 1.9007813 12.500781 2.2007812 12.300391 2.3007812 11.900391 L 3.8007812 11.900391 C 3.8007813 12.400391 3.6992188 15.500781 3.6992188 15.800781 L 1.0996094 15.800781 C 0.49960937 15.800781 0.30078125 17 0.30078125 17 L 3.5 17 C 3.3 19.4 2.1 21.100781 0 22.800781 C 1 23.100781 1.9996094 22.800391 2.5996094 22.400391 C 2.5996094 22.400391 3.8003906 21.499609 4.4003906 19.099609 L 6.9003906 22 C 6.9003906 22 7.3007812 20.6 6.8007812 20 C 6.4007813 19.5 5.5996094 18.599219 5.0996094 18.199219 L 4.4003906 18.800781 C 4.6003906 18.100781 4.8007812 17.7 4.8007812 17 L 8 17 C 8 17 7.9996094 15.800781 7.5996094 15.800781 L 4.9003906 15.800781 C 5.0003906 14.500781 5 13.000391 5 11.900391 L 7.4003906 11.900391 C 7.4003906 11.900391 7.5 10.800781 7 10.800781 L 2.5996094 10.800781 C 2.7996094 10.100781 3.0007813 9.7 3.3007812 9 z M 9 11 L 9 22 L 10.199219 22 L 10.599609 23.300781 L 12.699219 22 L 15 22 L 15 11 L 9 11 z M 29.287109 12.177734 C 29.118359 12.187109 28.950781 12.250391 28.800781 12.400391 L 27 14.800781 L 28 15.5 C 29.1 14.2 30.300781 12.599609 30.300781 12.599609 C 30.300781 12.599609 29.793359 12.149609 29.287109 12.177734 z M 10.199219 12.199219 L 13.699219 12.199219 L 13.699219 20.800781 L 12.5 20.800781 L 11.099609 21.699219 L 10.800781 20.800781 L 10.199219 20.800781 L 10.199219 12.199219 z M 20.128906 12.347656 C 19.707031 12.319531 19.199219 12.599609 19.199219 12.599609 C 19.199219 12.599609 21.200781 15.4 21.300781 15.5 L 22.300781 14.800781 C 22.300781 14.800781 21 13 20.5 12.5 C 20.4 12.4 20.269531 12.357031 20.128906 12.347656 z"></path>
            </svg>
          </a>
        </nav>

        <nav className={styles['nav-links-inner']}>
          <ul>
            <li>
              <Link href={'/projects'}>
                Projects
                <svg strokeLinejoin="round" viewBox="0 0 16 16" width="12" height="12"><path fillRule="evenodd" clipRule="evenodd" d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z" fill="currentColor"></path></svg>
              </Link>
            </li>

            <li>
              <Link href="/resume" data-notion-link="https://junxio.notion.site/e96e3a8a0c6d4553b523c6a0847a2acb">
                Resume
                <svg strokeLinejoin="round" viewBox="0 0 16 16" width="12" height="12"><path fillRule="evenodd" clipRule="evenodd" d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z" fill="currentColor"></path></svg>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <div className={styles.author}>© 2024 Junxio.</div>
      <TypeWriter
        selector='.header-greeting >.whoiam >span'
        words={[
          'Junxio(俊雄).',
          'a FE developer.',
          'a life explorer.'
        ]}
      />
    </>
  )
}
