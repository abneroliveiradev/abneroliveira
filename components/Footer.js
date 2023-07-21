import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { DevIcon } from './DevIcon'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <span className="mr-1 text-gray-500 dark:text-gray-400">Built with</span>
            <div className="flex space-x-1.5">
              <Link href="https://nextjs.org?ref=abneroliveira.dev">
                <DevIcon type="NextJS" className="h-5 w-5" />
              </Link>
              <Link href="https://tailwindcss.com?ref=abneroliveira.dev">
                <DevIcon type="TailwindCSS" className="h-5 w-5" />
              </Link>
              <Link href="https://www.prisma.io?ref=abneroliveira.dev">
                <DevIcon type="Prisma" className="h-5 w-5" />
              </Link>
              <Link href="https://tc39.es/ecma262/">
                <DevIcon type="Javascript" className="h-5 w-5" />
              </Link>
              {/* <Link href="https://umami.is?ref=abneroliveira.dev" className="pl-px">
                <DevIcon type="Umami" className="h-5 w-5" />
              </Link> */}
            </div>
            <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
            <Link
              href={siteMetadata.siteRepo}
              className="text-gray-500 underline underline-offset-4 dark:text-gray-400"
            >
              <span data-umami-event="view-source">View source</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
