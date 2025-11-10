import Image from "next/image";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
        <section className="auth-left-section scrollbar-hide-default">
            <Link href="/" className="auth-logo">
                <Image src="/assets/icons/logo.svg" alt="Signalist Logo" width={140} height={32} className="h-8 w-auto" />
            </Link>
            <div className="pb-6 lg:pb-8 flex-1">{ children }</div>
        </section>
        <section className="auth-right-section">
          <div className="relative z-10 lg:mt-14 lg:mb-16">
            <blockquote className="auth-blockquote">
              The stock market is filled with individuals who know the price of everything, but the value of nothing.
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <cite className="auth-testimonial-author">- Philip F.</cite>
                <p className="max-md:text-xs text-gray-500">Retail Investor</p>
              </div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Image
                    key={star}
                    src="/assets/icons/star.svg"
                    alt="Star Icon"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                ))}
                <span className="max-md:text-xs text-gray-500">5.0 Rating</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image src="/assets/images/dashboard.png" alt="Dashboard Preview" width={1440} height={1150} className="auth-dashboard-preview absolute top-0" />
            </div>
          </div>
        </section>
    </main>
  )
}

export default layout;
