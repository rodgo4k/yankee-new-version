import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { YANKEE_EMAIL, YANKEE_MAILTO } from "@/lib/email";

const Privacy = () => (
  <Layout>
    <article className="max-w-[720px] mx-auto px-5 md:px-6 pt-10 md:pt-14 pb-20 md:pb-28">
      <p className="text-[13px] text-muted-foreground lowercase">
        <Link to="/" className="hover:text-foreground transition-colors">
          ← back to yankee
        </Link>
      </p>

      <h1 className="mt-8 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight lowercase">
        privacy policy
      </h1>
      <p className="mt-3 text-[14px] text-muted-foreground">Last updated: July 23, 2026</p>

      <div className="mt-10 space-y-6 text-[15px] text-foreground/85 leading-[1.7]">
        <p>
          At Yankee, we take your privacy seriously. This policy explains what information we
          collect, why we collect it, how we use it, and what choices you have. It applies to the
          Yankee website, the Yankee iOS app, and any related services operated by Yankee LLC, a
          Foretheist product (together, &quot;Yankee&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;).
        </p>
        <p>
          We try to collect only what we need to run the product. We do not sell your personal data.
          We do not use your posts, messages, or private content to train artificial intelligence
          models. If something in this policy is unclear, email us at{" "}
          <a href={YANKEE_MAILTO} className="underline underline-offset-2 hover:text-foreground">
            {YANKEE_EMAIL}
          </a>{" "}
          and we will explain it in plain language.
        </p>

        <section className="space-y-4 pt-4">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">1. Notice</h2>
          <p>
            When we collect information that can identify you, we will tell you what we are asking
            for and why. That usually happens when you create an account, update your profile, post
            content, invite someone, or change a privacy setting. On the website we may also ask for
            permission to use cookies that are not strictly necessary.
          </p>
          <p>
            If we introduce a new use of personal data that is not covered by this policy, we will
            ask for your permission before using your data for that purpose, unless the law allows
            us to proceed without it.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">2. Your consent</h2>
          <p>
            You can choose what to share with us. Some information is required for Yankee to work
            (for example, an email address or phone number to create an account, and the content you
            decide to post). If you do not want to provide that information, you may not be able to
            use the related features.
          </p>
          <p>
            For optional data, such as marketing cookies or non-essential product emails, you can
            refuse without losing access to the core product. By creating an account or continuing to
            use Yankee after being shown this policy, you agree that we may process your information
            as described here.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">3. What we collect</h2>

          <h3 className="text-[16px] font-semibold text-foreground pt-1">3.1 Account information</h3>
          <p>When you sign up or manage your profile, we may collect:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Name, username, display name, and profile photo</li>
            <li>Email address and/or phone number</li>
            <li>Password or authentication credentials (stored in hashed form)</li>
            <li>Account settings, language, and notification preferences</li>
            <li>Contacts you choose to invite or sync, if you grant that permission</li>
          </ul>

          <h3 className="text-[16px] font-semibold text-foreground pt-1">3.2 Content you create</h3>
          <p>
            We store the content you post or share on Yankee so we can show it to the people you
            intend. This can include posts, comments, reactions, photos, videos, captions, community
            content, memory items, and drafts. Visibility depends on the audience you choose (for
            example public, followers, a community, or a private circle).
          </p>
          <p>
            Direct messages and calls are designed to be end-to-end encrypted. That means the message
            content is encrypted on your device and can be read by the intended recipients on their
            devices. Yankee does not keep a readable copy of those message contents for our own use.
            We may still store metadata needed to deliver the message (such as who sent it, when, and
            to whom).
          </p>

          <h3 className="text-[16px] font-semibold text-foreground pt-1">3.3 Usage and technical data</h3>
          <p>
            To keep the service reliable and safe, we collect limited technical and usage
            information, such as:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Device type, operating system, app version, and browser type</li>
            <li>IP address, approximate location derived from IP, and timestamps</li>
            <li>Crash logs, performance metrics, and diagnostic events</li>
            <li>Actions needed for security and abuse prevention (for example login attempts)</li>
          </ul>
          <p>
            We do not build advertising profiles from this data, and we do not sell it to data
            brokers.
          </p>

          <h3 className="text-[16px] font-semibold text-foreground pt-1">3.4 Cookies and similar technologies</h3>
          <p>
            On our website we may use cookies or local storage for signing in, remembering
            preferences, and understanding how the site is used. Essential cookies are needed for
            basic function. Optional cookies, if any, will be presented so you can accept or refuse
            them.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">4. How we use your data</h2>
          <p>We use personal data to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, operate, and improve Yankee (feeds, posts, communities, memory, reach, notifications)</li>
            <li>Authenticate you and secure your account</li>
            <li>Deliver content to the audiences you choose</li>
            <li>Send service emails (password resets, security alerts, important product notices)</li>
            <li>Respond to support requests and reports of abuse</li>
            <li>Detect spam, fraud, and violations of our terms</li>
            <li>Comply with law and enforce our agreements</li>
            <li>Understand aggregate usage so we can fix bugs and improve reliability</li>
          </ul>
          <p>
            If you opt in to product updates or newsletters, we may also email you about new
            features. You can unsubscribe at any time.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">5. Sharing and third parties</h2>
          <p>
            We do not sell your personal information. We do not share your content with advertising
            networks. We only share data when it is needed to run Yankee, when you ask us to, or when
            the law requires it.
          </p>
          <p>Typical categories of service providers include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cloud hosting and storage</li>
            <li>Email and push notification delivery</li>
            <li>Crash reporting and infrastructure monitoring</li>
            <li>Customer support tooling</li>
            <li>App distribution platforms (such as the Apple App Store)</li>
          </ul>
          <p>
            These providers process data on our instructions and are expected to protect it under
            appropriate agreements. They are not allowed to use your Yankee content for their own
            advertising.
          </p>
          <p>
            We may disclose information if required by a valid legal process (for example a court
            order or lawful request from law enforcement). Where legally allowed, we will try to
            notify you before disclosing your information.
          </p>
          <p>
            If Yankee is involved in a merger, acquisition, or asset sale, personal data may be
            transferred as part of that transaction. We will notify you before your data becomes
            subject to a different privacy policy.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">6. Storage, security, and retention</h2>
          <p>
            We store data on servers operated by us or our infrastructure providers. Where available,
            you may be able to choose a region for encrypted backups (for example EU or US). We use
            industry-standard measures such as encryption in transit (TLS), access controls, and
            hashed passwords.
          </p>
          <p>
            No method of transmission or storage is completely secure. We work to protect your data,
            but we cannot guarantee absolute security.
          </p>
          <p>
            We keep account and content data for as long as your account is active and as needed to
            provide the service. If you delete your account, we begin removing personal data from
            active systems. In most cases this completes within 30 days. Encrypted backups and
            residual copies in disaster-recovery systems may take longer to expire naturally.
          </p>
          <p>
            We may retain limited information longer when required by law, to resolve disputes, to
            prevent abuse, or to enforce our terms (for example records of a ban).
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">7. Your rights</h2>
          <p>
            Depending on where you live (including under the GDPR and similar laws), you may have
            rights to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="font-medium text-foreground">Access</strong> — ask for a copy of
              personal data we hold about you
            </li>
            <li>
              <strong className="font-medium text-foreground">Rectification</strong> — correct
              inaccurate information
            </li>
            <li>
              <strong className="font-medium text-foreground">Erasure</strong> — ask us to delete
              personal data, subject to legal limits
            </li>
            <li>
              <strong className="font-medium text-foreground">Restriction</strong> — ask us to limit
              processing in certain cases
            </li>
            <li>
              <strong className="font-medium text-foreground">Portability</strong> — receive data you
              provided in a portable format, where technically feasible
            </li>
            <li>
              <strong className="font-medium text-foreground">Objection</strong> — object to certain
              processing, including direct marketing
            </li>
            <li>
              <strong className="font-medium text-foreground">Withdraw consent</strong> — where
              processing is based on consent
            </li>
          </ul>
          <p>
            Many of these actions are available in account settings (edit profile, export, delete
            account). For anything else, email{" "}
            <a href={YANKEE_MAILTO} className="underline underline-offset-2 hover:text-foreground">
              {YANKEE_EMAIL}
            </a>
            . We aim to respond within five business days, and no later than the timeframe required
            by applicable law.
          </p>
          <p>
            If you are in the European Economic Area or UK, you may also lodge a complaint with your
            local data protection authority.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">8. Children</h2>
          <p>
            Yankee is not directed to children under 13 (or the minimum age required in your
            country). We do not knowingly collect personal information from children below that age.
            If you believe a child has created an account, contact us and we will take appropriate
            steps to delete it.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">9. International transfers</h2>
          <p>
            Yankee may process data in the United States and other countries where we or our
            providers operate. When we transfer personal data across borders, we use appropriate
            safeguards required by applicable law (such as standard contractual clauses where
            relevant).
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">10. Opting out</h2>
          <p>
            You can turn off non-essential product emails using the unsubscribe link in those
            messages, or from your notification settings. You can also disable optional permissions
            on your device (contacts, camera, microphone, notifications) at any time. Doing so may
            limit related features.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">11. Changes to this policy</h2>
          <p>
            We may update this privacy policy as Yankee changes. When we make material changes, we
            will post the updated policy here and update the &quot;Last updated&quot; date. Where
            required, we will also notify you in the app or by email before the changes take effect.
            If you do not agree with the updated policy, you should stop using Yankee and may delete
            your account.
          </p>
        </section>

        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-semibold text-foreground tracking-tight">12. Contact</h2>
          <p>
            Questions about this privacy policy, or requests to exercise your privacy rights, can be
            sent to:
          </p>
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

export default Privacy;
