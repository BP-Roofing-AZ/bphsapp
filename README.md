# Blueprint Home Services CRM

Internal CRM + operations app for Blueprint Home Services / Blueprint
Roofing & Solar. Cloudflare Workers + D1 (SQLite) + R2, with a
static-served frontend under `/frontend`.

> **This repository is source-only.** Running the app end-to-end
> requires several external services (see **Requirements** below).
> A local checkout without those services configured will render
> the UI shell and show `API disconnected` banners on every page —
> this is expected. See **Setup** for provisioning steps.

---

## Requirements

Production deploy depends on the following external services. None
of their credentials are included in this repository — they are
provisioned per-environment via Cloudflare Workers env vars and
secrets:

| Service                 | Purpose                              | Env var(s) |
|-------------------------|--------------------------------------|------------|
| Cloudflare Workers Paid | Runtime + scheduled + email handler  | *(configured on the account)* |
| Cloudflare D1           | Primary datastore                    | `DB` binding |
| Cloudflare R2           | File / photo / PDF storage           | `FILES` binding |
| Cloudflare Email Routing| Inbound customer + support replies   | Route → Worker |
| Resend                  | Transactional email                  | `RESEND_API_KEY` |
| Twilio                  | SMS + MMS + A2P campaigns            | `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER` |
| Stripe                  | Card + ACH + BNPL payment processing | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` |
| DocuSign (legacy)       | Estimate signing (legacy flow)       | `DOCUSIGN_INTEGRATION_KEY`, `DOCUSIGN_USER_ID`, `DOCUSIGN_ACCOUNT_ID`, `DOCUSIGN_RSA_KEY` |
| Google OAuth            | Admin sign-in + Calendar sync        | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` |
| Microsoft OAuth         | Admin sign-in + Outlook Calendar     | `MS_CLIENT_ID`, `MS_CLIENT_SECRET`, `MS_TENANT_ID` |
| EagleView               | Roof measurement report import       | `EAGLEVIEW_API_KEY` |
| JobNimbus (legacy)      | Cross-CRM sync bridge                | `JOBNIMBUS_API_KEY`, `AUTO_SYNC_SECRET` |
| ABC Supply              | Material catalog + orders            | `ABC_CLIENT_ID`, `ABC_CLIENT_SECRET` |
| SolarEdge               | Per-site solar monitoring            | *(per-customer keys stored in D1)* |
| Web Push (VAPID)        | Admin notifications                  | `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT` |
| JWT signing             | Session tokens                       | `AUTH_JWT_SECRET`, `SESSION_SECRET` |

See `.env.example` for the full list of expected variables. See
`ADMIN_RUNBOOK.md` for provisioning steps and the `DEPLOYMENT.md`
document for the deploy pipeline.

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy .env.example → .env and fill in the values.
#    Values must come from the account owner — the repository does
#    not ship real credentials.
cp .env.example .env

# 3. Apply schema to a fresh D1 database (see wrangler.toml
#    for the `DB` binding, and every schema_v*.sql migration
#    in this repo — apply them in numeric order).
npx wrangler d1 execute bphs-db --file schema.sql --remote
for f in schema_v*.sql; do
  npx wrangler d1 execute bphs-db --file "$f" --remote
done

# 4. Push secrets to Cloudflare Workers (each value from step 2)
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TWILIO_ACCOUNT_SID
# …repeat for every secret listed in .env.example

# 5. Deploy
npx wrangler deploy
```

Without steps 2–4 completed the deployed Worker will return
`503 { ok: false, error: 'disconnected' }` for every `/api/*` route
and the frontend will show the API-disconnected banner on load.
This is by design — it prevents accidental production traffic when
the environment is only partially provisioned.

---

## Local development

Requires the same set of secrets in a local `.dev.vars` file that
`wrangler dev` reads automatically. Even in local development the
following are required to actually issue outbound network calls:
Resend account, Twilio account, Stripe test-mode keys.

```bash
npx wrangler dev
# Open http://localhost:8787
```

Frontend-only preview (no backend, no data) works out of the box —
every page will render the shell + API-disconnected state.

---

## Support

Deploy, provisioning, and credential questions: contact the account
owner. This repository does not include contact information for
active service accounts.

// touched by v1.096

<!-- touched by v5.301 -->

<!-- touched by v5.306 -->
