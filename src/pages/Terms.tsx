import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { YANKEE_EMAIL, YANKEE_MAILTO } from "@/lib/email";

const Terms = () => (
  <Layout>
    <article className="max-w-[720px] mx-auto px-5 md:px-6 pt-10 md:pt-14 pb-20 md:pb-28">
      <p className="text-[13px] text-muted-foreground lowercase">
        <Link to="/" className="hover:text-foreground transition-colors">
          ← back to yankee
        </Link>
      </p>

      <h1 className="mt-8 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight lowercase">
        terms of service
      </h1>
      <p className="mt-3 text-[14px] text-muted-foreground">Last updated: July 23, 2026</p>

      <div className="mt-10 space-y-6 text-[15px] text-foreground/85 leading-[1.7]">
        <p>
          These Terms of Service (&quot;Terms&quot;) are an agreement between you and Yankee LLC, a
          Foretheist product (&quot;Yankee&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;). They cover your use of the Yankee website, the Yankee iOS app, and
          related services (the &quot;Service&quot;).
        </p>
        <p>
          Please read them carefully. By creating an account or using Yankee, you agree to these
          Terms. If you do not agree, do not use the Service.
        </p>
        <p>
          Our{" "}
          <Link to="/privacy" className="underline underline-offset-2 hover:text-foreground">
            Privacy Policy
          </Link>{" "}
          explains how we handle personal data and is part of how we operate the Service. Together
          with these Terms, it describes the rules for using Yankee.
        </p>

        <section className="space-y-4 pt-4">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">1. Who can use Yankee</h2>
          <p>
            You must be at least 13 years old (or the minimum age required in your country) to use
            Yankee. If you are under 18, you confirm that a parent or guardian has reviewed and agreed
            to these Terms on your behalf where that is required.
          </p>
          <p>
            You also confirm that you are not barred from using the Service under applicable law,
            and that you will provide accurate information when you create and maintain your account.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">2. Your account</h2>
          <p>
            You are responsible for your account and for everything that happens under it. Keep your
            password and login methods private. Tell us right away at{" "}
            <a href={YANKEE_MAILTO} className="underline underline-offset-2 hover:text-foreground">
              {YANKEE_EMAIL}
            </a>{" "}
            if you think someone else has accessed your account.
          </p>
          <p>
            You may not share your account, sell it, or create accounts in a misleading way (for
            example impersonating another person or entity). We may ask you to verify your identity
            or contact details if needed to protect the Service or other users.
          </p>
          <p>
            You can delete your account at any time from settings. Deletion is subject to the process
            described in our Privacy Policy.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">3. The Service</h2>
          <p>
            Yankee is a social product focused on chronological feeds, communities, memory, and
            private communication. Features may change over time. We may add, change, or remove parts
            of the Service, including experimental features, without lowering the basic idea of the
            product overnight without notice when that is practical.
          </p>
          <p>
            We do not guarantee uninterrupted or error-free access. Outages, maintenance, and device
            or network issues can affect availability.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">4. Content you post</h2>
          <p>
            You keep ownership of the content you create and post on Yankee (&quot;Your
            Content&quot;). That includes posts, comments, photos, videos, captions, community
            material, and similar material you upload or send.
          </p>
          <p>
            By posting or sharing Your Content, you give Yankee a worldwide, non-exclusive,
            royalty-free license to host, store, reproduce, distribute, and display Your Content only
            as needed to operate and improve the Service and to show it to the audiences you choose.
            This license ends when you delete Your Content or your account, except for reasonable
            residual copies in backups (which expire according to our retention practices) and copies
            that other users already saved or reshared where the product allows that.
          </p>
          <p>
            You are responsible for Your Content. You confirm that you have the rights needed to post
            it, and that it does not violate these Terms or the law. Yankee does not claim ownership
            of Your Content.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">5. Acceptable use</h2>
          <p>When using Yankee, you agree not to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Post or share illegal content, or content that exploits or harms minors</li>
            <li>Harass, threaten, stalk, or encourage violence against others</li>
            <li>Impersonate people or organizations in a misleading way</li>
            <li>Post spam, scams, malware, or deceptive commercial content</li>
            <li>Violate intellectual property, privacy, or other rights of others</li>
            <li>Attempt to access accounts, systems, or data you are not allowed to access</li>
            <li>Scrape, crawl, or harvest the Service without our written permission</li>
            <li>Interfere with or disrupt the Service, including through abuse of APIs or automation</li>
            <li>Reverse engineer the Service except where the law expressly allows it</li>
            <li>Use Yankee to build a competing product by copying non-public aspects of our systems</li>
          </ul>
          <p>
            We may remove content or limit features when we reasonably believe these rules have been
            broken, or when we need to protect users, Yankee, or third parties.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">6. Communities and private circles</h2>
          <p>
            Some features let you share with smaller groups (communities, friends and family
            circles, teams, and similar spaces). Access rules depend on how that space is set up.
            Admins or owners of a space may remove members or content according to the tools we
            provide. That does not make Yankee responsible for how members behave toward each other.
          </p>
          <p>
            Content shared in a private space may still be copied or forwarded by people who have
            access. Choose audiences carefully.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">7. Our intellectual property</h2>
          <p>
            Yankee, the Yankee name and logo, the website and app design, software, and documentation
            are owned by Yankee LLC / Foretheist or our licensors. These Terms do not give you any
            ownership rights in our brand or software. You may not copy, modify, or distribute our
            software or branding except as allowed by these Terms or with our written permission.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">8. No charges for the core product</h2>
          <p>
            There are currently no paid plans, subscriptions, or in-app charges for the core Yankee
            product. We do not sell access to basic features behind a paywall. If we ever introduce
            optional paid features, we will describe the price and terms clearly before you buy
            anything, and those purchases will be subject to additional terms if needed.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">9. Third-party services</h2>
          <p>
            Yankee may link to or rely on third-party services (for example app stores, device OS
            features, or infrastructure providers). Those services have their own terms and privacy
            policies. We are not responsible for third-party services we do not control.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">10. Suspension and termination</h2>
          <p>
            You may stop using Yankee at any time and delete your account. We may suspend or
            terminate access if you violate these Terms, if required by law, or if we need to protect
            the Service or other people. We may also discontinue the Service or parts of it. Where
            practical, we will give reasonable notice before a permanent shutdown of the product.
          </p>
          <p>
            Sections that by their nature should survive (including ownership, licenses that must
            continue for residual copies, disclaimers, and limitations of liability) will survive
            termination.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">11. Disclaimers</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available.&quot; To the fullest
            extent allowed by law, Yankee disclaims warranties of merchantability, fitness for a
            particular purpose, and non-infringement. We do not warrant that the Service will be
            uninterrupted, secure, or free of errors, or that content will always be available or
            accurate.
          </p>
          <p>
            Yankee is not responsible for what users post. Opinions and content from other users are
            theirs, not ours.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">12. Limitation of liability</h2>
          <p>
            To the fullest extent allowed by law, Yankee and its affiliates, officers, employees, and
            agents will not be liable for any indirect, incidental, special, consequential, or
            punitive damages, or for any loss of profits, data, goodwill, or other intangible losses,
            arising out of or related to your use of the Service.
          </p>
          <p>
            To the fullest extent allowed by law, our total liability for any claim arising out of
            these Terms or the Service is limited to the greater of (a) the amount you paid us for
            the Service in the 12 months before the claim (currently zero for the core product) or
            (b) one hundred U.S. dollars (US $100).
          </p>
          <p>
            Some places do not allow certain limitations. In those places, our liability is limited
            to the maximum extent permitted by law.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">13. Indemnity</h2>
          <p>
            You agree to defend and indemnify Yankee and its affiliates against claims, damages, and
            expenses (including reasonable legal fees) arising from Your Content, your use of the
            Service, or your violation of these Terms or applicable law, to the extent allowed by
            law.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">14. Changes to these Terms</h2>
          <p>
            We may update these Terms as the product and the law evolve. We will post the updated
            Terms on this page and change the &quot;Last updated&quot; date. For material changes, we
            will provide notice in the app or by email when that is practical. If you continue to use
            Yankee after the updated Terms take effect, you accept the new Terms. If you do not
            agree, stop using the Service and delete your account.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">15. Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of Delaware, USA, without regard to
            conflict-of-law rules, except where mandatory consumer protection laws in your country
            require otherwise. Courts in that jurisdiction may hear disputes, subject to any rights
            you have to bring claims in your local courts where the law requires.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">16. General</h2>
          <p>
            If any part of these Terms is found unenforceable, the rest remains in effect. Our
            failure to enforce a provision is not a waiver. These Terms are the entire agreement
            between you and Yankee about the Service and replace any prior agreements on the same
            subject. You may not assign these Terms without our consent; we may assign them in
            connection with a merger, acquisition, or sale of assets.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">17. Contact</h2>
          <p>Questions about these Terms can be sent to:</p>
          <p>
            Yankee LLC, a Foretheist product
            <br />
            Email:{" "}
            <a href={YANKEE_MAILTO} className="underline underline-offset-2 hover:text-foreground">
              {YANKEE_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </article>
  </Layout>
);

export default Terms;
