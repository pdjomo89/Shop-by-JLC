export const LANGS = [
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "de", label: "DE", name: "Deutsch" },
];

export const DEFAULT_LANG = "en";

export const dict = {
  en: {
    nav: {
      howItWorks: "How it works",
      pricing: "Pricing",
      faq: "FAQ",
      aiCoach: "AI Coach",
      news: "News",
      contact: "Contact",
      signIn: "Sign in",
      startFree: "Start free",
    },
    hero: {
      badge: "KPI-first SaaS for physical, retail, hybrid & production businesses",
      headlinePart1: "Know in less than 90 seconds if your business is",
      headlinePart2: "truly profitable.",
      paragraph:
        "ShopByJLC turns your daily numbers into the few KPIs that actually matter — so you can stop guessing and start running a profitable shop, workshop, or hybrid business.",
      ctaPrimary: "Start free — no card required",
      ctaSecondary: "See how it works",
      stats: [
        { k: "90s", v: "to your real margin" },
        { k: "1 dashboard", v: "everything in one view" },
        { k: "0 spreadsheets", v: "drop the manual mess" },
      ],
    },
    howItWorks: {
      title: "How it works",
      subtitle:
        "From raw daily numbers to a clear picture of profitability — in four simple steps.",
      steps: [
        {
          title: "Connect your business",
          body: "Plug in your point of sale, accounting tool, or simply enter your revenue and costs. We support retail, production, and hybrid setups.",
        },
        {
          title: "Pick the KPIs that matter",
          body: "Margin, cash conversion, break-even point, cost per unit produced — choose the indicators that fit your business model.",
        },
        {
          title: "Get your 90-second verdict",
          body: "A clean dashboard tells you if you're truly profitable, where the leaks are, and what to fix this week.",
        },
        {
          title: "Decide and act",
          body: "Receive weekly recommendations and alerts so your numbers move in the right direction — without spreadsheet gymnastics.",
        },
      ],
    },
    news: {
      badge: "What's new",
      title: "Latest updates from ShopByJLC",
      subtitle:
        "Product launches, improvements, and announcements you should know about.",
      items: [
        {
          tag: "Launch",
          tone: "brand",
          date: "Apr 2026",
          title: "Mobile Money checkout for Cameroon",
          body: "Subscribe to any plan with MTN or Orange Mobile Money. Card payments via Stripe still work in every country.",
        },
        {
          tag: "New",
          tone: "accent",
          date: "Mar 2026",
          title: "ShopByJLC Coach goes live",
          body: "Ask your numbers anything, in plain language. The AI coach now lives on the homepage — no signup needed to try it.",
        },
        {
          tag: "Update",
          tone: "brand",
          date: "Feb 2026",
          title: "Production & workshop KPIs",
          body: "Track cost per unit, scrap rate, and margin per produced item. Designed for bakeries, tailors, makers and repair shops.",
        },
      ],
    },
    audience: {
      title: "Built for the businesses you actually run",
      subtitle:
        "Whether you sell behind a counter, build in a workshop, or do both — ShopByJLC speaks your numbers.",
      items: [
        {
          title: "Retail shops",
          body: "Boutiques, convenience stores, specialty shops. Track daily revenue, margin per category, and which week paid off.",
        },
        {
          title: "Workshops & production",
          body: "Bakeries, tailors, makers, repair shops. Watch cost per unit, scrap rate, and the margin behind every piece you produce.",
        },
        {
          title: "Hybrid businesses",
          body: "Cafés, salons, and shops that also sell services. See revenue split, mix performance, and break-even across both sides.",
        },
      ],
    },
    agent: {
      badge: "AI · ShopByJLC Coach",
      title: "Ask your numbers anything",
      subtitle:
        "A live AI coach that turns your KPIs into a clear answer — try it right here, no signup needed.",
      benefitsTitle: "What it does",
      benefits: [
        {
          title: "Spot the leaks",
          body: "Ask 'where am I leaking margin?' and get a focused list of what to check this week.",
        },
        {
          title: "Translate your numbers",
          body: "No accounting jargon. Just the few KPIs that decide whether you're profitable.",
        },
        {
          title: "Decide your next move",
          body: "Get one concrete action — pricing tweak, product mix, cost cut — instead of more dashboards.",
        },
      ],
      poweredBy: "Powered by Claude. Replies are general guidance, not financial advice.",
      chatTitle: "ShopByJLC Coach",
      reset: "New conversation",
      intro:
        "Hi — I'm your ShopByJLC Coach. Tell me about your shop or pick a question to start.",
      tryLabel: "Try one of these",
      quickPrompts: [
        "Am I making money this month?",
        "Where am I leaking margin?",
        "What should I focus on this week?",
        "Help me set my prices",
      ],
      inputPlaceholder: "Ask about your KPIs, margins, pricing…",
      send: "Send",
      disclaimer: "AI responses can be wrong. Cross-check important decisions.",
    },
    pricing: {
      title: "Simple pricing that scales with you",
      subtitle: "Start with a 21-day free trial — card required, cancel anytime. Prices in EUR, taxes excluded.",
      perMonth: "/ month",
      mostPopular: "Most popular",
      trialBadge: "21-day free trial · cancel anytime",
      trialNoteMobile: "Mobile Money plans are billed immediately (no trial).",
      tiers: [
        {
          name: "Trial",
          price: "0 €",
          description: "Temporary access to ShopByJLC's advanced features.",
          features: [
            "1 business",
            "5 users",
            "3 AI agents included",
          ],
          cta: "Start free trial",
        },
        {
          name: "Starter",
          price: "9.99 €",
          description: "For a small business that wants to track sales, stock, and profitability.",
          features: [
            "1 business",
            "2 users",
            "1 AI agent included",
          ],
          cta: "Start with Starter",
        },
        {
          name: "Pro",
          price: "19.99 €",
          description: "Run your business with advanced reports and essential AI agents.",
          features: [
            "1 business",
            "5 users",
            "3 AI agents included",
          ],
          cta: "Choose Pro",
        },
        {
          name: "Business / Team",
          price: "39.99 €",
          description: "Manage multiple businesses, a team, and more automation.",
          features: [
            "1 business",
            "15 users",
            "5 AI agents included",
          ],
          cta: "Choose Business",
        },
        {
          name: "Enterprise",
          price: "79.99 €",
          description: "For advanced organizations with onboarding, integrations, and tailored AI.",
          features: [
            "1 business included at launch",
            "Priority onboarding",
            "Custom AI agents",
          ],
          cta: "Choose Enterprise",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      subtitle: "Everything you might wonder before you start.",
      items: [
        {
          q: "Who is ShopByJLC for?",
          a: "Owners of physical businesses, retail shops, hybrid businesses (sales + services), and production businesses who want to know — quickly and without spreadsheets — whether they're truly profitable.",
        },
        {
          q: "Do I need accounting knowledge to use it?",
          a: "No. We translate your numbers into a few simple KPIs and a clear verdict. If you can fill in your daily revenue and main costs, you can use ShopByJLC.",
        },
        {
          q: 'What does "in less than 90 seconds" actually mean?',
          a: 'Once your data is connected or entered, your dashboard renders the key profitability indicators in seconds. The promise is: a clear answer to "am I making money?" in under 90 seconds.',
        },
        {
          q: "Can I cancel my subscription at any time?",
          a: "Yes. All plans are month-to-month. Upgrade, downgrade, or cancel anytime — no long-term commitment.",
        },
        {
          q: "Is there a free trial?",
          a: "Yes. You can start free without entering a card. When you're ready, pick the plan that matches your size and needs.",
        },
        {
          q: "Is my data safe?",
          a: "Your business data is encrypted in transit and at rest. We never sell your data, and you can export or delete it at any time.",
        },
      ],
    },
    pages: {
      howItWorks: {
        eyebrow: "How it works",
        title: "From raw daily numbers to a clear profit verdict",
        subtitle:
          "Four simple steps to turn what you already know about your business into the few KPIs that decide profitability.",
        metaTitle: "How ShopByJLC works — 4 steps to your real margin",
        metaDescription:
          "Connect your data, pick the right KPIs, get a 90-second profitability verdict, and act on weekly recommendations.",
      },
      aiCoach: {
        eyebrow: "AI Coach",
        title: "Ask your numbers anything",
        subtitle:
          "A live AI coach that turns your KPIs into a clear answer — try it right here, no signup needed.",
        metaTitle: "ShopByJLC Coach — AI for your shop's profitability",
        metaDescription:
          "Ask the ShopByJLC AI coach about margin leaks, pricing, and what to focus on this week. No signup needed to try.",
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Plans built around your business size",
        subtitle:
          "Start with a 21-day free trial — no commitment. Pick the plan that matches your shop, workshop, or hybrid setup.",
        metaTitle: "Pricing — ShopByJLC plans & 21-day free trial",
        metaDescription:
          "Simple monthly plans for retail, production, and hybrid businesses. 21-day free trial, cancel anytime.",
      },
      news: {
        eyebrow: "News",
        title: "Latest from ShopByJLC",
        subtitle:
          "Product launches, improvements, and announcements you should know about.",
        metaTitle: "News & product updates — ShopByJLC",
        metaDescription:
          "What's new at ShopByJLC: launches, improvements, and announcements for retail and production businesses.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Frequently asked questions",
        subtitle:
          "Answers to what customers ask before signing up — pricing, data, trials, and how the 90-second profitability check works.",
        metaTitle: "FAQ — ShopByJLC",
        metaDescription:
          "Answers about ShopByJLC: who it's for, the free trial, your data, and how the 90-second profitability check works.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Talk to the ShopByJLC team",
        subtitle:
          "Demos, questions, or a tricky business model? Send us a note and we'll get back within one business day.",
        metaTitle: "Contact ShopByJLC",
        metaDescription:
          "Reach the ShopByJLC team for demos, questions, or a tailored setup. We reply within one business day.",
      },
      about: {
        eyebrow: "About",
        title: "Built so small business owners can finally see their numbers",
        subtitle:
          "A small team obsessed with one question: is this business making money? ShopByJLC turns daily revenue and costs into the few KPIs that actually answer it.",
        metaTitle: "About ShopByJLC",
        metaDescription:
          "Why ShopByJLC exists, what we believe, and who is building it.",
        body: [
          {
            heading: "The problem we kept seeing",
            paragraphs: [
              "Most shop, workshop, and hybrid business owners we talked to had the same blind spot: they knew their daily revenue, they had a rough idea of their costs, but they couldn't say with confidence whether the month was actually profitable. Spreadsheets piled up, accounting software answered different questions, and the simple verdict — \"am I making money?\" — stayed out of reach.",
              "ShopByJLC exists to close that gap. We turn the numbers a business already produces into the few KPIs that decide profitability, fast enough that checking your real margin becomes a daily habit instead of a year-end exercise.",
            ],
          },
          {
            heading: "What we believe",
            paragraphs: [
              "Clarity beats sophistication. Three KPIs you actually look at are worth more than thirty you ignore.",
              "Speed matters. A 90-second answer changes behavior; a 90-minute report doesn't.",
              "Your data is yours. We never sell it, and you can export or delete it whenever you want.",
            ],
          },
          {
            heading: "Who's building it",
            paragraphs: [
              "ShopByJLC is built by Jean-Loïc Cyriaque (the J·L·C in the name) with a small distributed team across Cameroon and Europe. We come from retail, software engineering, and finance, and we use ShopByJLC ourselves on the side businesses that taught us how badly this tool was missing.",
            ],
          },
        ],
      },
      careers: {
        eyebrow: "Careers",
        title: "Help us build the simplest profit dashboard",
        subtitle:
          "We're a small, distributed team. Roles open up rarely — but we always want to hear from people who care about small-business profitability.",
        metaTitle: "Careers at ShopByJLC",
        metaDescription:
          "We're not actively hiring, but we're open to introductions from people who care about small-business profitability and craft.",
        body: [
          {
            heading: "Where we are",
            paragraphs: [
              "ShopByJLC is a small distributed team across Cameroon and Europe. We work in English, French, and German. We move quickly, ship narrow features, and listen closely to real shop owners.",
            ],
          },
          {
            heading: "Open roles",
            paragraphs: [
              "There are no open roles right now. When we hire, we usually look for people with real exposure to retail or production businesses, plus craft in either product, engineering, or design.",
            ],
          },
          {
            heading: "Reach out anyway",
            paragraphs: [
              "If you'd be a great fit and want us to keep your details on file, email careers@shopbyjlc.com with a short note and a link to something you've shipped or written.",
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "Privacy",
        title: "Privacy policy",
        subtitle: "How we collect, use, and protect your information at ShopByJLC.",
        metaTitle: "Privacy policy — ShopByJLC",
        metaDescription:
          "How ShopByJLC handles your data: what we collect, how we use it, and your rights under GDPR.",
        updatedAt: "May 2, 2026",
        body: [
          {
            heading: "Who we are",
            paragraphs: [
              "ShopByJLC (\"we\", \"us\") provides a profitability-tracking SaaS for retail, production, and hybrid businesses. This policy explains what we do with personal information you give us when you visit our website, contact us, or subscribe.",
            ],
          },
          {
            heading: "What we collect",
            paragraphs: [
              "Account information you provide directly: name, email, business name, language preference, and — if you subscribe — billing details handled by our payment processors.",
              "Usage data: pages visited, basic device and browser info, and rough geographic region derived from your IP. We do not use third-party advertising trackers.",
              "Business KPIs you choose to enter or connect: revenue, costs, and the categories you set up. This data is yours.",
            ],
          },
          {
            heading: "How we use it",
            paragraphs: [
              "To provide the service: rendering your dashboard, sending account emails, processing subscriptions, and supporting you when you reach out.",
              "To improve the product: aggregated, anonymized analytics on which features are used.",
              "To meet legal obligations: invoicing, tax records, fraud prevention.",
            ],
          },
          {
            heading: "Who we share it with",
            paragraphs: [
              "We use a small number of subprocessors strictly to operate the service: Stripe (card payments), Campay (mobile money in Cameroon), Convex (database), Resend (transactional email), and Anthropic (AI coach). Each is contractually bound to handle your data only to provide their service to us.",
              "We never sell your data, and we never share it for advertising purposes.",
            ],
          },
          {
            heading: "Your rights",
            paragraphs: [
              "If you are in the EU, UK, or Switzerland, GDPR gives you the right to access, correct, export, or delete the personal data we hold about you, and to object to certain uses. Other jurisdictions grant similar rights.",
              "To exercise any of these rights, email info@shopbyjlc.com — we'll respond within 30 days.",
            ],
          },
          {
            heading: "Retention",
            paragraphs: [
              "We keep account data while your account is active, and for up to 12 months after closure to handle billing and legal questions. Server logs are kept for up to 90 days.",
            ],
          },
          {
            heading: "Contact",
            paragraphs: [
              "Questions about this policy? Email info@shopbyjlc.com or use the contact page.",
            ],
          },
        ],
      },
      terms: {
        eyebrow: "Terms",
        title: "Terms of service",
        subtitle: "The agreement between you and ShopByJLC when you use our service.",
        metaTitle: "Terms of service — ShopByJLC",
        metaDescription:
          "Terms covering subscriptions, the 21-day free trial, cancellation, acceptable use, and liability for ShopByJLC.",
        updatedAt: "May 2, 2026",
        body: [
          {
            heading: "Acceptance",
            paragraphs: [
              "By creating an account, starting a free trial, or using ShopByJLC, you agree to these terms. If you don't agree, please don't use the service.",
            ],
          },
          {
            heading: "The service",
            paragraphs: [
              "ShopByJLC is a profitability-tracking SaaS for shops, workshops, and hybrid businesses. We provide dashboards, KPIs, and an AI coach. Specific features and limits depend on your plan.",
            ],
          },
          {
            heading: "Free trial and billing",
            paragraphs: [
              "When you pick a plan, we collect a payment method up front and grant a 21-day free trial. We will not charge you during the trial. On day 21, we automatically bill the recurring monthly fee unless you cancel before then.",
              "After the trial, plans renew monthly. Prices are in EUR (taxes excluded) unless noted. We may change prices with at least 30 days' notice.",
            ],
          },
          {
            heading: "Cancellation and refunds",
            paragraphs: [
              "You can cancel any time from your account or by emailing us. Cancellation takes effect at the end of the current billing period — you keep access until then.",
              "We don't generally refund partial months, but if something is clearly wrong, contact us and we'll make it right.",
            ],
          },
          {
            heading: "Acceptable use",
            paragraphs: [
              "Don't use ShopByJLC to break the law, infringe rights, send spam, or attempt to disrupt the service. Don't share your account, and keep your credentials safe.",
            ],
          },
          {
            heading: "Liability",
            paragraphs: [
              "ShopByJLC is provided \"as is\". KPI insights and AI coach replies are guidance, not financial advice — important business decisions should be cross-checked. To the maximum extent permitted by law, our total liability is capped at the fees you paid us in the 12 months before the claim.",
            ],
          },
          {
            heading: "Changes",
            paragraphs: [
              "We may update these terms. Material changes will be announced by email or in the product at least 30 days before they take effect.",
            ],
          },
          {
            heading: "Contact",
            paragraphs: [
              "Questions? Email info@shopbyjlc.com or use the contact page.",
            ],
          },
        ],
      },
      cookies: {
        eyebrow: "Cookies",
        title: "Cookie policy",
        subtitle: "What we store on your device and why.",
        metaTitle: "Cookie policy — ShopByJLC",
        metaDescription:
          "The small set of cookies and local-storage values ShopByJLC uses, and how to opt out.",
        updatedAt: "May 2, 2026",
        body: [
          {
            heading: "What cookies are",
            paragraphs: [
              "Cookies and similar technologies like local storage are small bits of data a website saves on your device so it can remember things between visits.",
            ],
          },
          {
            heading: "What we use",
            paragraphs: [
              "Essential only. We store your language preference (EN/FR/DE) in your browser's local storage so the site loads in your language next time. We don't run advertising, behavioral tracking, or third-party analytics on this site.",
            ],
          },
          {
            heading: "Third-party services",
            paragraphs: [
              "When you use the AI coach or open Stripe Checkout, those services may set their own cookies for security and session management. They are governed by their own policies (anthropic.com, stripe.com).",
            ],
          },
          {
            heading: "How to opt out",
            paragraphs: [
              "Because we only use essential storage, there's nothing to opt out of from us. You can clear cookies and local storage at any time in your browser settings — your language will reset to default until you pick it again.",
            ],
          },
          {
            heading: "Contact",
            paragraphs: [
              "Questions? Email info@shopbyjlc.com.",
            ],
          },
        ],
      },
      updatedLabel: "Last updated",
    },
    contact: {
      title: "Get in touch",
      subtitle: "Questions, demos, or a tricky business model — we'd love to hear from you.",
      detailsTitle: "Reach the team",
      detailsSubtitle: "Pick the channel that fits, we'll come back fast.",
      emailHeading: "Email us",
      responseHeading: "Average response",
      responseBody: "Within one business day, often sooner.",
      hoursHeading: "Office hours",
      hoursBody: "Monday – Friday, 9:00 – 18:00 (CET / WAT)",
      nameLabel: "Your name",
      emailLabel: "Email",
      subjectLabel: "Subject",
      subjectPlaceholder: "What's this about?",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your shop, your numbers, what you'd like to track…",
      submit: "Send message",
      sending: "Sending…",
      success: "Thanks — your message is on its way. We'll get back to you shortly.",
      error: "Something went wrong. Please try again or email us directly.",
      privacyNote: "We only use your details to reply. No spam, no sharing.",
    },
    checkout: {
      title: "Complete your subscription",
      close: "Close",
      back: "Back",
      done: "Done",
      tryAgain: "Try again",
      choosePaymentMethod: "Choose a payment method",
      payWithCard: "Credit / debit card",
      cardSubtitle: "All countries · Stripe",
      payWithMobile: "Mobile Money (Cameroon)",
      emailLabel: "Email",
      emailLabelOptional: "Email (optional)",
      operatorLabel: "Operator",
      phoneLabel: "Phone number",
      continueToPayment: "Continue to payment",
      redirecting: "Redirecting…",
      payNow: "Pay now",
      processing: "Processing…",
      checkPhone: "Check your phone",
      checkPhoneHint: "Approve the payment request you received on your mobile money app, then wait a few seconds.",
      referenceLabel: "Reference",
      success: "Payment received",
      successDetails: "Your subscription is being activated. We just sent you a confirmation.",
      stripeFooter: "You'll be redirected to Stripe's secure checkout. Your card is required to start the 21-day free trial. We won't charge you until the trial ends — cancel anytime before then.",
      campayFooter: "We'll send a payment request to your phone. You confirm with your mobile money PIN.",
      errors: {
        timeout: "Payment timed out. Please try again.",
        declined: "Payment was declined or cancelled.",
      },
    },
    footer: {
      tagline: "KPI-first SaaS for retail, hybrid, and production businesses. Real profitability,",
      taglineHighlight: "in under 90 seconds.",
      ctaPrimary: "Start free",
      ctaSecondary: "Talk to us",
      cols: {
        product: "Product",
        company: "Company",
        legal: "Legal",
      },
      links: {
        howItWorks: "How it works",
        pricing: "Pricing",
        faq: "FAQ",
        about: "About",
        contact: "Contact",
        careers: "Careers",
        privacy: "Privacy",
        terms: "Terms",
        cookies: "Cookies",
      },
      rights: "All rights reserved.",
      madeForLead: "Made for",
      madeForShops: "shops",
      madeForWorkshops: "workshops",
      madeForRest: "& hybrid businesses.",
    },
  },

  fr: {
    nav: {
      howItWorks: "Comment ça marche",
      pricing: "Tarifs",
      faq: "FAQ",
      aiCoach: "Coach IA",
      news: "Actualités",
      contact: "Contact",
      signIn: "Connexion",
      startFree: "Essai gratuit",
    },
    hero: {
      badge: "SaaS axé KPI pour commerces physiques, magasins, activités hybrides et de production",
      headlinePart1: "Sachez en moins de 90 secondes si votre entreprise est",
      headlinePart2: "vraiment rentable.",
      paragraph:
        "ShopByJLC transforme vos chiffres quotidiens en quelques KPI vraiment utiles — pour arrêter de deviner et piloter une boutique, un atelier ou une activité hybride réellement rentable.",
      ctaPrimary: "Commencer gratuitement — sans carte",
      ctaSecondary: "Voir comment ça marche",
      stats: [
        { k: "90s", v: "pour votre vraie marge" },
        { k: "1 tableau de bord", v: "tout en une vue" },
        { k: "0 tableur", v: "fini la gestion manuelle" },
      ],
    },
    howItWorks: {
      title: "Comment ça marche",
      subtitle:
        "Des chiffres quotidiens bruts à une vision claire de votre rentabilité — en quatre étapes simples.",
      steps: [
        {
          title: "Connectez votre activité",
          body: "Branchez votre caisse, votre logiciel comptable, ou saisissez simplement votre chiffre d'affaires et vos coûts. Compatible commerce, production et activités hybrides.",
        },
        {
          title: "Choisissez les KPI qui comptent",
          body: "Marge, conversion de trésorerie, seuil de rentabilité, coût unitaire produit — sélectionnez les indicateurs adaptés à votre modèle.",
        },
        {
          title: "Obtenez votre verdict en 90 secondes",
          body: "Un tableau de bord clair vous dit si vous êtes vraiment rentable, où sont les fuites et quoi corriger cette semaine.",
        },
        {
          title: "Décidez et agissez",
          body: "Recevez des recommandations et alertes hebdomadaires pour faire évoluer vos chiffres dans le bon sens — sans gymnastique sur tableur.",
        },
      ],
    },
    news: {
      badge: "Quoi de neuf",
      title: "Dernières actualités ShopByJLC",
      subtitle:
        "Lancements, améliorations et annonces à ne pas manquer.",
      items: [
        {
          tag: "Lancement",
          tone: "brand",
          date: "Avr. 2026",
          title: "Paiement Mobile Money pour le Cameroun",
          body: "Abonnez-vous à n'importe quel plan via MTN ou Orange Mobile Money. Le paiement par carte Stripe reste disponible partout dans le monde.",
        },
        {
          tag: "Nouveau",
          tone: "accent",
          date: "Mars 2026",
          title: "Le Coach ShopByJLC est en ligne",
          body: "Posez toutes vos questions à vos chiffres en langage simple. Le coach IA est désormais sur la page d'accueil — sans inscription.",
        },
        {
          tag: "Mise à jour",
          tone: "brand",
          date: "Févr. 2026",
          title: "KPI production & atelier",
          body: "Suivez le coût unitaire, le taux de rebut et la marge par pièce produite. Pensé pour boulangeries, couturiers, artisans et réparateurs.",
        },
      ],
    },
    audience: {
      title: "Pensé pour les activités que vous gérez vraiment",
      subtitle:
        "Que vous vendiez derrière un comptoir, fabriquiez en atelier, ou les deux — ShopByJLC parle vos chiffres.",
      items: [
        {
          title: "Commerces de détail",
          body: "Boutiques, supérettes, magasins spécialisés. Suivez le chiffre quotidien, la marge par catégorie et la semaine qui rapporte.",
        },
        {
          title: "Ateliers & production",
          body: "Boulangeries, couturiers, artisans, réparation. Surveillez le coût unitaire, le taux de rebut et la marge derrière chaque pièce produite.",
        },
        {
          title: "Activités hybrides",
          body: "Cafés, salons, boutiques qui proposent aussi des services. Visualisez la répartition du CA, la performance du mix et le seuil de rentabilité.",
        },
      ],
    },
    agent: {
      badge: "IA · ShopByJLC Coach",
      title: "Posez toutes vos questions à vos chiffres",
      subtitle:
        "Un coach IA en direct qui transforme vos KPI en réponse claire — essayez-le ici, sans inscription.",
      benefitsTitle: "Ce qu'il fait",
      benefits: [
        {
          title: "Repérer les fuites",
          body: "Demandez « où je perds de la marge ? » et obtenez une liste précise à vérifier cette semaine.",
        },
        {
          title: "Traduire vos chiffres",
          body: "Pas de jargon comptable. Juste les KPI qui décident si vous êtes rentable.",
        },
        {
          title: "Décider la prochaine action",
          body: "Une action concrète — tarif, mix produit, coût — plutôt que plus de tableaux de bord.",
        },
      ],
      poweredBy:
        "Propulsé par Claude. Les réponses sont des pistes générales, pas un conseil financier.",
      chatTitle: "ShopByJLC Coach",
      reset: "Nouvelle conversation",
      intro:
        "Bonjour — je suis votre ShopByJLC Coach. Parlez-moi de votre activité ou choisissez une question pour démarrer.",
      tryLabel: "Essayez une de ces questions",
      quickPrompts: [
        "Est-ce que je gagne de l'argent ce mois-ci ?",
        "Où je perds de la marge ?",
        "Sur quoi je dois me concentrer cette semaine ?",
        "Aide-moi à fixer mes prix",
      ],
      inputPlaceholder: "Posez une question sur vos KPI, marges, tarifs…",
      send: "Envoyer",
      disclaimer: "Les réponses IA peuvent se tromper. Vérifiez les décisions importantes.",
    },
    pricing: {
      title: "Une tarification simple qui grandit avec vous",
      subtitle: "Démarrez avec 21 jours d'essai gratuit — carte requise, annulez à tout moment. Prix en EUR, hors taxes.",
      perMonth: "/ mois",
      mostPopular: "Le plus populaire",
      trialBadge: "Essai gratuit 21 jours · annulation à tout moment",
      trialNoteMobile: "Les abonnements en Mobile Money sont prélevés immédiatement (sans essai).",
      tiers: [
        {
          name: "Trial",
          price: "0 €",
          description: "Accès temporaire aux fonctionnalités avancées de ShopByJLC.",
          features: [
            "1 business",
            "5 utilisateurs",
            "3 agents IA inclus",
          ],
          cta: "Démarrer l'essai",
        },
        {
          name: "Starter",
          price: "9,99 €",
          description: "Pour une petite activité qui veut suivre ventes, stock et rentabilité.",
          features: [
            "1 business",
            "2 utilisateurs",
            "1 agent IA inclus",
          ],
          cta: "Démarrer avec Starter",
        },
        {
          name: "Pro",
          price: "19,99 €",
          description: "Pour piloter son business avec rapports avancés et agents IA essentiels.",
          features: [
            "1 business",
            "5 utilisateurs",
            "3 agents IA inclus",
          ],
          cta: "Choisir Pro",
        },
        {
          name: "Business / Team",
          price: "39,99 €",
          description: "Pour gérer plusieurs activités, une équipe et plus d'automatisations.",
          features: [
            "1 business",
            "15 utilisateurs",
            "5 agents IA inclus",
          ],
          cta: "Choisir Business",
        },
        {
          name: "Enterprise",
          price: "Dès 79,99 €",
          description: "Pour les structures avancées avec accompagnement, intégrations et IA sur mesure.",
          features: [
            "1 business inclus au lancement",
            "Accompagnement prioritaire",
            "Agents IA sur mesure",
          ],
          cta: "Contacter l'équipe",
        },
      ],
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "Tout ce que vous pourriez vous demander avant de commencer.",
      items: [
        {
          q: "À qui s'adresse ShopByJLC ?",
          a: "Aux dirigeants de commerces physiques, magasins, activités hybrides (vente + services) et entreprises de production qui veulent savoir — vite et sans tableur — s'ils sont vraiment rentables.",
        },
        {
          q: "Faut-il des connaissances en comptabilité ?",
          a: "Non. Nous traduisons vos chiffres en quelques KPI simples et un verdict clair. Si vous savez renseigner votre chiffre d'affaires et vos principaux coûts, vous pouvez utiliser ShopByJLC.",
        },
        {
          q: "Que veut dire « en moins de 90 secondes » ?",
          a: "Dès vos données connectées ou saisies, votre tableau de bord affiche les indicateurs clés en quelques secondes. La promesse : une réponse claire à « est-ce que je gagne de l'argent ? » en moins de 90 secondes.",
        },
        {
          q: "Puis-je annuler mon abonnement à tout moment ?",
          a: "Oui. Tous les plans sont mensuels. Vous pouvez monter en gamme, redescendre ou annuler quand vous voulez — sans engagement long.",
        },
        {
          q: "Y a-t-il un essai gratuit ?",
          a: "Oui. Vous pouvez commencer gratuitement sans saisir de carte. Quand vous êtes prêt, choisissez le plan qui correspond à votre taille et à vos besoins.",
        },
        {
          q: "Mes données sont-elles en sécurité ?",
          a: "Vos données sont chiffrées en transit et au repos. Nous ne vendons jamais vos données, et vous pouvez les exporter ou les supprimer à tout moment.",
        },
      ],
    },
    pages: {
      howItWorks: {
        eyebrow: "Comment ça marche",
        title: "Des chiffres quotidiens à un verdict clair sur votre rentabilité",
        subtitle:
          "Quatre étapes simples pour transformer ce que vous savez déjà sur votre activité en quelques KPI qui décident de la rentabilité.",
        metaTitle: "Comment ShopByJLC fonctionne — 4 étapes vers votre vraie marge",
        metaDescription:
          "Connectez vos données, choisissez les bons KPI, obtenez un verdict en 90 secondes, et passez à l'action chaque semaine.",
      },
      aiCoach: {
        eyebrow: "Coach IA",
        title: "Posez toutes vos questions à vos chiffres",
        subtitle:
          "Un coach IA en direct qui transforme vos KPI en réponse claire — essayez-le ici, sans inscription.",
        metaTitle: "Coach ShopByJLC — l'IA au service de votre rentabilité",
        metaDescription:
          "Demandez au coach IA ShopByJLC où vous perdez de la marge, comment fixer vos prix, et sur quoi vous concentrer cette semaine.",
      },
      pricing: {
        eyebrow: "Tarifs",
        title: "Des plans adaptés à la taille de votre activité",
        subtitle:
          "Démarrez avec 21 jours d'essai gratuit, sans engagement. Choisissez le plan qui correspond à votre boutique, atelier ou activité hybride.",
        metaTitle: "Tarifs — ShopByJLC, essai gratuit 21 jours",
        metaDescription:
          "Plans mensuels simples pour commerces, production et activités hybrides. Essai gratuit 21 jours, annulation à tout moment.",
      },
      news: {
        eyebrow: "Actualités",
        title: "Les dernières nouvelles de ShopByJLC",
        subtitle:
          "Lancements, améliorations et annonces à ne pas manquer.",
        metaTitle: "Actualités produit — ShopByJLC",
        metaDescription:
          "Quoi de neuf chez ShopByJLC : lancements, améliorations et annonces pour les commerces et la production.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions fréquentes",
        subtitle:
          "Les réponses aux questions les plus posées avant de s'inscrire — tarifs, données, essai gratuit, et comment fonctionne le verdict en 90 secondes.",
        metaTitle: "FAQ — ShopByJLC",
        metaDescription:
          "Réponses sur ShopByJLC : à qui ça s'adresse, l'essai gratuit, vos données, et le verdict de rentabilité en 90 secondes.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Parlez à l'équipe ShopByJLC",
        subtitle:
          "Démo, question, ou modèle d'activité particulier ? Écrivez-nous, nous répondons sous un jour ouvré.",
        metaTitle: "Contact — ShopByJLC",
        metaDescription:
          "Joignez l'équipe ShopByJLC pour une démo, une question ou une configuration sur mesure. Réponse sous 1 jour ouvré.",
      },
      about: {
        eyebrow: "À propos",
        title: "Pour que les commerçants voient enfin clair dans leurs chiffres",
        subtitle:
          "Une petite équipe obsédée par une question : cette activité gagne-t-elle de l'argent ? ShopByJLC transforme votre chiffre d'affaires et vos coûts quotidiens en quelques KPI qui répondent vraiment.",
        metaTitle: "À propos de ShopByJLC",
        metaDescription:
          "Pourquoi ShopByJLC existe, ce en quoi nous croyons, et qui est derrière le projet.",
        body: [
          {
            heading: "Le problème que nous voyions partout",
            paragraphs: [
              "La plupart des commerçants, artisans et activités hybrides à qui nous avons parlé avaient le même angle mort : ils connaissaient leur chiffre d'affaires quotidien, ils avaient une idée de leurs coûts, mais ils ne savaient pas dire avec confiance si le mois était rentable. Les tableurs s'empilaient, la comptabilité répondait à d'autres questions, et le verdict simple — « est-ce que je gagne de l'argent ? » — restait hors de portée.",
              "ShopByJLC existe pour combler ce vide. Nous transformons les chiffres que votre activité produit déjà en quelques KPI qui décident de la rentabilité — assez vite pour que vérifier votre vraie marge devienne une habitude quotidienne.",
            ],
          },
          {
            heading: "Ce en quoi nous croyons",
            paragraphs: [
              "La clarté avant la sophistication. Trois KPI que vous regardez vraiment valent mieux que trente que vous ignorez.",
              "La vitesse compte. Une réponse en 90 secondes change le comportement ; un rapport de 90 minutes, non.",
              "Vos données sont à vous. Nous ne les vendons jamais, et vous pouvez les exporter ou les supprimer à tout moment.",
            ],
          },
          {
            heading: "Qui construit ShopByJLC",
            paragraphs: [
              "ShopByJLC est construit par Jean-Loïc Cyriaque (le J·L·C du nom) avec une petite équipe répartie entre le Cameroun et l'Europe. Nous venons du commerce, de l'ingénierie logicielle et de la finance, et nous utilisons ShopByJLC sur les activités annexes qui nous ont fait comprendre à quel point cet outil manquait.",
            ],
          },
        ],
      },
      careers: {
        eyebrow: "Carrières",
        title: "Aidez-nous à construire le tableau de bord de profit le plus simple",
        subtitle:
          "Nous sommes une petite équipe distribuée. Les postes s'ouvrent rarement — mais nous voulons toujours échanger avec des personnes qui se soucient de la rentabilité des petites entreprises.",
        metaTitle: "Carrières chez ShopByJLC",
        metaDescription:
          "Nous ne recrutons pas activement, mais nous restons ouverts aux échanges avec des personnes passionnées par la rentabilité des petites entreprises.",
        body: [
          {
            heading: "Où nous sommes",
            paragraphs: [
              "ShopByJLC est une petite équipe distribuée entre le Cameroun et l'Europe. Nous travaillons en anglais, en français et en allemand. Nous avançons vite, nous livrons des fonctionnalités précises, et nous écoutons les vrais commerçants.",
            ],
          },
          {
            heading: "Postes ouverts",
            paragraphs: [
              "Aucun poste ouvert pour l'instant. Quand nous recrutons, nous cherchons des personnes ayant une vraie expérience du commerce ou de la production, avec un savoir-faire en produit, ingénierie ou design.",
            ],
          },
          {
            heading: "Écrivez-nous quand même",
            paragraphs: [
              "Si vous pensez correspondre et souhaitez que nous gardions vos coordonnées, écrivez à careers@shopbyjlc.com avec un mot et un lien vers quelque chose que vous avez livré ou écrit.",
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "Confidentialité",
        title: "Politique de confidentialité",
        subtitle: "Comment nous collectons, utilisons et protégeons vos informations.",
        metaTitle: "Politique de confidentialité — ShopByJLC",
        metaDescription:
          "Comment ShopByJLC traite vos données : ce que nous collectons, comment nous l'utilisons, et vos droits au titre du RGPD.",
        updatedAt: "2 mai 2026",
        body: [
          {
            heading: "Qui nous sommes",
            paragraphs: [
              "ShopByJLC (« nous ») fournit un SaaS de suivi de rentabilité pour commerces, ateliers et activités hybrides. Cette politique explique ce que nous faisons des informations personnelles que vous nous donnez lorsque vous visitez notre site, nous contactez ou souscrivez.",
            ],
          },
          {
            heading: "Ce que nous collectons",
            paragraphs: [
              "Les informations de compte que vous fournissez : nom, e-mail, nom de l'activité, langue, et — en cas d'abonnement — les coordonnées de paiement traitées par nos prestataires.",
              "Des données d'usage : pages visitées, informations basiques d'appareil et de navigateur, et zone géographique approximative à partir de votre IP. Pas de traceurs publicitaires tiers.",
              "Les KPI que vous saisissez ou connectez : chiffre d'affaires, coûts, catégories. Ces données sont à vous.",
            ],
          },
          {
            heading: "Comment nous l'utilisons",
            paragraphs: [
              "Pour fournir le service : afficher votre tableau de bord, envoyer les e-mails de compte, traiter les abonnements et vous accompagner.",
              "Pour améliorer le produit : analytics anonymisées et agrégées sur les fonctionnalités utilisées.",
              "Pour respecter nos obligations légales : facturation, comptabilité, prévention de la fraude.",
            ],
          },
          {
            heading: "Avec qui nous partageons",
            paragraphs: [
              "Nous utilisons un petit nombre de sous-traitants strictement pour opérer le service : Stripe (cartes), Campay (mobile money au Cameroun), Convex (base de données), Resend (e-mail transactionnel) et Anthropic (coach IA). Chacun est contractuellement tenu de ne traiter vos données que pour nous fournir son service.",
              "Nous ne vendons jamais vos données et ne les partageons jamais à des fins publicitaires.",
            ],
          },
          {
            heading: "Vos droits",
            paragraphs: [
              "Si vous êtes dans l'UE, au Royaume-Uni ou en Suisse, le RGPD vous donne le droit d'accéder, corriger, exporter ou supprimer les données personnelles que nous détenons, et de vous opposer à certains usages. D'autres juridictions accordent des droits similaires.",
              "Pour exercer ces droits, écrivez à info@shopbyjlc.com — nous répondons sous 30 jours.",
            ],
          },
          {
            heading: "Conservation",
            paragraphs: [
              "Les données de compte sont conservées tant que votre compte est actif, et jusqu'à 12 mois après sa fermeture pour traiter la facturation et les questions légales. Les journaux serveur sont conservés jusqu'à 90 jours.",
            ],
          },
          {
            heading: "Contact",
            paragraphs: [
              "Des questions sur cette politique ? Écrivez à info@shopbyjlc.com ou via la page contact.",
            ],
          },
        ],
      },
      terms: {
        eyebrow: "Conditions",
        title: "Conditions d'utilisation",
        subtitle: "L'accord entre vous et ShopByJLC lorsque vous utilisez notre service.",
        metaTitle: "Conditions d'utilisation — ShopByJLC",
        metaDescription:
          "Conditions couvrant les abonnements, l'essai gratuit de 21 jours, l'annulation, l'usage acceptable et la responsabilité.",
        updatedAt: "2 mai 2026",
        body: [
          {
            heading: "Acceptation",
            paragraphs: [
              "En créant un compte, en démarrant un essai gratuit ou en utilisant ShopByJLC, vous acceptez ces conditions. Si vous n'êtes pas d'accord, n'utilisez pas le service.",
            ],
          },
          {
            heading: "Le service",
            paragraphs: [
              "ShopByJLC est un SaaS de suivi de rentabilité pour boutiques, ateliers et activités hybrides. Nous fournissons des tableaux de bord, des KPI et un coach IA. Les fonctionnalités et limites dépendent de votre plan.",
            ],
          },
          {
            heading: "Essai gratuit et facturation",
            paragraphs: [
              "Lorsque vous choisissez un plan, nous collectons un moyen de paiement et accordons 21 jours d'essai gratuit. Aucun prélèvement pendant l'essai. Au 21ᵉ jour, le tarif mensuel est prélevé automatiquement, sauf annulation avant.",
              "Après l'essai, les plans se renouvellent mensuellement. Les prix sont en EUR (hors taxes) sauf indication contraire. Nous pouvons modifier les prix avec un préavis d'au moins 30 jours.",
            ],
          },
          {
            heading: "Annulation et remboursements",
            paragraphs: [
              "Vous pouvez annuler à tout moment depuis votre compte ou par e-mail. L'annulation prend effet à la fin de la période en cours — vous gardez l'accès jusque-là.",
              "Nous ne remboursons pas les mois partiels en règle générale, mais si quelque chose cloche, écrivez-nous et nous arrangerons cela.",
            ],
          },
          {
            heading: "Usage acceptable",
            paragraphs: [
              "Pas d'usage illégal, pas d'atteinte aux droits, pas de spam, pas de tentative de perturbation du service. Ne partagez pas votre compte et gardez vos identifiants en sécurité.",
            ],
          },
          {
            heading: "Responsabilité",
            paragraphs: [
              "ShopByJLC est fourni « tel quel ». Les indicateurs et les réponses du coach IA sont des pistes, pas un conseil financier — les décisions importantes doivent être recoupées. Dans les limites permises par la loi, notre responsabilité totale est plafonnée aux frais payés au cours des 12 mois précédant la réclamation.",
            ],
          },
          {
            heading: "Modifications",
            paragraphs: [
              "Nous pouvons faire évoluer ces conditions. Toute modification importante sera annoncée par e-mail ou dans le produit au moins 30 jours avant son entrée en vigueur.",
            ],
          },
          {
            heading: "Contact",
            paragraphs: [
              "Des questions ? Écrivez à info@shopbyjlc.com ou via la page contact.",
            ],
          },
        ],
      },
      cookies: {
        eyebrow: "Cookies",
        title: "Politique de cookies",
        subtitle: "Ce que nous stockons sur votre appareil et pourquoi.",
        metaTitle: "Politique de cookies — ShopByJLC",
        metaDescription:
          "Le petit ensemble de cookies et de stockage local utilisé par ShopByJLC, et comment refuser.",
        updatedAt: "2 mai 2026",
        body: [
          {
            heading: "Ce que sont les cookies",
            paragraphs: [
              "Les cookies et technologies similaires (comme le stockage local) sont de petits fragments de données qu'un site enregistre sur votre appareil pour se souvenir de certaines préférences entre les visites.",
            ],
          },
          {
            heading: "Ce que nous utilisons",
            paragraphs: [
              "Strictement nécessaire. Nous stockons votre langue (EN/FR/DE) dans le stockage local de votre navigateur pour que le site se charge dans votre langue à la prochaine visite. Pas de publicité, pas de pistage comportemental, pas d'analytics tiers sur ce site.",
            ],
          },
          {
            heading: "Services tiers",
            paragraphs: [
              "Lorsque vous utilisez le coach IA ou ouvrez Stripe Checkout, ces services peuvent déposer leurs propres cookies pour la sécurité et les sessions. Ils sont régis par leurs propres politiques (anthropic.com, stripe.com).",
            ],
          },
          {
            heading: "Comment refuser",
            paragraphs: [
              "Comme nous n'utilisons que du stockage essentiel, il n'y a rien à refuser de notre côté. Vous pouvez vider à tout moment les cookies et le stockage local depuis les réglages de votre navigateur — votre langue reviendra à la valeur par défaut jusqu'à ce que vous la rechoisissiez.",
            ],
          },
          {
            heading: "Contact",
            paragraphs: [
              "Des questions ? Écrivez à info@shopbyjlc.com.",
            ],
          },
        ],
      },
      updatedLabel: "Dernière mise à jour",
    },
    contact: {
      title: "Nous contacter",
      subtitle:
        "Questions, démo, ou un modèle d'activité particulier — écrivez-nous, on vous répond vite.",
      detailsTitle: "Joindre l'équipe",
      detailsSubtitle: "Choisissez le canal qui vous convient, on revient vers vous rapidement.",
      emailHeading: "Par e-mail",
      responseHeading: "Délai de réponse",
      responseBody: "Sous un jour ouvré, souvent plus tôt.",
      hoursHeading: "Horaires",
      hoursBody: "Lundi – Vendredi, 9h00 – 18h00 (CET / WAT)",
      nameLabel: "Votre nom",
      emailLabel: "E-mail",
      subjectLabel: "Sujet",
      subjectPlaceholder: "De quoi souhaitez-vous parler ?",
      messageLabel: "Message",
      messagePlaceholder:
        "Parlez-nous de votre activité, de vos chiffres, de ce que vous voulez suivre…",
      submit: "Envoyer le message",
      sending: "Envoi…",
      success: "Merci — votre message est parti. Nous revenons vers vous très vite.",
      error: "Une erreur est survenue. Réessayez ou écrivez-nous directement.",
      privacyNote: "Vos coordonnées servent uniquement à répondre. Pas de spam, pas de partage.",
    },
    checkout: {
      title: "Finalisez votre abonnement",
      close: "Fermer",
      back: "Retour",
      done: "Terminé",
      tryAgain: "Réessayer",
      choosePaymentMethod: "Choisissez un moyen de paiement",
      payWithCard: "Carte bancaire",
      cardSubtitle: "Tous pays · Stripe",
      payWithMobile: "Mobile Money (Cameroun)",
      emailLabel: "E-mail",
      emailLabelOptional: "E-mail (optionnel)",
      operatorLabel: "Opérateur",
      phoneLabel: "Numéro de téléphone",
      continueToPayment: "Aller au paiement",
      redirecting: "Redirection…",
      payNow: "Payer maintenant",
      processing: "Traitement…",
      checkPhone: "Vérifiez votre téléphone",
      checkPhoneHint: "Validez la demande reçue dans votre application Mobile Money, puis patientez quelques secondes.",
      referenceLabel: "Référence",
      success: "Paiement reçu",
      successDetails: "Votre abonnement est en cours d'activation. Une confirmation vous a été envoyée.",
      stripeFooter: "Vous serez redirigé vers le paiement sécurisé Stripe. Votre carte est nécessaire pour démarrer l'essai gratuit de 21 jours. Aucun prélèvement jusqu'à la fin de l'essai — annulez à tout moment avant.",
      campayFooter: "Nous envoyons une demande de paiement à votre téléphone. Confirmez avec votre code PIN Mobile Money.",
      errors: {
        timeout: "Délai de paiement dépassé. Veuillez réessayer.",
        declined: "Paiement refusé ou annulé.",
      },
    },
    footer: {
      tagline: "SaaS axé KPI pour commerces, activités hybrides et de production. Une vraie rentabilité,",
      taglineHighlight: "en moins de 90 secondes.",
      ctaPrimary: "Essai gratuit",
      ctaSecondary: "Nous contacter",
      cols: {
        product: "Produit",
        company: "Entreprise",
        legal: "Légal",
      },
      links: {
        howItWorks: "Comment ça marche",
        pricing: "Tarifs",
        faq: "FAQ",
        about: "À propos",
        contact: "Contact",
        careers: "Carrières",
        privacy: "Confidentialité",
        terms: "Conditions",
        cookies: "Cookies",
      },
      rights: "Tous droits réservés.",
      madeForLead: "Fait pour les",
      madeForShops: "boutiques",
      madeForWorkshops: "ateliers",
      madeForRest: "et activités hybrides.",
    },
  },

  de: {
    nav: {
      howItWorks: "So funktioniert's",
      pricing: "Preise",
      faq: "FAQ",
      aiCoach: "KI-Coach",
      news: "Neuigkeiten",
      contact: "Kontakt",
      signIn: "Anmelden",
      startFree: "Kostenlos starten",
    },
    hero: {
      badge: "KPI-fokussiertes SaaS für Einzelhandel, Hybrid- und Produktionsbetriebe",
      headlinePart1: "In weniger als 90 Sekunden wissen, ob Ihr Unternehmen",
      headlinePart2: "wirklich profitabel ist.",
      paragraph:
        "ShopByJLC verwandelt Ihre täglichen Zahlen in die wenigen KPIs, die wirklich zählen — Schluss mit Raten, profitable Steuerung von Laden, Werkstatt oder Hybridbetrieb.",
      ctaPrimary: "Kostenlos starten — ohne Karte",
      ctaSecondary: "So funktioniert's",
      stats: [
        { k: "90s", v: "bis zur echten Marge" },
        { k: "1 Dashboard", v: "alles auf einen Blick" },
        { k: "0 Tabellen", v: "Schluss mit Handarbeit" },
      ],
    },
    howItWorks: {
      title: "So funktioniert's",
      subtitle:
        "Von rohen Tageszahlen zu einem klaren Bild Ihrer Profitabilität — in vier einfachen Schritten.",
      steps: [
        {
          title: "Betrieb verbinden",
          body: "Kasse oder Buchhaltungstool anbinden — oder einfach Umsatz und Kosten eintragen. Wir unterstützen Handel, Produktion und Hybridmodelle.",
        },
        {
          title: "Die richtigen KPIs wählen",
          body: "Marge, Cash Conversion, Break-even, Stückkosten — wählen Sie die Kennzahlen, die zu Ihrem Geschäftsmodell passen.",
        },
        {
          title: "90-Sekunden-Verdikt erhalten",
          body: "Ein klares Dashboard zeigt, ob Sie wirklich profitabel sind, wo Geld verloren geht und was diese Woche zu tun ist.",
        },
        {
          title: "Entscheiden und handeln",
          body: "Wöchentliche Empfehlungen und Hinweise sorgen dafür, dass sich Ihre Zahlen in die richtige Richtung bewegen — ohne Tabellenakrobatik.",
        },
      ],
    },
    news: {
      badge: "Neu",
      title: "Aktuelles von ShopByJLC",
      subtitle:
        "Produkt-Launches, Verbesserungen und Ankündigungen, die Sie kennen sollten.",
      items: [
        {
          tag: "Launch",
          tone: "brand",
          date: "Apr. 2026",
          title: "Mobile-Money-Checkout für Kamerun",
          body: "Abonnieren Sie jeden Plan über MTN oder Orange Mobile Money. Kartenzahlung via Stripe funktioniert weiterhin in allen Ländern.",
        },
        {
          tag: "Neu",
          tone: "accent",
          date: "März 2026",
          title: "ShopByJLC Coach ist live",
          body: "Fragen Sie Ihre Zahlen alles in einfacher Sprache. Der KI-Coach läuft jetzt direkt auf der Startseite — ohne Anmeldung testbar.",
        },
        {
          tag: "Update",
          tone: "brand",
          date: "Feb. 2026",
          title: "Produktions- & Werkstatt-KPIs",
          body: "Verfolgen Sie Stückkosten, Ausschussquote und Marge pro produziertem Stück. Gemacht für Bäckereien, Schneider, Handwerk und Reparatur.",
        },
      ],
    },
    audience: {
      title: "Gebaut für die Betriebe, die Sie wirklich führen",
      subtitle:
        "Ob Sie hinter der Theke verkaufen, in der Werkstatt fertigen oder beides — ShopByJLC spricht Ihre Zahlen.",
      items: [
        {
          title: "Einzelhandel",
          body: "Boutiquen, Kioske, Fachgeschäfte. Tagesumsatz, Marge pro Kategorie und welche Woche sich gelohnt hat — auf einen Blick.",
        },
        {
          title: "Werkstatt & Produktion",
          body: "Bäckereien, Schneider, Handwerk, Reparatur. Stückkosten, Ausschussquote und die Marge hinter jedem Stück, das Sie herstellen.",
        },
        {
          title: "Hybridbetriebe",
          body: "Cafés, Salons und Läden mit Dienstleistungen. Umsatz-Mix, Mix-Performance und Break-even auf beiden Seiten — sichtbar gemacht.",
        },
      ],
    },
    agent: {
      badge: "KI · ShopByJLC Coach",
      title: "Fragen Sie Ihre Zahlen alles, was Sie wissen wollen",
      subtitle:
        "Ein Live-KI-Coach, der Ihre KPIs in eine klare Antwort verwandelt — direkt hier ausprobieren, ohne Anmeldung.",
      benefitsTitle: "Was er macht",
      benefits: [
        {
          title: "Lecks aufspüren",
          body: "Fragen Sie „Wo verliere ich Marge?“ und erhalten Sie eine fokussierte Liste für diese Woche.",
        },
        {
          title: "Zahlen übersetzen",
          body: "Kein Buchhaltungsjargon. Nur die KPIs, die entscheiden, ob Sie profitabel sind.",
        },
        {
          title: "Nächsten Schritt entscheiden",
          body: "Eine konkrete Maßnahme — Preisanpassung, Produktmix, Kostenschnitt — statt mehr Dashboards.",
        },
      ],
      poweredBy:
        "Powered by Claude. Antworten sind allgemeine Hinweise, keine Finanzberatung.",
      chatTitle: "ShopByJLC Coach",
      reset: "Neues Gespräch",
      intro:
        "Hallo — ich bin Ihr ShopByJLC Coach. Erzählen Sie mir von Ihrem Betrieb oder wählen Sie eine Frage zum Start.",
      tryLabel: "Probieren Sie eine davon",
      quickPrompts: [
        "Verdiene ich diesen Monat Geld?",
        "Wo verliere ich Marge?",
        "Worauf soll ich diese Woche fokussieren?",
        "Hilf mir bei meiner Preisgestaltung",
      ],
      inputPlaceholder: "Fragen Sie nach KPIs, Margen, Preisen…",
      send: "Senden",
      disclaimer:
        "KI-Antworten können falsch sein. Wichtige Entscheidungen bitte gegenprüfen.",
    },
    pricing: {
      title: "Einfache Preise, die mit Ihnen wachsen",
      subtitle: "Starten Sie mit 21 Tagen kostenloser Testphase — Karte erforderlich, jederzeit kündbar. Preise in EUR, zzgl. Steuern.",
      perMonth: "/ Monat",
      mostPopular: "Beliebteste",
      trialBadge: "21 Tage kostenlos · jederzeit kündbar",
      trialNoteMobile: "Mobile-Money-Abos werden sofort belastet (ohne Testphase).",
      tiers: [
        {
          name: "Trial",
          price: "0 €",
          description: "Temporärer Zugang zu den erweiterten Funktionen von ShopByJLC.",
          features: [
            "1 Unternehmen",
            "5 Nutzer",
            "3 KI-Agenten inklusive",
          ],
          cta: "Test starten",
        },
        {
          name: "Starter",
          price: "9,99 €",
          description: "Für ein kleines Unternehmen, das Umsatz, Lagerbestand und Rentabilität verfolgen will.",
          features: [
            "1 Unternehmen",
            "2 Nutzer",
            "1 KI-Agent inklusive",
          ],
          cta: "Mit Starter loslegen",
        },
        {
          name: "Pro",
          price: "19,99 €",
          description: "Steuern Sie Ihr Unternehmen mit erweiterten Berichten und essenziellen KI-Agenten.",
          features: [
            "1 Unternehmen",
            "5 Nutzer",
            "3 KI-Agenten inklusive",
          ],
          cta: "Pro wählen",
        },
        {
          name: "Business / Team",
          price: "39,99 €",
          description: "Für mehrere Aktivitäten, ein Team und mehr Automatisierungen.",
          features: [
            "1 Unternehmen",
            "15 Nutzer",
            "5 KI-Agenten inklusive",
          ],
          cta: "Business wählen",
        },
        {
          name: "Enterprise",
          price: "ab 79,99 €",
          description: "Für fortgeschrittene Strukturen mit Begleitung, Integrationen und individueller KI.",
          features: [
            "1 Unternehmen zum Start inklusive",
            "Priorisiertes Onboarding",
            "KI-Agenten nach Maß",
          ],
          cta: "Enterprise wählen",
        },
      ],
    },
    faq: {
      title: "Häufige Fragen",
      subtitle: "Alles, was Sie sich vor dem Start fragen könnten.",
      items: [
        {
          q: "Für wen ist ShopByJLC?",
          a: "Für Inhaber von stationären Betrieben, Einzelhandel, Hybridmodellen (Verkauf + Service) und Produktionsbetrieben, die — schnell und ohne Tabellen — wissen wollen, ob sie wirklich profitabel sind.",
        },
        {
          q: "Brauche ich Buchhaltungs-Wissen?",
          a: "Nein. Wir übersetzen Ihre Zahlen in wenige einfache KPIs und ein klares Verdikt. Wer Tagesumsatz und Hauptkosten eintragen kann, kann ShopByJLC nutzen.",
        },
        {
          q: 'Was bedeutet "in weniger als 90 Sekunden" genau?',
          a: "Sobald Ihre Daten verbunden oder eingetragen sind, zeigt das Dashboard die wichtigsten Profitabilitäts-Kennzahlen in Sekunden. Versprochen: eine klare Antwort auf „Verdiene ich Geld?“ in unter 90 Sekunden.",
        },
        {
          q: "Kann ich mein Abo jederzeit kündigen?",
          a: "Ja. Alle Pläne laufen monatlich. Hochstufen, runterstufen oder kündigen — jederzeit, ohne lange Bindung.",
        },
        {
          q: "Gibt es eine kostenlose Testphase?",
          a: "Ja. Sie können kostenlos ohne Kartenangabe starten. Wenn Sie soweit sind, wählen Sie den Plan, der zu Größe und Bedarf passt.",
        },
        {
          q: "Sind meine Daten sicher?",
          a: "Ihre Geschäftsdaten sind bei Übertragung und Speicherung verschlüsselt. Wir verkaufen Ihre Daten nie, und Sie können sie jederzeit exportieren oder löschen.",
        },
      ],
    },
    pages: {
      howItWorks: {
        eyebrow: "So funktioniert's",
        title: "Von rohen Tageszahlen zu einem klaren Profit-Verdikt",
        subtitle:
          "Vier einfache Schritte, um das, was Sie über Ihren Betrieb schon wissen, in die wenigen KPIs zu verwandeln, die über Profitabilität entscheiden.",
        metaTitle: "So funktioniert ShopByJLC — 4 Schritte zur echten Marge",
        metaDescription:
          "Daten verbinden, die richtigen KPIs wählen, in 90 Sekunden ein Verdikt erhalten und jede Woche gezielt handeln.",
      },
      aiCoach: {
        eyebrow: "KI-Coach",
        title: "Fragen Sie Ihre Zahlen alles, was Sie wissen wollen",
        subtitle:
          "Ein Live-KI-Coach, der Ihre KPIs in eine klare Antwort verwandelt — direkt hier ausprobieren, ohne Anmeldung.",
        metaTitle: "ShopByJLC Coach — KI für Ihre Profitabilität",
        metaDescription:
          "Fragen Sie den ShopByJLC-KI-Coach, wo Sie Marge verlieren, wie Sie Preise setzen und worauf Sie diese Woche fokussieren sollten.",
      },
      pricing: {
        eyebrow: "Preise",
        title: "Pläne, die zu Ihrer Betriebsgröße passen",
        subtitle:
          "Starten Sie mit 21 Tagen kostenloser Testphase — ohne Verpflichtung. Wählen Sie den Plan, der zu Ihrem Laden, Ihrer Werkstatt oder Ihrem Hybridbetrieb passt.",
        metaTitle: "Preise — ShopByJLC mit 21 Tagen Testphase",
        metaDescription:
          "Einfache monatliche Pläne für Einzelhandel, Produktion und Hybridbetriebe. 21 Tage kostenlos, jederzeit kündbar.",
      },
      news: {
        eyebrow: "Neuigkeiten",
        title: "Aktuelles von ShopByJLC",
        subtitle:
          "Produkt-Launches, Verbesserungen und Ankündigungen, die Sie kennen sollten.",
        metaTitle: "News & Produkt-Updates — ShopByJLC",
        metaDescription:
          "Was ist neu bei ShopByJLC: Launches, Verbesserungen und Ankündigungen für Einzelhandel und Produktion.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Häufig gestellte Fragen",
        subtitle:
          "Antworten auf die wichtigsten Fragen vor der Anmeldung — Preise, Daten, Testphase und wie die 90-Sekunden-Profitabilitätsprüfung funktioniert.",
        metaTitle: "FAQ — ShopByJLC",
        metaDescription:
          "Antworten zu ShopByJLC: für wen es ist, die Testphase, Ihre Daten, und wie das 90-Sekunden-Verdikt funktioniert.",
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Sprechen Sie mit dem ShopByJLC-Team",
        subtitle:
          "Demo, Frage oder kniffliges Geschäftsmodell? Schreiben Sie uns — wir antworten innerhalb eines Werktags.",
        metaTitle: "Kontakt — ShopByJLC",
        metaDescription:
          "Erreichen Sie das ShopByJLC-Team für eine Demo, eine Frage oder ein maßgeschneidertes Setup. Antwort innerhalb 1 Werktag.",
      },
      about: {
        eyebrow: "Über uns",
        title: "Damit Inhaber kleiner Betriebe ihre Zahlen endlich klar sehen",
        subtitle:
          "Ein kleines Team, besessen von einer Frage: verdient dieser Betrieb Geld? ShopByJLC verwandelt Tagesumsatz und Kosten in die wenigen KPIs, die diese Frage wirklich beantworten.",
        metaTitle: "Über ShopByJLC",
        metaDescription:
          "Warum ShopByJLC existiert, woran wir glauben, und wer es baut.",
        body: [
          {
            heading: "Das Problem, das wir immer wieder sahen",
            paragraphs: [
              "Die meisten Inhaber von Läden, Werkstätten und Hybridbetrieben hatten denselben blinden Fleck: Sie kannten ihren Tagesumsatz, hatten eine grobe Vorstellung ihrer Kosten — konnten aber nicht mit Sicherheit sagen, ob der Monat profitabel war. Tabellen häuften sich, Buchhaltungssoftware beantwortete andere Fragen, und das einfache Verdikt — „Verdiene ich Geld?“ — blieb unerreichbar.",
              "ShopByJLC schließt diese Lücke. Wir verwandeln die Zahlen, die ein Betrieb sowieso erzeugt, in die wenigen KPIs, die über Profitabilität entscheiden — schnell genug, dass das Prüfen der echten Marge zur Tagesgewohnheit wird.",
            ],
          },
          {
            heading: "Woran wir glauben",
            paragraphs: [
              "Klarheit schlägt Komplexität. Drei KPIs, die Sie wirklich anschauen, sind mehr wert als dreißig, die Sie ignorieren.",
              "Geschwindigkeit zählt. Eine 90-Sekunden-Antwort ändert das Verhalten; ein 90-minütiger Bericht nicht.",
              "Ihre Daten gehören Ihnen. Wir verkaufen sie nie, und Sie können sie jederzeit exportieren oder löschen.",
            ],
          },
          {
            heading: "Wer es baut",
            paragraphs: [
              "ShopByJLC wird von Jean-Loïc Cyriaque (das J·L·C im Namen) mit einem kleinen verteilten Team in Kamerun und Europa gebaut. Wir kommen aus Einzelhandel, Software-Engineering und Finanzen und nutzen ShopByJLC selbst auf den Nebenbetrieben, die uns gezeigt haben, wie sehr dieses Werkzeug fehlte.",
            ],
          },
        ],
      },
      careers: {
        eyebrow: "Karriere",
        title: "Helfen Sie uns, das einfachste Profit-Dashboard zu bauen",
        subtitle:
          "Wir sind ein kleines verteiltes Team. Stellen werden selten frei — aber wir hören gerne von Menschen, denen die Profitabilität kleiner Betriebe wichtig ist.",
        metaTitle: "Karriere bei ShopByJLC",
        metaDescription:
          "Wir suchen aktuell nicht aktiv, freuen uns aber über Vorstellungen von Menschen mit Bezug zu Einzelhandel oder Produktion.",
        body: [
          {
            heading: "Wo wir sind",
            paragraphs: [
              "ShopByJLC ist ein kleines verteiltes Team in Kamerun und Europa. Wir arbeiten auf Englisch, Französisch und Deutsch. Wir bewegen uns schnell, liefern fokussierte Funktionen und hören echten Ladenbetreibern aufmerksam zu.",
            ],
          },
          {
            heading: "Offene Stellen",
            paragraphs: [
              "Aktuell keine offenen Stellen. Wenn wir einstellen, suchen wir Menschen mit echtem Bezug zum Einzelhandel oder zur Produktion und Können in Produkt, Engineering oder Design.",
            ],
          },
          {
            heading: "Trotzdem schreiben",
            paragraphs: [
              "Wenn Sie gut zu uns passen würden und möchten, dass wir Ihre Daten festhalten, schreiben Sie an careers@shopbyjlc.com mit einem kurzen Hinweis und einem Link zu etwas, das Sie umgesetzt oder geschrieben haben.",
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "Datenschutz",
        title: "Datenschutzerklärung",
        subtitle: "Wie wir Ihre Daten bei ShopByJLC erheben, nutzen und schützen.",
        metaTitle: "Datenschutzerklärung — ShopByJLC",
        metaDescription:
          "Wie ShopByJLC mit Ihren Daten umgeht: was wir erfassen, wie wir es nutzen und Ihre Rechte unter der DSGVO.",
        updatedAt: "2. Mai 2026",
        body: [
          {
            heading: "Wer wir sind",
            paragraphs: [
              "ShopByJLC („wir“) bietet ein SaaS zur Profitabilitäts-Auswertung für Einzelhandel, Produktion und Hybridbetriebe. Diese Erklärung beschreibt, was wir mit personenbezogenen Daten tun, die Sie uns beim Besuch der Website, bei Kontakt oder beim Abonnement geben.",
            ],
          },
          {
            heading: "Was wir erfassen",
            paragraphs: [
              "Kontodaten, die Sie direkt angeben: Name, E-Mail, Firmenname, Sprachpräferenz und — bei Abonnement — Zahlungsdaten, die unsere Zahlungsdienstleister verarbeiten.",
              "Nutzungsdaten: besuchte Seiten, grundlegende Geräte- und Browser-Infos und ungefähre geografische Region aus Ihrer IP. Keine Werbe-Tracker.",
              "Geschäfts-KPIs, die Sie eintragen oder anbinden: Umsatz, Kosten, Kategorien. Diese Daten gehören Ihnen.",
            ],
          },
          {
            heading: "Wie wir es nutzen",
            paragraphs: [
              "Um den Service zu erbringen: Dashboard rendern, Konto-E-Mails senden, Abonnements verarbeiten und Sie zu unterstützen.",
              "Um das Produkt zu verbessern: aggregierte, anonymisierte Auswertungen, welche Funktionen genutzt werden.",
              "Um rechtliche Pflichten zu erfüllen: Rechnungen, Steuerunterlagen, Betrugsprävention.",
            ],
          },
          {
            heading: "An wen wir weitergeben",
            paragraphs: [
              "Wir nutzen wenige Auftragsverarbeiter strikt zum Betrieb des Dienstes: Stripe (Kartenzahlung), Campay (Mobile Money in Kamerun), Convex (Datenbank), Resend (transaktionale E-Mails) und Anthropic (KI-Coach). Jeder ist vertraglich verpflichtet, Ihre Daten nur zur Erbringung seines Dienstes für uns zu verarbeiten.",
              "Wir verkaufen Ihre Daten nie und teilen sie nie zu Werbezwecken.",
            ],
          },
          {
            heading: "Ihre Rechte",
            paragraphs: [
              "In EU, UK und der Schweiz gibt Ihnen die DSGVO das Recht auf Auskunft, Berichtigung, Export oder Löschung Ihrer Daten und auf Widerspruch gegen bestimmte Nutzungen. Andere Jurisdiktionen gewähren ähnliche Rechte.",
              "Schreiben Sie an info@shopbyjlc.com — wir antworten innerhalb von 30 Tagen.",
            ],
          },
          {
            heading: "Aufbewahrung",
            paragraphs: [
              "Kontodaten werden während der aktiven Nutzung und bis zu 12 Monate nach Schließung aufbewahrt, um Abrechnungs- und Rechtsfragen zu klären. Server-Logs werden bis zu 90 Tage gespeichert.",
            ],
          },
          {
            heading: "Kontakt",
            paragraphs: [
              "Fragen zu dieser Erklärung? Schreiben Sie an info@shopbyjlc.com oder über die Kontaktseite.",
            ],
          },
        ],
      },
      terms: {
        eyebrow: "AGB",
        title: "Nutzungsbedingungen",
        subtitle: "Die Vereinbarung zwischen Ihnen und ShopByJLC bei Nutzung des Dienstes.",
        metaTitle: "AGB — ShopByJLC",
        metaDescription:
          "Bedingungen zu Abonnements, 21-tägiger Testphase, Kündigung, akzeptabler Nutzung und Haftung bei ShopByJLC.",
        updatedAt: "2. Mai 2026",
        body: [
          {
            heading: "Annahme",
            paragraphs: [
              "Mit dem Anlegen eines Kontos, dem Start einer Testphase oder der Nutzung von ShopByJLC akzeptieren Sie diese Bedingungen. Andernfalls nutzen Sie den Dienst bitte nicht.",
            ],
          },
          {
            heading: "Der Dienst",
            paragraphs: [
              "ShopByJLC ist ein SaaS zur Profitabilitäts-Auswertung für Läden, Werkstätten und Hybridbetriebe. Wir bieten Dashboards, KPIs und einen KI-Coach. Funktionen und Limits hängen von Ihrem Plan ab.",
            ],
          },
          {
            heading: "Testphase und Abrechnung",
            paragraphs: [
              "Beim Auswählen eines Plans erfassen wir ein Zahlungsmittel und gewähren 21 Tage kostenlose Testphase. Während der Testphase belasten wir Sie nicht. Am 21. Tag wird die monatliche Gebühr automatisch eingezogen, außer Sie kündigen vorher.",
              "Nach der Testphase verlängern sich Pläne monatlich. Preise sind in EUR (zzgl. Steuern), sofern nicht anders angegeben. Preisänderungen kündigen wir mindestens 30 Tage vorher an.",
            ],
          },
          {
            heading: "Kündigung und Erstattungen",
            paragraphs: [
              "Sie können jederzeit aus Ihrem Konto oder per E-Mail kündigen. Die Kündigung greift zum Ende des laufenden Abrechnungszeitraums — bis dahin behalten Sie den Zugriff.",
              "Anteilige Monate erstatten wir in der Regel nicht. Ist offensichtlich etwas falsch, schreiben Sie uns — wir bringen das in Ordnung.",
            ],
          },
          {
            heading: "Akzeptable Nutzung",
            paragraphs: [
              "Keine illegale Nutzung, keine Rechtsverletzungen, kein Spam, keine Störungsversuche. Konten bitte nicht teilen, Zugangsdaten sicher aufbewahren.",
            ],
          },
          {
            heading: "Haftung",
            paragraphs: [
              "ShopByJLC wird „wie besehen“ bereitgestellt. KPIs und Antworten des KI-Coachs sind Hinweise, keine Finanzberatung — wichtige Entscheidungen sollten gegengeprüft werden. Soweit gesetzlich zulässig, ist unsere Gesamthaftung auf die in den 12 Monaten vor dem Anspruch gezahlten Gebühren begrenzt.",
            ],
          },
          {
            heading: "Änderungen",
            paragraphs: [
              "Wir können diese Bedingungen aktualisieren. Wesentliche Änderungen kündigen wir mindestens 30 Tage vorher per E-Mail oder im Produkt an.",
            ],
          },
          {
            heading: "Kontakt",
            paragraphs: [
              "Fragen? Schreiben Sie an info@shopbyjlc.com oder über die Kontaktseite.",
            ],
          },
        ],
      },
      cookies: {
        eyebrow: "Cookies",
        title: "Cookie-Richtlinie",
        subtitle: "Was wir auf Ihrem Gerät speichern und warum.",
        metaTitle: "Cookie-Richtlinie — ShopByJLC",
        metaDescription:
          "Die kleine Menge an Cookies und lokalem Speicher, die ShopByJLC nutzt, und wie Sie ablehnen können.",
        updatedAt: "2. Mai 2026",
        body: [
          {
            heading: "Was Cookies sind",
            paragraphs: [
              "Cookies und ähnliche Technologien wie lokaler Speicher sind kleine Datenstücke, die eine Website auf Ihrem Gerät ablegt, um sich zwischen Besuchen Dinge zu merken.",
            ],
          },
          {
            heading: "Was wir nutzen",
            paragraphs: [
              "Nur Notwendiges. Wir speichern Ihre Sprachpräferenz (EN/FR/DE) im lokalen Speicher Ihres Browsers, damit die Seite beim nächsten Besuch in Ihrer Sprache lädt. Keine Werbung, kein Verhaltens-Tracking, keine Drittanbieter-Analytics auf dieser Seite.",
            ],
          },
          {
            heading: "Drittanbieter-Dienste",
            paragraphs: [
              "Bei Nutzung des KI-Coachs oder Stripe Checkout setzen diese Dienste eigene Cookies für Sicherheit und Sitzungen. Es gelten deren eigene Richtlinien (anthropic.com, stripe.com).",
            ],
          },
          {
            heading: "Wie Sie ablehnen",
            paragraphs: [
              "Da wir nur essenziellen Speicher nutzen, gibt es bei uns nichts abzulehnen. Sie können Cookies und lokalen Speicher jederzeit in den Browsereinstellungen löschen — Ihre Sprache wird dann auf den Standardwert zurückgesetzt, bis Sie sie erneut wählen.",
            ],
          },
          {
            heading: "Kontakt",
            paragraphs: [
              "Fragen? Schreiben Sie an info@shopbyjlc.com.",
            ],
          },
        ],
      },
      updatedLabel: "Zuletzt aktualisiert",
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle:
        "Fragen, Demo oder ein kniffliges Geschäftsmodell — wir freuen uns auf Ihre Nachricht.",
      detailsTitle: "Das Team erreichen",
      detailsSubtitle: "Wählen Sie den passenden Kanal, wir melden uns schnell zurück.",
      emailHeading: "Per E-Mail",
      responseHeading: "Antwortzeit",
      responseBody: "Innerhalb eines Werktags, oft schneller.",
      hoursHeading: "Bürozeiten",
      hoursBody: "Montag – Freitag, 9:00 – 18:00 Uhr (MEZ / WAT)",
      nameLabel: "Ihr Name",
      emailLabel: "E-Mail",
      subjectLabel: "Betreff",
      subjectPlaceholder: "Worum geht es?",
      messageLabel: "Nachricht",
      messagePlaceholder:
        "Erzählen Sie uns von Ihrem Betrieb, Ihren Zahlen, was Sie verfolgen möchten…",
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
      success: "Danke — Ihre Nachricht ist unterwegs. Wir melden uns in Kürze.",
      error: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder direkt schreiben.",
      privacyNote: "Ihre Angaben dienen nur der Antwort. Kein Spam, keine Weitergabe.",
    },
    checkout: {
      title: "Abonnement abschließen",
      close: "Schließen",
      back: "Zurück",
      done: "Fertig",
      tryAgain: "Erneut versuchen",
      choosePaymentMethod: "Zahlungsmethode wählen",
      payWithCard: "Kredit-/Debitkarte",
      cardSubtitle: "Weltweit · Stripe",
      payWithMobile: "Mobile Money (Kamerun)",
      emailLabel: "E-Mail",
      emailLabelOptional: "E-Mail (optional)",
      operatorLabel: "Anbieter",
      phoneLabel: "Telefonnummer",
      continueToPayment: "Weiter zur Zahlung",
      redirecting: "Weiterleiten…",
      payNow: "Jetzt bezahlen",
      processing: "Wird verarbeitet…",
      checkPhone: "Prüfen Sie Ihr Telefon",
      checkPhoneHint: "Bestätigen Sie die Zahlungsanfrage in Ihrer Mobile-Money-App und warten Sie einen Moment.",
      referenceLabel: "Referenz",
      success: "Zahlung erhalten",
      successDetails: "Ihr Abonnement wird aktiviert. Eine Bestätigung wurde gesendet.",
      stripeFooter: "Sie werden zur sicheren Stripe-Kasse weitergeleitet. Ihre Karte wird benötigt, um die 21-tägige Testphase zu starten. Keine Belastung bis zum Ende der Testphase — vorher jederzeit kündbar.",
      campayFooter: "Wir senden eine Zahlungsanfrage an Ihr Telefon. Bestätigen Sie mit Ihrer Mobile-Money-PIN.",
      errors: {
        timeout: "Zeitüberschreitung. Bitte erneut versuchen.",
        declined: "Zahlung abgelehnt oder abgebrochen.",
      },
    },
    footer: {
      tagline: "KPI-fokussiertes SaaS für Einzelhandel, Hybrid- und Produktionsbetriebe. Echte Profitabilität,",
      taglineHighlight: "in unter 90 Sekunden.",
      ctaPrimary: "Kostenlos starten",
      ctaSecondary: "Mit uns sprechen",
      cols: {
        product: "Produkt",
        company: "Unternehmen",
        legal: "Rechtliches",
      },
      links: {
        howItWorks: "So funktioniert's",
        pricing: "Preise",
        faq: "FAQ",
        about: "Über uns",
        contact: "Kontakt",
        careers: "Karriere",
        privacy: "Datenschutz",
        terms: "AGB",
        cookies: "Cookies",
      },
      rights: "Alle Rechte vorbehalten.",
      madeForLead: "Gemacht für",
      madeForShops: "Läden",
      madeForWorkshops: "Werkstätten",
      madeForRest: "& Hybridbetriebe.",
    },
  },
};
